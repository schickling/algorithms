'use strict';

angular.module('algorithmsApp')
	.service('CubicSplineInterpolation', function CubicSplineInterpolation(Utils) {

		return {

			coordinates: null,
			splines: null,

			calculate: function (coordinates) {

				this.coordinates = coordinates;
				this.splines = [];

				if (this.coordinates.length < 2) {
					return false;
				}

				this._sortCoordinatesByXValues();
				this._createFirstSpline();
				this._createRemainingSplines();

				return this.splines;
			},

			_sortCoordinatesByXValues: function () {
				this.coordinates = _.sortBy(this.coordinates, function (coordinate) {
					return coordinate.x;
				});
			},

			_createFirstSpline: function () {
				var spline = {};

				spline.a = this.coordinates[0].y;
				spline.b = 0;
				spline.c = 0;
				spline.d = this.coordinates[1].y - spline.a - spline.b - spline.c;
				spline.minX = this.coordinates[0].x;
				spline.maxX = this.coordinates[1].x;

				this.splines.push(spline);
			},

			_createRemainingSplines: function () {

				var i, spline, c, previousPascalSpline, previousSpline;

				for (i = 2; i < this.coordinates.length; i++) {
					previousSpline = this.splines[i - 2];
					c = previousSpline.maxX - previousSpline.minX;
					previousPascalSpline = [_.values(previousSpline)];
					previousPascalSpline = Utils.matrixMultiply(previousPascalSpline, this._getPascalMatrix(c));
					previousPascalSpline = {
						a: previousPascalSpline[0][0],
						b: previousPascalSpline[0][1],
						c: previousPascalSpline[0][2],
						d: previousPascalSpline[0][3],
					}

					spline = {
						a: previousPascalSpline.a,
						b: previousPascalSpline.b,
						c: previousPascalSpline.c,
						d: this.coordinates[i].y - previousPascalSpline.a - previousPascalSpline.b - previousPascalSpline.c,
						minX: this.coordinates[i - 1].x,
						maxX: this.coordinates[i].x,
					};

					this.splines.push(spline);

				}

			},

			_getPascalMatrix: function (c) {
				return [[1, 0, 0, 0], [c, 1, 0, 0], [c * c, 2 * c, 1, 0], [c * c * c, 3 * c * c, 3 * c, 1]];
			}

		};

	});