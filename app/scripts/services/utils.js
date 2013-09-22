'use strict';

angular.module('algorithmsApp')
	.service('Utils', function Utils() {
		return {

			randomNumber: function (min, max) {
				return min + Math.floor(Math.random() * (max - min + 1));
			},

			identityMatrix: function (n) {
				var matrix = [];

				for (var i = 0; i < n; i++) {
					matrix.push([]);
					for (var j = 0; j < n; j++) {
						matrix[i][j] = (i === j) ? 1 : 0;
					}
				}

				return matrix;
			},

			emptyMatrix: function (n, m) {
				var matrix = [];
				m = m || n;

				for (var i = 0; i < n; i++) {
					matrix.push([]);
					for (var j = 0; j < m; j++) {
						matrix[i][j] = 0;
					}
				}

				return matrix;
			},

			matrixMultiply: function (A, B) {
				var C = [],
					j, k, sum, i;

				for (j = 0; j < A.length; j++) {
					C[j] = [];
					for (k = 0; k < B[0].length; k++) {
						sum = 0;
						for (i = 0; i < B.length; i++) {
							sum += B[i][k] * A[j][i];
						}
						C[j].push(sum);
					}
				}

				return C;
			},

			matrixTranspose: function (A) {
				return Object.keys(A[0]).map(
					function (c) {
						return A.map(function (r) {
							return r[c];
						});
					}
				);
			},

			matrixShrink: function (matrix) {
				matrix.pop();
				matrix.forEach(function (row) {
					row.pop();
				});
			},

			matrixExpand: function (matrix, defaultValue) {
				var row = [],
					self = this;
				for (var i = 0; i < matrix[0].length; i++) {
					row.push(defaultValue || self.randomNumber(-10, 20));
				}
				matrix.push(row);
				matrix.forEach(function (row) {
					row.push(defaultValue || self.randomNumber(-10, 20));
				});
			},

			derivePolynomial: function (coeffitients) {
				coeffitients = coeffitients.clone();
				coeffitients.push(0);

				for (var i = 1; i < coeffitients.length; i++) {
					coeffitients[i - 1] = coeffitients[i] * i;
				}

				while (coeffitients[coeffitients.length - 1] === 0 && coeffitients.length > 1) {
					coeffitients.pop();
				}

				return coeffitients;
			}

		};
	});