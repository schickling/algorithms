'use strict';

angular.module('algorithmsApp')
	.directive('coordsystem', function () {

		return {

			template: '<canvas></canvas>',
			restrict: 'E',

			link: function postLink(scope, element, attrs) {

				var $canvas, context, minX, minY, maxX, maxY, width, height;

				initCanvas();
				initClickListener();
				initWatch();


				function initCanvas() {
					width = element.width();
					height = element.height();

					$canvas = element.children('canvas');
					$canvas.width(width).height(height);
					context = $canvas.get(0).getContext('2d');
				}

				function initClickListener() {
					$canvas.on('click', function (e) {
						var elementOffset = element.offset(),
							coordinate = new Coordinate(e.clientX - elementOffset.left, e.clientY - elementOffset.top).toRelative();

						scope.addCoordinate(coordinate);
					});
				}

				function initWatch() {
					scope.$watch('polynomials', function (polynomials) {
						polynomials.forEach(function (coefficients) {
							drawPolynomial(coefficients);
						});
					});
				}

				function drawAxes() {

				}

				function drawPolynomial(coefficients) {
					console.log(coefficients);
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
				}

			}

		};



	});