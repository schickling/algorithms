'use strict';

angular.module('algorithmsApp')
	.service('MatrixMultiplication', function MatrixMultiplication(Utils) {

		return {

			calculate: function (inputMatrices) {

				var outputMatrix = inputMatrices[0];

				for (var i = 1; i < inputMatrices.length; i++) {
					outputMatrix = Utils.matrixMultiply(outputMatrix, inputMatrices[i]);
				}

				return outputMatrix;
			}

		};

	});