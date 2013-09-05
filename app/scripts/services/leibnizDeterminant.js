'use strict';

angular.module('algorithmsApp')
	.service('LeibnizDeterminant', function LeibnizDeterminant() {

		return {

			/**
			 * Calculates the determinat of a m*m matrix
			 * @param  array matrix
			 * @return int
			 */
			calculate: function (matrix) {

				var m = matrix.length;

				if (m === 1) {

					return matrix[0][0];

				} else {

					var sum = 0;

					for (var rowIndex = 0; rowIndex < m; rowIndex++) {
						sum += Math.pow(-1, rowIndex) * matrix[rowIndex][0] * this._getSubMatrix(matrix, rowIndex);
					}

					return sum;
				}
			},

			_getSubMatrix: function (matrix, rowIndexToDrop) {

				var subMatrix = matrix.clone();

				subMatrix.splice(rowIndexToDrop, 1);

				for (var rowIndex = 0; rowIndex < subMatrix.length; rowIndex++) {
					subMatrix[rowIndex].splice(0, 1);
				}

				return subMatrix;
			}

		}

	});