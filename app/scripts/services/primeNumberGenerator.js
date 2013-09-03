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

				var primorial,
					primeNumbersBelowI,
					primeNumbers = [];

				for (var i = 0; i < n; i++) {

					if (i === 0) {
						primeNumbers.push(2);
					} else if (i === 1) {
						primeNumbers.push(3);
					} else {
						primorial = 1;
						primeNumbersBelowI = this.sieveOfEratosthenes(i + 1);

						primeNumbersBelowI.forEach(function (primeNumber) {
							primorial *= primeNumber;
						});
						console.log(i, primeNumbersBelowI, primorial);

						primeNumbers.push(primorial - 1);
					}

				}

				return primeNumbers;

			},

			/**
			 * Return prime numbers below or equal n
			 * @param  int n
			 * @return array
			 */
			sieveOfEratosthenes: function (n) {
				var arePrime = [],
					primeNumbers = [],
					i, factor;

				// fill sieve
				for (i = 1; i <= n; i++) {
					arePrime[i] = true;
				}

				arePrime[0] = false;
				arePrime[1] = false;

				// sieve!
				for (i = 2; i * i < n; i++) {
					for (factor = 2 * i; factor <= n; factor += i) {
						arePrime[factor] = false;
					}
				}

				arePrime.forEach(function (isPrime, primeNumber) {
					if (isPrime) {
						primeNumbers.push(primeNumber);
					}
				});

				return primeNumbers;
			}

		};

	});