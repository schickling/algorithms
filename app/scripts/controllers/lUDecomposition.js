'use strict';

angular.module('algorithmsApp')
	.controller('lUDecomposition', function ($scope, LUDecomposition) {

		$scope.usePivoting = false;
		$scope.A = [[1, 2, 1], [2, 2, 3], [3, 5, 4]];
		$scope.b = [[4], [2], [5]];

		$scope.calculate = function () {
			var b = $scope.b.map(function (element) {
				return element[0];
			}),
				result = LUDecomposition.calculate($scope.A, b, $scope.usePivoting);

			$scope.L = result.L;
			$scope.U = result.U;
			$scope.P = result.P;
			$scope.x = result.x;
			$scope.y = result.y;
		};

		$scope.calculate();

	});