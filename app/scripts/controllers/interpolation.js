'use strict';

angular.module('algorithmsApp')
	.controller('InterpolationCtrl', function ($scope, VandermondeInterpolation) {

		$scope.coordinates = [];

		$scope.addCoordinate = function (coordinate) {

			// avoid duplicate x values 
			for (var i = 0; i < $scope.coordinates.length; i++) {
				if ($scope.coordinates[i].x === coordinate.x) {
					return;
				}
			}

			$scope.coordinates.push(coordinate);
			$scope.calculate();
			$scope.$digest();
		};

		$scope.calculate = function () {
			$scope.polynomials = [{
				color: '#FF0000',
				coefficients: VandermondeInterpolation.calculate($scope.coordinates),
			}];
		};

		$scope.calculate();

	});