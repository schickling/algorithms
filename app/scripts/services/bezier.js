'use strict';

angular.module('algorithmsApp')
	.service('Bezier', function Bezier() {

		return {

			calculate: function (coordinates, t) {
				coordinates = t = null;
				var coordinate = {
					x: 1,
					y: 1
				};

				return coordinate;
			}

		};

	});