'use strict';

angular.module('algorithmsApp')
	.service('SmithNormalForm', function SmithNormalForm() {
		return {
			calculate: function () {
				return {
					elementaryDivisors: [2, 6, 12]
				};
			}
		};
	});