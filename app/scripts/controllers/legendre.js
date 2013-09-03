'use strict';

angular.module('algorithmsApp')
	.controller('legendre', function ($scope, LegendreSymbol) {

		$scope.a = 150;
		$scope.p = 1009;

		$scope.calculate = function () {
			$scope.result = LegendreSymbol.calculate($scope.a, $scope.p);
		};

		$scope.calculate();

	});