'use strict';

angular.module('algorithmsApp')
	.service('GaussianElimination', function GaussianElimination(Utils) {

		return {

			/**
			 * Eliminate a m*n matrix
			 * @param  array inputMatrix
			 * @return array
			 */
			eliminate: function (inputMatrix) {

				var outputMatrix = inputMatrix.clone(),
					i, k, j, firstEl, factor, pivotRow,
					m = outputMatrix.length,
					n = (m) ? outputMatrix[0].length : 0;

				for (i = 0; i < m; i++) {

					pivotRow = this._findPivotRowForColumn(outputMatrix, i);
					this._swapRows(outputMatrix, pivotRow, i);

					firstEl = outputMatrix[i][i];

					// normalize current row
					for (j = i; j < n && firstEl; j++) {
						outputMatrix[i][j] /= firstEl;
						this._roundElement(outputMatrix, i, j);
					}

					// kill other rows
					for (k = 0; k < m; k++) {
						if (k !== i) {
							factor = outputMatrix[k][i];
							for (j = i; j < n && factor; j++) {
								outputMatrix[k][j] -= factor * outputMatrix[i][j];
								this._roundElement(outputMatrix, k, j);
							}
						}
					}
				}

				return outputMatrix;
			},

			/**
			 * Invert a m*m matrix
			 * @param  array inputMatrix
			 * @return array
			 */
			invert: function (inputMatrix) {
				var leftMatrix = inputMatrix.clone(),
					i, k, j, firstEl, factor, pivotRow,
					m = leftMatrix.length,
					rightMatrix = Utils.identityMatrix(m);

				// check if qudratic
				if (leftMatrix.length !== leftMatrix[0].length) {
					return false;
				}

				for (i = 0; i < m; i++) {

					pivotRow = this._findPivotRowForColumn(leftMatrix, i);
					this._swapRows(leftMatrix, pivotRow, i);
					this._swapRows(rightMatrix, pivotRow, i);

					firstEl = leftMatrix[i][i];

					// normalize current row
					for (j = 0; j < m && firstEl; j++) {
						leftMatrix[i][j] /= firstEl;
						this._roundElement(leftMatrix, i, j);
						rightMatrix[i][j] /= firstEl;
						this._roundElement(rightMatrix, i, j);
					}

					// kill other rows
					for (k = 0; k < m; k++) {
						if (k !== i) {
							factor = leftMatrix[k][i];
							for (j = 0; j < m && factor; j++) {
								leftMatrix[k][j] -= factor * leftMatrix[i][j];
								this._roundElement(leftMatrix, k, j);
								rightMatrix[k][j] -= factor * rightMatrix[i][j];
								this._roundElement(rightMatrix, k, j);
							}
						}
					}
				}

				// check if matrix was regular
				if (leftMatrix[m - 1][m - 1] !== 1) {
					return false;
				}

				return rightMatrix;

			},

			_swapRows: function (matrix, i, j) {
				var tmp = matrix[j];
				matrix[j] = matrix[i];
				matrix[i] = tmp;
			},

			_findPivotRowForColumn: function (matrix, i) {
				var val = 0,
					key = i;

				for (var k = i; k < matrix.length; k++) {
					if (val < Math.abs(matrix[k][i])) {
						val = Math.abs(matrix[k][i]);
						key = k;
					}
				}

				return key;
			},

			_roundElement: function (matrix, i, j) {
				matrix[i][j] = +matrix[i][j].toPrecision(10);
			}

		};
	});