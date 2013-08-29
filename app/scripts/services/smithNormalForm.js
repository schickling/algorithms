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

				for (var step = 0; step < this.m - 1; step++) {

					for (var pivotRow = step + 1; pivotRow < this.m; pivotRow++) {
						this._doStep(step, pivotRow, true);
					}

					for (var pivotColumn = step + 1; pivotColumn < this.m; pivotColumn++) {
						this._doStep(step, pivotColumn, false);
					}
				}

				return {
					B: this.B,
					S: this.S,
					T: this.T,
					elementaryDivisors: this._getElementaryDivisors()
				};
			},

			_doStep: function (step, pivotRow, isRowAction) {
				var l = this.B[step][step],
					j = (isRowAction) ? this.B[pivotRow][step] : this.B[step][pivotRow],
					eea = ExtendedEuclideanAlgorithm.calculate(l, j),
					a = eea.x,
					b = eea.y,
					c = -(j / eea.gcd),
					d = l / eea.gcd,
					newSideMatrix = Utils.identityMatrix(this.m);

				if (isRowAction) {
					newSideMatrix[step][step] = a;
					newSideMatrix[step][step + 1] = b;
					newSideMatrix[pivotRow][step] = c;
					newSideMatrix[pivotRow][step + 1] = d;
					this.S = Utils.matrixMultiply(newSideMatrix, this.S);
					this.B = Utils.matrixMultiply(newSideMatrix, this.B);
				} else {
					newSideMatrix[step][step] = d;
					newSideMatrix[step][pivotRow] = c;
					newSideMatrix[step + 1][step] = b;
					newSideMatrix[step + 1][pivotRow] = a;
					this.T = Utils.matrixMultiply(this.T, newSideMatrix);
					this.B = Utils.matrixMultiply(this.B, newSideMatrix);
				}
			},

			_getElementaryDivisors: function () {
				var elementaryDivisors = [];
				for (var i = 0; i < this.B.length; i++) {
					elementaryDivisors.push(Math.abs(this.B[i][i]));
				}
				return elementaryDivisors;
			}

		};
	});