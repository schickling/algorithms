'use strict';

angular.module('algorithmsApp')
	.service('FixedPointIteration', function FixedPointIteration() {

		return {

			calculate: function (functionString, numberOfIterations, startValue) {
				var values = [],
					previousValue;

				for (var i = 0; i < numberOfIterations; i++) {
					previousValue = values[i - 1] || startValue;
					values[i] = this._eval(functionString, previousValue);
				}

				return values;
			},

			_eval: function (functionString, x) {
				/*jshint evil:true */
				return window.math.eval(functionString, {
					x: x
				});
			}

		};

	});