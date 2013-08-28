'use strict';

angular.module('algorithmsApp')
	.controller('gaussianElimination', function ($scope, GaussianElimination, Utils) {

		$scope.inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
		$scope.resultMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

		$scope.eliminate = function () {
			$scope.resultMatrix = GaussianElimination.eliminate($scope.inputMatrix);
		};

		$scope.addRow = function () {
			var row = [];
			for (var i = 0; i < $scope.inputMatrix[0].length; i++) {
				row.push(Utils.randomNumber(-10, 20));
			};
			$scope.inputMatrix.push(row);
			$scope.eliminate();
		};

		$scope.addColumn = function () {
			$scope.inputMatrix.forEach(function(row) {
				row.push(Utils.randomNumber(-10, 20));
			});
			$scope.eliminate();
		};

		$scope.deleteRow = function (index) {
			if ($scope.inputMatrix.length === 1) return;

			$scope.inputMatrix.splice(index, 1);
			$scope.eliminate();
		};

		$scope.deleteColumn = function (index) {
			if ($scope.inputMatrix[0].length === 1) return;

			$scope.inputMatrix.forEach(function (row) {
				row.splice(index, 1);
			});
			$scope.eliminate();
		};

		$scope.eliminate();

	});