'use strict';

angular.module('algorithmsApp')
	.service('MatrixMultiplication', function MatrixMultiplication(Utils) {
		return {
			/**
			 * Calculate B for B = SAT
			 * @param  array A
			 * @return object
			 */
			calculate: function (S, A, T) {
				this.B = Utils.matrixMultiply(S, A);
				this.B = Utils.matrixMultiply(this.B, T);
				return this.B;
			},
		};
	});
