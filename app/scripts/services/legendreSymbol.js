'use strict';

angular.module('algorithmsApp')
	.service('LegendreSymbol', function LegendreSymbol() {

		return {

			calculate: function (a, p) {

				if (a >= p || a < 0) {
					return this.calculate(a % p, p);
				} else if (a === 0 || a === 1) {
					return a;
				} else if (a === 2) {
					if (p % 8 === 1 || p % 8 === 7) {
						return 1;
					} else {
						return -1;
					}
				} else if (a === p - 1) {
					if (p % 4 === 1) {
						return 1;
					} else {
						return -1;
					}
				} else if (!a.isPrime()) {

					var primeFactors = a.primeFactors(),
						self = this,
						product = 1;

					primeFactors.forEach(function(primeNumber) {
						product *= self.calculate(primeNumber, p);
					});

					return product;
				} else {
					if (((p - 1) / 2) % 2 === 0 || ((a - 1) / 2) % 2 === 0) {
						return this.calculate(p, a);
					} else {
						return (-1) * this.calculate(p, a);
					}
				}
			}

		};

	});