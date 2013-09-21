'use strict';

angular.module('algorithmsApp')
	.controller('NewtonMethodCtrl', function ($scope, NewtonMethod) {

		$scope.functionString = 'x^2';
		$scope.derivedFunctionString = '2*x';
		$scope.startValue = 1;
		$scope.iterationSteps = 5;

		$scope.coordinate = function (coordinate) {

			$scope.calculate = function () {
				var scope = {},
					node = window.math.parse($scope.functionString, scope),
					values = NewtonMethod.calculate($scope.functionString, $scope.derivedFunctionString, $scope.startValue, $scope.iterationSteps),
					m, t, y1, x1, x2;

				values.unshift($scope.startValue);

				for (var i = 1; i < values.length; i++) {
					x1 = scope.x = values[i - 1];
					x2 = values[i];
					y1 = node.eval();
					m = - y1 / (x2 - x1);
					t = -y1 - m * x1;
					coordinate.addFunction(m + '*x + ' + t);
				}
			};

			$scope.calculate();
		};



	});