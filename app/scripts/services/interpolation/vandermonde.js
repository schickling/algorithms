'use strict';

angular.module('algorithmsApp')
	.service('VandermondeInterpolation', function VandermondeInterpolation(GaussianElimination) {

		return {

			coordinates: null,
			matrix: [],
			coefficients: [],

			/**
			 * Returns the coeffitients of a polynom that interpolates the given points
			 * @param  array coordinates
			 * @return array
			 */
			calculate: function (coordinates) {
				this.coordinates = coordinates;

				this._sortCoordinatesByXValues();
				this._prepareMatrix();
				this._solveEquationSystem();

				return this.coefficients;
			},

			_sortCoordinatesByXValues: function () {
				// bubble sort
				var i, tmp, swapped = true;
				while (swapped) {
					swapped = false;
					for (i = 1; i < this.coordinates.length; i++) {
						if (this.coordinates[i - 1].x > this.coordinates[i].x) {
							tmp = this.coordinates[i - 1];
							this.coordinates[i - 1] = this.coordinates[i];
							this.coordinates[i] = tmp;
							swapped = true;
						} else if (this.coordinates[i - 1].x === this.coordinates[i].x) {
							throw Error();
						}
					}
				}
			},

			_prepareMatrix: function () {
				var row, rowIndex, power,
					m = this.coordinates.length;

				for (rowIndex = 0; rowIndex < m; rowIndex++) {
					row = [];
					for (power = 0; power < m; power++) {
						row.push(Math.pow(this.coordinates[rowIndex].x, power));
					}
					row.push(this.coordinates[rowIndex].y);
					this.matrix.push(row);
				}
			},

			_solveEquationSystem: function () {
				this.matrix = GaussianElimination.eliminate(this.matrix);

				for (var rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
					this.coefficients[rowIndex] = this.matrix[rowIndex][this.matrix[rowIndex].length - 1] / this.matrix[rowIndex][rowIndex];
				}
			}

		};

	});