'use strict';

angular.module('algorithmsApp')
	.service('CholeskyDecomposition', function CholeskyDecomposition(LeibnizDeterminant, Utils) {

		return {

			calculate: function (A) {

				if (!this._isSymetric(A) || !this._isPositiveDefinite(A)) {
					return false;
				}

				var m = A.length,
					L = Utils.emptyMatrix(m),
					LT = Utils.emptyMatrix(m),
					x, rowIndex, addColumnIndex, columnIndex;

				for (rowIndex = 0; rowIndex < m; rowIndex++) {

					// calculate row elements up (excluding) to diagonal
					for (columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
						x = A[rowIndex][columnIndex];
						for (addColumnIndex = 0; addColumnIndex < rowIndex; addColumnIndex++) {
							x -= L[rowIndex][addColumnIndex] * L[columnIndex][addColumnIndex];
						}
						L[rowIndex][columnIndex] = x / L[columnIndex][columnIndex];
						LT[columnIndex][rowIndex] = L[rowIndex][columnIndex];
					}

					// calculate diagonal element
					x = A[rowIndex][rowIndex];
					for (addColumnIndex = 0; addColumnIndex < rowIndex; addColumnIndex++) {
						x -= L[rowIndex][addColumnIndex] * L[rowIndex][addColumnIndex];
					}
					L[rowIndex][rowIndex] = Math.sqrt(x);
					LT[columnIndex][rowIndex] = L[rowIndex][rowIndex];

				}

				return {
					L: L,
					LT: LT,
				};

			},

			_isSymetric: function (A) {

				for (var rowIndex = 0; rowIndex < A.length; rowIndex++) {
					for (var columnIndex = rowIndex; columnIndex < A.length; columnIndex++) {
						if (A[rowIndex][columnIndex] !== A[columnIndex][rowIndex]) {
							return false;
						}
					}
				}

				return true;
			},

			_isPositiveDefinite: function (A) {

				for (var step = 0; step < A.length; step++) {
					if (LeibnizDeterminant.calculate(this._getMinorMatrix(A, step)) <= 0) {
						return false;
					}
				}

				return true;
			},

			_getMinorMatrix: function (A, step) {

				var minor = A.clone(),
					amountToPop = A.length - step - 1;

				for (var i = 0; i < amountToPop; i++) {
					minor.pop();
					for (var j = 0; j < step; j++) {
						minor[j].pop();
					}
				}

				return minor;
			}

		};

	});