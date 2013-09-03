'use strict';

angular.module('algorithmsApp')
	.controller('primeNumberTest', function ($scope) {
		
		$scope.number = 23;

		$scope.calculate = function() {
			$scope.isPrime = $scope.number.isPrime();
		};

		$scope.calculate();
	});