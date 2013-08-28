'use strict';

angular.module('algorithmsApp')
	.service('GaussianElimination', function GaussianElimination() {
		return {

			matrix: null,

			/**
			 * Eliminate a m*n matrix
			 * @param  array matrix
			 * @return array
			 */
			eliminate: function (matrix) {

				this.matrix = matrix;

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
					}

					// kill other rows
					for (k = 0; k < m; k++) {
						if (k !== i) {
							factor = this.matrix[k][i];
							for (j = i; j < n; j++) {
								this.matrix[k][j] -= factor * this.matrix[i][j];
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