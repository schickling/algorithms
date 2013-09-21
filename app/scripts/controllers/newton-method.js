'use strict';

angular.module('algorithmsApp')
	.controller('NewtonMethodCtrl', function ($scope, NewtonMethod) {

		$scope.functionString = 'x^2';
		$scope.derivedFunctionString = '2*x';
		$scope.startValue = 1;
		$scope.iterationSteps = 50;

		$scope.calculate = function () {
			$scope.values = NewtonMethod.calculate($scope.functionString, $scope.derivedFunctionString, $scope.startValue, $scope.iterationSteps);
		};

		$scope.calculate();

	});