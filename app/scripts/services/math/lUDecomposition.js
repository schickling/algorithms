'use strict';

angular.module('algorithmsApp')
	.service('LUDecomposition', function LUDecomposition(Utils) {

		return {

			calculate: function (A, b, usePivoting) {

				var m = A.length,
					L = Utils.emptyMatrix(m),
					U = A.clone(),
					P = Utils.identityMatrix(m),
					x = [],
					y = [],
					currentRow, pivotRow, rowToKill, column, factor, maximumValue, maximumRow, pivotValue, partialP, sum;

				// factorize A = L * U
				for (currentRow = 0; currentRow < m; currentRow++) {

					if (usePivoting) {

						// determinte row with maximum pivot element
						for (maximumValue = 0, maximumRow = currentRow, pivotRow = currentRow; pivotRow < m; pivotRow++) {

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
						L = Utils.matrixMultiply(partialP, L);

					}

					L[currentRow][currentRow] = 1;

					for (rowToKill = currentRow + 1; rowToKill < m; rowToKill++) {

						factor = U[rowToKill][currentRow] / U[currentRow][currentRow];
						L[rowToKill][currentRow] = factor;

						for (column = currentRow; column < m; column++) {
							U[rowToKill][column] -= U[currentRow][column] * factor;
						}
					}
				}

				if (b) {
					// adjust b
					if (usePivoting) {
						b = b.map(function (element) {
							return [element];
						});
						b = Utils.matrixMultiply(P, b);
						b = b.map(function (element) {
							return element[0];
						});
					}

					// forward substitute L * y = b
					for (currentRow = 0; currentRow < m; currentRow++) {

						for (sum = 0, column = 0; column < currentRow; column++) {
							sum += L[currentRow][column] * y[column];
						}

						y[currentRow] = b[currentRow] - sum;
					}

					// backward substitute U * x = y
					for (currentRow = m - 1; currentRow >= 0; currentRow--) {

						for (sum = 0, column = currentRow + 1; column < m; column++) {
							sum += U[currentRow][column] * x[column];
						}

						x[currentRow] = (y[currentRow] - sum) / U[currentRow][currentRow];
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