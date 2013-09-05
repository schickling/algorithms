'use strict';

angular.module('algorithmsApp')
	.directive('matrix', function () {
		return {
			templateUrl: 'scripts/directives/templates/matrix.html',
			restrict: 'E',
			scope: true,
			link: function postLink(scope, element, attrs) {
				window.el = element;
				scope.matrix = scope.$parent[attrs.ngModel];
				scope.showDelete = attrs.ngShowDelete || false;
			}
		};
	});