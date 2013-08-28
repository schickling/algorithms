'use strict';

angular.module('algorithmsApp')
	.service('GaussianElimination', function GaussianElimination() {

		Array.prototype.clone = function () {
			var arr = this.slice(0);
			for (var i = 0; i < this.length; i++) {
				if (this[i].clone) {
					//recursion
					arr[i] = this[i].clone();
				}
			}
			return arr;
		}

		return {

			matrix: null,

			/**
			 * Eliminate a m*n matrix
			 * @param  array matrix
			 * @return array
			 */
			eliminate: function (matrix) {

				this.matrix = matrix.clone();

				var i, k, j, firstEl, factor, pivotRow,
					m = this.matrix.length,
					n = this.matrix[0].length;

				for (i = 0; i < m; i++) {


					pivotRow = this._findPivotRowForColumn(i);
					this._swapRows(pivotRow, i);

					firstEl = this.matrix[i][i];

					// normalize current row
					for (j = i; j < n && firstEl; j++) {
						this.matrix[i][j] /= firstEl;
                        this.matrix[i][j] = +this.matrix[i][j].toPrecision(10);
					}

					// kill other rows
					for (k = 0; k < m; k++) {
						if (k !== i) {
							factor = this.matrix[k][i];
							for (j = i; j < n; j++) {
								this.matrix[k][j] -= factor * this.matrix[i][j];
                                this.matrix[k][j] = +this.matrix[k][j].toPrecision(10);
							}
						}
					}
				}

				return this.matrix;
			},

			_swapRows: function (i, j) {
				var tmp = this.matrix[j];
				this.matrix[j] = this.matrix[i];
				this.matrix[i] = tmp;
			},

			_findPivotRowForColumn: function (i) {
				var val = 0,
					key = i;

				for (var k = i; k < this.matrix.length; k++) {
					if (val < this.matrix[k][i]) {
						val = this.matrix[k][i];
						key = k;
					}
				}

				return key;
			}

		};
	});