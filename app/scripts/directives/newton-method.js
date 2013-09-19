'use strict';

angular.module('algorithmsApp')
	.directive('newtonMethod', function () {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				element.text('this is the newtonMethod directive');
			}
		};
	});