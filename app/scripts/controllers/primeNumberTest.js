'use strict';

angular.module('algorithmsApp')
	.controller('PrimeNumberTest', function ($scope) {
		
		$scope.number = 23;

		$scope.calculate = function() {
			$scope.isPrime = $scope.number.isPrime();
		};

		$scope.calculate();
	});