'use strict';

angular.module('coordinateApp', ['angular-coordinate'])
	.controller('DemoCtrl', function ($scope) {

		$scope.coordinate = function (coordinate) {
			coordinate.addPoint(1, 1);
			coordinate.addFunction('x^3');
		};

	});