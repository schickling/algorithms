'use strict';

angular.module('algorithmsApp')
	.controller('InterpolationCtrl', function ($scope, VandermondeInterpolation, CubicSplineInterpolation, Coordinate) {

		$scope.coordinates = [];
		$scope.x = 1;
		$scope.y = 1;

		$scope.addCoordinate = function (coordinate) {

			coordinate = new Coordinate(coordinate.x, coordinate.y);

			// avoid duplicate x values 
			for (var i = 0; i < $scope.coordinates.length; i++) {
				if ($scope.coordinates[i].x === coordinate.x) {
					return;
				}
			}

			$scope.coordinates.push(coordinate);
			$scope.calculate();
		};

		$scope.calculate = function () {

			$scope.polynomial = {
				color: '#FF0000',
				coefficients: VandermondeInterpolation.calculate($scope.coordinates),
			};

			$scope.spline = {
				color: '#428bca',
				splines: CubicSplineInterpolation.calculate($scope.coordinates),
			};

		};

		$scope.reset = function () {
			$scope.coordinates = [];
			$scope.calculate();
		};

		$scope.calculate();

	});