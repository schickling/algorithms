'use strict';

angular.module('algorithmsApp')
	.service('Bezier', function Bezier() {

		return {

			calculate: function (coordinates, t) {

				var n = coordinates.length - 1,
					coordinate = {
						x: 0,
						y: 0
					},
					factor;

				for (var i = 0; i <= n; i++) {
					factor = this._binomialCoefficient(n, i) * Math.pow(1 - t, n - i) * Math.pow(t, i);
					coordinate.x += factor * coordinates[i].x;
					coordinate.y += factor * coordinates[i].y;
				}

				return coordinate;
			},

			_binomialCoefficient: function (n, k) {
				return this._factorial(n) / (this._factorial(n - k) * this._factorial(k));
			},

			_factorial: function (n) {
				return n === 0 ? 1 : n * this._factorial(n - 1);
			}

		};

	});