'use strict';

angular.module('algorithmsApp')
	.directive('coordsystem', function () {

		return {

			template: '<canvas></canvas>',
			restrict: 'E',

			link: function postLink(scope, element, attrs) {

				var $canvas, context, width, height;

				initCanvas();
				initClickListener();
				initWatch();


				function initCanvas() {
					width = element.width();
					height = element.height();

					$canvas = element.children('canvas').first();
					$canvas.attr({
						width: width,
						height: height
					});

					context = $canvas.get(0).getContext('2d');
				}

				function initClickListener() {
					$canvas.on('click', function (e) {
						var elementOffset = element.offset(),
							coordinate = new Coordinate(e.clientX - elementOffset.left, e.clientY - elementOffset.top).toRelative();
						console.log(coordinate);

						scope.addCoordinate(coordinate);
					});
				}

				function initWatch() {
					scope.$watch('polynomials', function () {
						draw();
					});
				}

				function draw() {
					resetContext();

					drawAxes();

					scope.polynomials.forEach(function (coefficients) {
						if (coefficients.length) {
							drawPolynomial(coefficients);
						}
					});

					scope.coordinates.forEach(function (coordinate) {
						drawPoint(coordinate);
					});

				}

				function resetContext() {
					context.clearRect(0, 0, width, height);
				}

				function drawAxes() {
					// var centerCoordinate = new Coordinate(0, 0).toAbsolute();
					// context.fillRect(centerCoordinate.x - 1, centerCoordinate.y - 1, 3, 3);
				}

				function drawPoint(coordinate) {
					coordinate = new Coordinate(coordinate.x, coordinate.y).toAbsolute();
					context.fillRect(coordinate.x - 1, coordinate.y - 1, 3, 3);
				}

				function drawPolynomial(coefficients) {

					var sum, x, power, coordinateToDraw;

					context.beginPath();

					for (x = -(width / 2); x <= width / 2; x++) {
						sum = 0;
						for (power = 0; power < coefficients.length; power++) {
							sum += Math.pow(x, power) * coefficients[power];
						}
						coordinateToDraw = new Coordinate(x, sum).toAbsolute();
						context.lineTo(coordinateToDraw.x, coordinateToDraw.y);
					}

					// context.lineWidth = 10;
					context.stroke();

				}

				function c(coordinate) {

				}

				function Coordinate(x, y) {
					this.x = x;
					this.y = y;

					this.toRelative = function () {
						this.x = this.x - (width / 2);
						this.y = (height / 2) - this.y;

						return this;
					};

					this.toAbsolute = function () {
						this.x = this.x + (width / 2);
						this.y = (height / 2) - this.y;

						return this;
					};

				}

			}

		};



	});