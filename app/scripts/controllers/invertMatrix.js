'use strict';

angular.module('algorithmsApp')
	.controller('invertMatrix', function ($scope, GaussianElimination, Utils) {

		$scope.inputMatrix = [[0, -1, 0], [0, 0, -1], [4, 0, 2]];

		$scope.invert = function () {
			$scope.outputMatrix = GaussianElimination.invert($scope.inputMatrix);
		};

		$scope.makeBigger = function () {
			var row = [];
			for (var i = 0; i < $scope.inputMatrix[0].length; i++) {
				row.push(Utils.randomNumber(-10, 20));
			}
			$scope.inputMatrix.push(row);
			$scope.inputMatrix.forEach(function (row) {
				row.push(Utils.randomNumber(-10, 20));
			});
			$scope.invert();
		};

		$scope.makeSmaller = function () {
			$scope.inputMatrix.pop();
			$scope.inputMatrix.forEach(function (row) {
				row.pop();
			});
			$scope.invert();
		};

		$scope.invert();

	});