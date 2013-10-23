'use strict';

angular.module('algorithmsApp')
	.service('LinearRegression', function LinearRegression(Utils, LUDecomposition) {

		return {

			calculate: function(coordinates) {

				var y = [],
					A = [],
					m, transposedA, normalA, t, point, i, max, normalY, result;

				for (i = 0, max = coordinates.length; i < max; i = i + 1) {
					point = coordinates[i];
					A.push([point.x, 1]);
					y.push([point.y]);
				}

				transposedA = Utils.matrixTranspose(A);
				normalA = Utils.matrixMultiply(transposedA, A);
				normalY = Utils.matrixMultiply(transposedA, y);
				normalY = normalY.map(function(e) {
					return e[0];
				});

				result = LUDecomposition.calculate(normalA, normalY, true);

				m = result.x[0];
				t = result.x[1];

				return {
					m: m,
					t: t
				};
			}

		};

	});