'use strict';

angular.module('algorithmsApp')
	.controller('CholeskyDecompositionCtrl', function ($scope, CholeskyDecomposition, Utils) {

		$scope.A = [[4, 2, 2], [2, 17, 5], [2, 5, 11]];

		$scope.calculate = function () {
			var result = CholeskyDecomposition.calculate($scope.A);

			$scope.L = result.L || false;
			$scope.LT = result.LT || false;
		};

		$scope.makeBigger = function () {
			Utils.matrixExpand($scope.A);
			$scope.calculate();
		};

		$scope.makeSmaller = function () {
			Utils.matrixShrink($scope.A);
			$scope.calculate();
		};

		$scope.calculate();

	});