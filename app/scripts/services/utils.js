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
			}
		};
	});