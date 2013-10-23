'use strict';

angular.module('algorithmsApp')
	.controller('primeNumberGenerator', function ($scope, PrimeNumberGenerator) {

		$scope.algorithms = [
			{
				name: 'Primorial calculation',
				method: PrimeNumberGenerator.primorial
			}
		];

		$scope.selectedAlgorithm = $scope.algorithms[0];

		$scope.amount = 10;

		$scope.calculate = function() {
			$scope.primeNumbers = $scope.selectedAlgorithm.method($scope.amount);
		};

		$scope.calculate();

	});