'use strict';

angular.module('algorithmsApp')
	.controller('SmithNormalForm', function ($scope, SmithNormalForm, Utils) {

		$scope.A = [[-5, 5, -50], [-10, 5, 45], [10, -5, -30]];

		$scope.calculate = function () {
			var result = SmithNormalForm.calculate($scope.A);
			$scope.B = result.B;
			$scope.S = result.S;
			$scope.T = result.T;
			$scope.elementaryDivisors = result.elementaryDivisors;
		};

		$scope.makeBigger = function () {
			var row = [];
			for (var i = 0; i < $scope.A[0].length; i++) {
				row.push(Utils.randomNumber(-10, 20));
			}
			$scope.A.push(row);
			$scope.A.forEach(function (row) {
				row.push(Utils.randomNumber(-10, 20));
			});
			$scope.calculate();
		};

		$scope.makeSmaller = function () {
			$scope.A.pop();
			$scope.A.forEach(function (row) {
				row.pop();
			});
			$scope.calculate();
		};

		$scope.calculate();

	});