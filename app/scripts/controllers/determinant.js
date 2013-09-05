'use strict';

angular.module('algorithmsApp')
	.controller('DeterminantCtrl', function ($scope, LeibnizDeterminant) {

		$scope.matrix = [[1, 3, -9], [11, -3, -5], [2, 8, -1]];

		$scope.calculate = function() {
			$scope.determinant = LeibnizDeterminant.calculate($scope.matrix);
		};

		$scope.calculate();

	});