'use strict';

angular.module('algorithmsApp')
	.service('LUDecomposition', function LUDecomposition(Utils) {

		return {

			calculate: function (A, b, usePivoting) {

				var m = A.length,
					L = Utils.identityMatrix(m),
					U = A.clone(),
					P = Utils.identityMatrix(m),
					x = [1],
					y = [1],
					currentRow, pivotRow, column, factor;

				if (usePivoting) {

				}

				for (currentRow = 0; currentRow < m; currentRow++) {
					for (pivotRow = currentRow + 1; pivotRow < m; pivotRow++) {

						factor = U[pivotRow][currentRow] / U[currentRow][currentRow];
						L[pivotRow][currentRow] = -factor;

						for (column = currentRow; column < m; column++) {
							U[pivotRow][column] -= U[currentRow][column] * factor;
						}
					}
				}

				return {
					L: L,
					U: U,
					P: P,
					x: x,
					y: y,
				};
			}

		};

	});