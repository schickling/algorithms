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

				Number.prototype.isPrime = function () {
					var x = this.valueOf();

					if (x < 3 || x % 2 === 0) {
						return x === 2;
					}

					for (var i = 3; x > i * i; i += 2) {
						if (x % i === 0) {
							return false;
						}
					}

					return true;
				};
			}
		};
	});