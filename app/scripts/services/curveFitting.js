'use strict';

angular.module('algorithmsApp')
	.service('CurveFitting', function CurveFitting() {

		return {

			calculate: function (coordinates) {

				var m = 1, t = 0;

				return {
					m: m,
					t: t
				};
			}

		};

	});