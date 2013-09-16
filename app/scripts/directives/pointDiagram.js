'use strict';

angular.module('algorithmsApp')
	.directive('pointDiagram', function () {
		return {
			template: '<canvas></canvas>',
			restrict: 'E',
			scope: true,
			link: function postLink(scope, element, attrs) {

				var $canvas, context, width, height, values, minimumValue, maximumValue, scale;

				function prepareValues() {
					values = scope.$parent[attrs.ngModel];
					var sortedValues = _.sortBy(values, function (value) {
						return value;
					});
					minimumValue = sortedValues[0];
					maximumValue = sortedValues[values.length - 1];
					scale = (width - 30) / (maximumValue - minimumValue); // 15px clean space on left/right side
				}

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

				function draw() {

					drawXAxis();

					for (var i = 0; i < values.length; i++) {
						drawValue(values[i], 0.6 * (i / (values.length - 1) + 0.2));
					}
				}

				function drawXAxis() {

				}

				function drawValue(value, alpha) {
					context.beginPath();
					context.arc(value * scale - minimumValue * scale + 15, height / 2, 3, 0, Math.PI * 2, true);
					context.closePath();
					context.fillStyle = 'rgba(0, 0, 0, ' + alpha + ')';
					context.fill();
				}

				initCanvas();
				prepareValues();
				draw();
			}
		};
	});