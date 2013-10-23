'use strict';

angular.module('algorithmsApp')
	.controller('DeterminantCtrl', function ($scope, LeibnizDeterminant, Utils, LUDecomposition) {

		$scope.algorithms = [
			{
				name: 'Leibniz',
				service: function () {
					return LeibnizDeterminant.calculate($scope.matrix);
				}
			},
			{
				name: 'LU Decomposition',
				service: function () {
					var result = LUDecomposition.calculate($scope.matrix),
						product = 1;

					for (var step = 0; step < result.U.length; step++) {
						product *= result.U[step][step];
					}

					return product;
				}
			}
		];

		$scope.selectedAlgorithm = $scope.algorithms[0];

		$scope.matrix = [[1, 3, -9], [11, -3, -5], [2, 8, -1]];

		$scope.calculate = function () {
			$scope.determinant = $scope.selectedAlgorithm.service();
		};

		$scope.makeBigger = function () {
			Utils.matrixExpand($scope.matrix);
			$scope.calculate();
		};

		$scope.makeSmaller = function () {
			Utils.matrixShrink($scope.matrix);
			$scope.calculate();
		};

		$scope.calculate();

	});