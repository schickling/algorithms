'use strict';

angular.module('algorithmsApp')
	.directive('interpolation', function (Utils) {

		return {

			template: '<canvas></canvas>',
			restrict: 'E',

			link: function postLink(scope, element) {

				var $canvas, context, width, height;

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

						scope.addCoordinate(coordinate);
					});
				}

				function initHoverListener() {
					var i, absCoordinate, hitPoint;
					$canvas.on('mousemove', function (e) {
						hitPoint = false;
						for (i = 0; i < scope.coordinates.length; i++) {
							absCoordinate = scope.coordinates[i].clone().toAbsolute();
							if (Math.abs(e.offsetX - absCoordinate.x) < 12 && Math.abs(e.offsetY - absCoordinate.y) < 12) {
								drawTangentForSpline(absCoordinate);
								hitPoint = true;
							}
						}
						if (!hitPoint) {
							draw();
						}
					});
				}

				function initWatch() {
					scope.$watch('polynomial', function () {
						draw();
					});
				}

				function draw() {
					resetContext();

					drawAxes();
					drawPolynomial();
					drawSplines();

					scope.coordinates.forEach(function (coordinate) {
						drawPoint(coordinate);
					});
				}

				function resetContext() {
					context.clearRect(0, 0, width, height);
				}

				function drawAxes() {
					var tickSize = 10;
					context.beginPath();
					// x axis
					context.moveTo(0, height / 2);
					context.lineTo(width - tickSize, height / 2);
					context.moveTo(width, height / 2);
					context.lineTo(width - tickSize, height / 2 - tickSize / 2);
					context.lineTo(width - tickSize, height / 2 + tickSize / 2);
					context.lineTo(width, height / 2);
					// y axis
					context.moveTo(width / 2, height);
					context.lineTo(width / 2, tickSize);
					context.moveTo(width / 2, 0);
					context.lineTo(width / 2 - tickSize / 2, tickSize);
					context.lineTo(width / 2 + tickSize / 2, tickSize);
					context.lineTo(width / 2, 0);
					// x ticks
					for (var x = 0; x < width; x += tickSize) {
						context.moveTo(x, height / 2 - 2);
						context.lineTo(x, height / 2 + 2);
					}
					// y ticks
					for (var y = tickSize; y <= height; y += tickSize) {
						context.moveTo(width / 2 - 2, y);
						context.lineTo(width / 2 + 2, y);
					}
					context.strokeStyle = '#000';
					context.stroke();
				}

				function drawPoint(coordinate) {
					var absCoordinate = coordinate.clone().toAbsolute();

					context.beginPath();
					context.arc(absCoordinate.x, absCoordinate.y, 12, 0, Math.PI * 2, true);
					context.closePath();
					context.fillStyle = 'rgba(0, 0, 0, 0.1)';
					context.fill();
					context.beginPath();
					context.arc(absCoordinate.x, absCoordinate.y, 3, 0, Math.PI * 2, true);
					context.closePath();
					context.fillStyle = 'rgba(0, 0, 0, 0.7)';
					context.fill();
					context.font = 'bold 10px helvetica';
					context.fillText(coordinate.x + ', ' + coordinate.y, absCoordinate.x + 10, absCoordinate.y + 10);

				}

				function drawTangentForSpline(absCoordinate) {
					if (scope.spline.splines) {
						var relCoordinate = absCoordinate.clone().toRelative(),
							spline = scope.spline.splines.filter(function (spline) {
								return spline.minX === relCoordinate.x || spline.maxX === relCoordinate.x;
							})[0],
							color = scope.spline.color,
							derivedPolynomial = Utils.derivePolynomial([spline.a, spline.b, spline.c, spline.d]),
							m = 0,
							coordinateToDraw, x, y, power, t;

						for (power = 0; power < derivedPolynomial.length; power++) {
							m += Math.pow(relCoordinate.x, power) * derivedPolynomial[power];
						}

						t = relCoordinate.y - m * relCoordinate.x;

						context.beginPath();

						for (x = -(width / 2); x <= width / 2; x++) {
							y = m * x + t;
							coordinateToDraw = new Coordinate(x, y).toAbsolute();
							context.lineTo(coordinateToDraw.x, coordinateToDraw.y);
						}

						context.strokeStyle = color;
						context.stroke();

					}
				}

				function drawPolynomial() {

					var y, x, power, coordinateToDraw,
						coefficients = scope.polynomial.coefficients,
						color = scope.polynomial.color;

					if (coefficients.length > 0) {

						context.beginPath();

						for (x = -(width / 2); x <= width / 2; x++) {
							y = 0;
							for (power = 0; power < coefficients.length; power++) {
								y += Math.pow(x, power) * coefficients[power];
							}
							coordinateToDraw = new Coordinate(x, y).toAbsolute();
							context.lineTo(coordinateToDraw.x, coordinateToDraw.y);
						}

						context.strokeStyle = color;
						context.stroke();
					}

				}

				function drawSplines() {

					if (scope.spline.splines) {
						var splines = scope.spline.splines,
							color = scope.spline.color,
							coordinateToDraw, spline, x, i, y, factor;

						context.beginPath();

						for (i = 0; i < splines.length; i++) {
							spline = splines[i];

							for (x = spline.minX; x < spline.maxX; x++) {

								factor = x - spline.minX;
								y = spline.a + spline.b * factor + spline.c * factor * factor + spline.d * factor * factor * factor;

								coordinateToDraw = new Coordinate(x, y).toAbsolute();
								context.lineTo(coordinateToDraw.x, coordinateToDraw.y);
							}

						}

						context.strokeStyle = color;
						context.stroke();
					}

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

					this.clone = function () {
						return new Coordinate(this.x, this.y);
					};
				}

				initCanvas();
				initClickListener();
				initHoverListener();
				initWatch();

			}

		};

	});