'use strict';

angular.module('algorithmsApp')
	.service('CubicSplineInterpolation', function CubicSplineInterpolation() {

		return {

			coordinates: null,
			splines: null,

			calculate: function (coordinates) {

				this.coordinates = coordinates;
				this.splines = [];

				this._sortCoordinatesByXValues();


				return this.splines;
			},

			_sortCoordinatesByXValues: function () {
				this.coordinates = _.sortBy(this.coordinates, function (coordinate) {
					return coordinate.x;
				});
			}

		};

	});