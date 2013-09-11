'use strict';

angular.module('algorithmsApp')
	.service('CholeskyDecomposition', function CholeskyDecomposition(LeibnizDeterminant) {

		return {

			calculate: function (A) {

				if (!this._isSymetric(A) || !this._isPositiveDefinite(A)) {
					return false;
				}

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
					for (var j = 0; j < amountToPop; j++) {
						minor[j].pop();
					}
					minor.pop();
				}

				return minor;
			}

		};

	});