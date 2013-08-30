'use strict';

angular.module('algorithmsApp')
	.service('SmithNormalForm', function SmithNormalForm(Utils, ExtendedEuclideanAlgorithm) {
		return {

			m: null,
			B: null,
			S: null,
			T: null,

			/**
			 * Calculate B for B = SAT
			 * @param  array A
			 * @return object
			 */
			calculate: function (A) {

				this.m = A.length;
				this.B = A.clone();
				this.S = Utils.identityMatrix(this.m);
				this.T = Utils.identityMatrix(this.m);

				this._orderMatrix();
				this._reduceMatrix();
				this._orderMatrix();
				this._makeDiagonalDivisible();

				return {
					B: this.B,
					S: this.S,
					T: this.T,
					elementaryDivisors: this._getElementaryDivisors()
				};
			},

			_orderMatrix: function () {

				var minimumValue, minimumRow, minimumColumn, compareValue, step, row, column, sideMatrix;

				for (step = 0; step < this.m; step++) {

					minimumValue = Number.POSITIVE_INFINITY;

					for (row = step; row < this.m; row++) {
						for (column = step; column < this.m; column++) {

							compareValue = Math.abs(this.B[row][column]) || Number.POSITIVE_INFINITY;

							if (compareValue < minimumValue) {
								minimumValue = compareValue;
								minimumRow = row;
								minimumColumn = column;
							}

						}
					}

					if ((step !== minimumRow || step !== minimumColumn) && isFinite(minimumValue)) {
						// swap rows
						sideMatrix = Utils.identityMatrix(this.m);
						sideMatrix[minimumRow][minimumRow] = 0;
						sideMatrix[step][step] = 0;
						sideMatrix[minimumRow][step] = 1;
						sideMatrix[step][minimumRow] = 1;
						this.S = Utils.matrixMultiply(sideMatrix, this.S);
						this.B = Utils.matrixMultiply(sideMatrix, this.B);

						// swap columns
						sideMatrix = Utils.identityMatrix(this.m);
						sideMatrix[minimumColumn][minimumColumn] = 0;
						sideMatrix[step][step] = 0;
						sideMatrix[minimumColumn][step] = 1;
						sideMatrix[step][minimumColumn] = 1;
						this.T = Utils.matrixMultiply(this.S, sideMatrix);
						this.B = Utils.matrixMultiply(this.B, sideMatrix);
					}
				}
			},

			_reduceMatrix: function () {
				for (var step = 0; step < this.m - 1; step++) {

					for (var pivotRow = step + 1; pivotRow < this.m; pivotRow++) {
						this._reduceElement(step, pivotRow, true);
					}

					for (var pivotColumn = step + 1; pivotColumn < this.m; pivotColumn++) {
						this._reduceElement(step, pivotColumn, false);
					}
				}
			},

			_reduceElement: function (step, pivot, isRowAction) {
				var currentEl = this.B[step][step],
					reduceEl = (isRowAction) ? this.B[pivot][step] : this.B[step][pivot];

				if (currentEl * reduceEl === 0) {
					return;
				}

				var eea = ExtendedEuclideanAlgorithm.calculate(currentEl, reduceEl),
					a = eea.x,
					b = eea.y,
					c = -(reduceEl / eea.gcd),
					d = currentEl / eea.gcd,
					newSideMatrix = Utils.identityMatrix(this.m);

				if (isRowAction) {
					newSideMatrix[step][step] = a;
					newSideMatrix[step][step + 1] = b;
					newSideMatrix[pivot][step] = c;
					newSideMatrix[pivot][step + 1] = d;
					this.S = Utils.matrixMultiply(newSideMatrix, this.S);
					this.B = Utils.matrixMultiply(newSideMatrix, this.B);
				} else {
					newSideMatrix[step][step] = d;
					newSideMatrix[step][pivot] = c;
					newSideMatrix[step + 1][step] = b;
					newSideMatrix[step + 1][pivot] = a;
					this.T = Utils.matrixMultiply(this.T, newSideMatrix);
					this.B = Utils.matrixMultiply(this.B, newSideMatrix);
				}
			},

			_makeDiagonalDivisible: function () {
				// TODO
			},

			_getElementaryDivisors: function () {
				var elementaryDivisors = [],
					elementaryDivisor;

				for (var i = 0; i < this.B.length; i++) {
					elementaryDivisor = Math.abs(this.B[i][i]);
					if (elementaryDivisor) {
						elementaryDivisors.push(elementaryDivisor);
					}
				}

				return elementaryDivisors;
			}

		};
	});