'use strict';

angular.module('algorithmsApp')
	.service('NewtonMethod', function NewtonMethod() {

		return {

			calculate: function (functionString, derivedFunctionString, startValue, numerOfIterations) {
				var values = [];

				for (var i = 0; i < numerOfIterations; i++) {
					values[i] = this._nextValue(values[i - 1]  || startValue, functionString, derivedFunctionString);
				}

				return values;
			},

			_eval: function (functionString, x) {
				/* jshint evil:true */
				return window.math.eval(functionString, {
					x: x
				});
			},

			_nextValue: function (currentValue, functionString, derivedFunctionString) {
				return currentValue - this._eval(functionString, currentValue) / this._eval(derivedFunctionString, currentValue);
			}

		};

	});