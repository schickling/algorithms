'use strict';

angular.module('algorithmsApp')
	.service('CholeskyDecomposition', function CholeskyDecomposition() {

		return {

			calculate: function (A) {
				
				if (!this._isSymetric(A) || !this._isPositiveDefinite(A)) {
					return false;
				}


			},

			_isSymetric: function (A) {

			},

			_isPositiveDefinite: function (A) {

			}

		};

	});