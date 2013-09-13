'use strict';

angular.module('algorithmsApp')
	.service('CubicSplineInterpolation', function CubicSplineInterpolation(Utils) {

		return {

			coordinates: null,
			splines: null,
			pascalMatrix: [[1, 0, 0, 0], [1, 1, 0, 0], [1, 2, 1, 0], [1, 3, 3, 1]],

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

				this.splines.push(spline);
			},

			_createRemainingSplines: function () {

				var i, spline, previousPascalSpline;

				for (i = 2; i < this.coordinates.length; i++) {
					previousPascalSpline = [_.values(this.splines[i - 2])];
					previousPascalSpline = Utils.matrixMultiply(previousPascalSpline, this.pascalMatrix);
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
					};

					this.splines.push(spline);

				}

			}

		};

	});