'use strict';

angular.module('algorithmsApp')
	.service('CubicSplineInterpolation', function CubicSplineInterpolation(Utils, GaussianElimination) {

		return {

			coordinates: null,
			splines: null,
			matrix: null,

			calculate: function (coordinates) {

				this.coordinates = coordinates;
				this.splines = [];

				if (this.coordinates.length < 2) {
					return false;
				}

				this._sortCoordinatesByXValues();
				this._createSplines();

				return this.splines;
			},

			_sortCoordinatesByXValues: function () {
				this.coordinates = _.sortBy(this.coordinates, function (coordinate) {
					return coordinate.x;
				});
			},


			/*
			 * Uses this algorithm https://en.wikipedia.org/w/index.php?title=Spline_%28mathematics%29&oldid=288288033#Algorithm_for_computing_natural_cubic_splines
			 */
			_createSplines: function () {

				var n = this.coordinates.length - 1,
					a = [],
					b = [],
					d = [],
					h = [],
					alpha = [],
					c = [],
					l = [],
					µ = [],
					z = [],
					i;

				for (i = 0; i < n + 1; i++) {
					a[i] = this.coordinates[i].y;
				}

				for (i = 0; i < n; i++) {
					h[i] = this.coordinates[i + 1].x - this.coordinates[i].x;
				}

				for (i = 1; i < n; i++) {
					alpha[i] = (3 / h[i]) * (a[i + 1] - a[i]) - (3 / h[i - 1]) * (a[i] - a[i - 1]);
				}

				l[0] = 1;
				µ[0] = 0;
				z[0] = 0;

				for (i = 1; i < n; i++) {
					l[i] = 2 * (this.coordinates[i + 1].x - this.coordinates[i - 1].x) - h[i - 1] * µ[i - 1];
					µ[i] = h[i] / l[i];
					z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
				}

				l[n] = 1;
				z[n] = 0;
				c[n] = 0;

				for (i = n - 1; i >= 0; i--) {
					c[i] = z[i] - µ[i] * c[i + 1];
					b[i] = (a[i + 1] - a[i]) / h[i] - (h[i] * (c[i + 1] + 2 * c[i])) / 3;
					d[i] = (c[i + 1] - c[i]) / (3 * h[i]);
				}

				for (i = 0; i < n; i++) {
					this.splines[i] = {
						a: a[i],
						b: b[i],
						c: c[i],
						d: d[i],
						minX: this.coordinates[i].x,
						maxX: this.coordinates[i + 1].x
					}
				};

			}

		};

	});