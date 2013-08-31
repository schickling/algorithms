'use strict';

angular.module('algorithmsApp')
	.controller('MatrixMultiplication', function ($scope, MatrixMultiplication, Utils) {

		$scope.inputMatrices = [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[2, 4, 4], [-6, 6, 12], [10, -4, -16]], [[1, 0, 0], [0, 1, 0], [0, 0, 1]]];

		$scope.calculate = function () {
			$scope.outputMatrix = MatrixMultiplication.calculate($scope.inputMatrices);
		};

		$scope.addMatrix = function () {
			$scope.inputMatrices.push(Utils.identityMatrix(3));
			$scope.calculate();
		};

		$scope.deleteMatrix = function (index) {
			$scope.inputMatrices.splice(index, 1);
			$scope.calculate();
		};

		$scope.calculate();

	});