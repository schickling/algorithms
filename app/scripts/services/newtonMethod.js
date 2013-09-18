'use strict';

angular.module('algorithmsApp')
	.service('NewtonMethod', function NewtonMethod() {

		return {

			calculate: function (functionString, derivedFunctionString, startValue, numerOfIterations) {
				var values = [1, 0, 0];

				return values;
			}

		};

	});