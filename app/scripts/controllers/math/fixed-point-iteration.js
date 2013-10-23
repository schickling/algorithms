'use strict';

angular.module('algorithmsApp')
	.controller('FixedPointIterationCtrl', function ($scope, FixedPointIteration) {

		$scope.functionString = 'sin(x)';
		$scope.startValue = 1;
		$scope.iterationSteps = 50;

		$scope.calculate = function( ) {
			$scope.values = FixedPointIteration.calculate($scope.functionString, $scope.iterationSteps, $scope.startValue);
		};

		$scope.calculate();

	});