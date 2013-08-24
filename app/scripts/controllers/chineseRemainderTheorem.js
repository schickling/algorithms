'use strict';

angular.module('algorithmsApp')
	.controller('chineseRemainderTheorem', function ($scope, ChineseRemainderTheorem) {

		$scope.x = 'x';

		$scope.rows = [{
			m: 3,
			a: 2
		}, {
			m: 4,
			a: 3
		}, {
			m: 5,
			a: 2
		}];

		$scope.addRow = function () {
			$scope.rows.push({
				m: 1,
				a: 1
			});
		};

		$scope.dropRow = function (i) {
			$scope.rows.splice(i, 1);
			$scope.calculate();
		};

		$scope.calculate = function () {
			var aVector = [],
				mVector = [];

			$scope.rows.forEach(function (row) {
				aVector.push(row.a);
				mVector.push(row.m);
			});

			$scope.x = ChineseRemainderTheorem.calculate(aVector, mVector);
		};

		$scope.calculate();

	});