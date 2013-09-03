'use strict';

angular.module('algorithmsApp')
	.service('PrimeNumberGenerator', function PrimeNumberGenerator() {

		return {

			/**
			 * Return n prime numbers
			 * @param  int n
			 * @return array
			 */
			primorial: function (n) {

				if (n < 1) {
					return false;
				}

				var primorial = 1,
					primeNumber,
					primeNumbers = [];

				for (var i = 0; i < n; i++) {


					if (i === 0) {
						primeNumber = 2;
					} else if (i === 1) {
						primeNumber = 3;
					} else {
						primeNumber = primorial - 1;
					}

					primeNumbers.push(primeNumber);
					primorial *= primeNumber;

				}

				return primeNumbers;

			}

		};

	});