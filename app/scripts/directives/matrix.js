'use strict';

angular.module('algorithmsApp')
	.directive('matrix', function () {
		return {
			templateUrl: 'views/directives/matrix.html',
			restrict: 'E',
			scope: true,
			link: function postLink(scope, element, attrs) {
				scope.matrix = scope.$parent[attrs.ngModel];
				scope.showDelete = attrs.ngShowDelete || false;
				scope.changeCallback = attrs.ngChangeCallback;
			}
		};
	});