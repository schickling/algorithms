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
					currentRow, pivotRow, rowToKill, column, factor, maximumValue, maximumRow, pivotValue, partialP;

				if (usePivoting) {

				}

				for (currentRow = 0; currentRow < m; currentRow++) {

					if (usePivoting) {

						// determinte row with maximum pivot element
						maximumValue = 0;
						maximumRow = currentRow;
						for (pivotRow = currentRow; pivotRow < m; pivotRow++) {

							pivotValue = Math.abs(U[pivotRow][currentRow]);

							if (pivotValue > maximumValue) {
								maximumValue = pivotValue;
								maximumRow = pivotRow;
							}
						}

						// swap rows
						partialP = Utils.identityMatrix(m);
						partialP[currentRow][currentRow] = 0;
						partialP[maximumRow][maximumRow] = 0;
						partialP[maximumRow][currentRow] = 1;
						partialP[currentRow][maximumRow] = 1;

						P = Utils.matrixMultiply(partialP, P);
						U = Utils.matrixMultiply(partialP, U);

					}

					for (rowToKill = currentRow + 1; rowToKill < m; rowToKill++) {

						factor = U[rowToKill][currentRow] / U[currentRow][currentRow];
						L[rowToKill][currentRow] = -factor;

						for (column = currentRow; column < m; column++) {
							U[rowToKill][column] -= U[currentRow][column] * factor;
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