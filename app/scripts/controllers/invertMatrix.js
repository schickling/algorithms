'use strict';

angular.module('algorithmsApp')
	.controller('invertMatrix', function ($scope, GaussianElimination, Utils) {

		$scope.inputMatrix = [[0, -1, 0], [0, 0, -1], [4, 0, 2]];

		$scope.invert = function () {
			$scope.outputMatrix = GaussianElimination.invert($scope.inputMatrix);
		};

		$scope.makeBigger = function () {
			Utils.matrixExpand($scope.inputMatrix);
			$scope.invert();
		};

		$scope.makeSmaller = function () {
			Utils.matrixShrink($scope.inputMatrix);
			$scope.invert();
		};

		$scope.invert();

	});