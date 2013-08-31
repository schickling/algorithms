'use strict';

angular.module('algorithmsApp')
	.controller('MatrixMultiplication', function ($scope, MatrixMultiplication) {

		$scope.S = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
		$scope.A = [[2, 4, 4], [-6, 6, 12], [10, -4, -16]];
		$scope.T = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

		$scope.calculate = function () {
			var B = MatrixMultiplication.calculate($scope.S, $scope.A, $scope.T);
			$scope.B = B;
		};

		$scope.calculate();

	});
