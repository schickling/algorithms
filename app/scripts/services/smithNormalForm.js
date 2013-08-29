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
						this._prepareSideMatrix(step, pivotRow, true);
						this._adjustMainMatrix(step, pivotRow, true);
						this._prepareSideMatrix(step, pivotRow, false);
						this._adjustMainMatrix(step, pivotRow, false);
					}
				}

				return {
					elementaryDivisors: this._getElementaryDivisors()
				};
			},

			_prepareSideMatrix: function (step, pivotRow, isRowAction) {
				var l = this.B[step][step],
					j = (isRowAction) ? this.B[pivotRow][step] : this.B[step][pivotRow],
					eea = ExtendedEuclideanAlgorithm.calculate(l, j),
					a = eea.x,
					b = eea.y,
					c = -(j / eea.gcd),
					d = l / eea.gcd;

				if (isRowAction) {
					this.S[step][step] = a;
					this.S[step][step + 1] = b;
					this.S[pivotRow][step] = c;
					this.S[pivotRow][step + 1] = d;
				} else {
					this.T[step][step] = d;
					this.T[step][step + 1] = c;
					this.T[pivotRow][step] = b;
					this.T[pivotRow][step + 1] = a;
				}

			},

			_adjustMainMatrix: function (step, pivotRow, isRowAction) {
				var sideMatrix = (isRowAction) ? this.S : this.T,
					partA = [[this.B[step][step], this.B[step][step + 1]], [this.B[pivotRow][step], this.B[pivotRow][step + 1]]],
					partSide = [[sideMatrix[step][step], sideMatrix[step][step + 1]], [sideMatrix[pivotRow][step], sideMatrix[pivotRow][step + 1]]],
					newPartA;

				if (isRowAction) {
					newPartA = Utils.matrixMultiply(partSide, partA);
				} else {
					newPartA = Utils.matrixMultiply(partA, partSide);
				}

				this.B[step][step] = newPartA[step][step];
				this.B[step][step + 1] = newPartA[step][step + 1];
				this.B[pivotRow][step] = newPartA[pivotRow][step];
				this.B[pivotRow][step + 1] = newPartA[pivotRow][step + 1];
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