'use strict';

angular.module('algorithmsApp')
	.service('Helpers', function Helpers() {
		return {
			load: function () {
				Array.prototype.clone = function () {
					var arr = this.slice(0);
					for (var i = 0; i < this.length; i++) {
						if (this[i].clone) {
							//recursion
							arr[i] = this[i].clone();
						}
					}
					return arr;
				};

				Number.prototype.sign = function () {
					var x = this.valueOf();
					return x ? x < 0 ? -1 : 1 : 0;
				};
			}
		};
	});