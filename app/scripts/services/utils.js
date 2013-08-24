'use strict';

angular.module('algorithmsApp')
	.service('Utils', function Utils() {
		return {
			randomNumber: function (min, max) {
				return min + Math.floor(Math.random() * (max - min + 1));
			}
		};
	});