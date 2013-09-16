'use strict';

angular.module('algorithmsApp')
	.directive('pointDiagram', function () {
		return {
			template: '<canvas></canvas>',
			restrict: 'E',
			scope: true,
			link: function postLink(scope, element, attrs) {
				scope.values = scope.$parent[attrs.ngModel];

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

				function initWatch() {
					scope.$watch(attrs.ngModel, function () {
						draw();
					});
				}

				function draw (argument) {
					
				}

				initCanvas();
				initWatch();
			}
		};
	});