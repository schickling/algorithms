'use strict';

angular.module('algorithmsApp')
	.controller('smithNormalForm', function ($scope, SmithNormalForm, Utils) {

		$scope.A = [[-5, 5, -50], [-10, 5, 45], [10, -5, -30]];

		$scope.calculate = function () {
			var result = SmithNormalForm.calculate($scope.A);
			$scope.B = result.B;
			$scope.S = result.S;
			$scope.T = result.T;
			$scope.elementaryDivisors = result.elementaryDivisors;
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