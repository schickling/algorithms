'use strict';

angular.module('algorithmsApp')
	.service('VandermondeInterpolation', function VandermondeInterpolation(GaussianElimination) {

		return {

			coordinates: null,
			matrix: [],
			solutionVector: [],
			coefficients: [],

			calculate: function (coordinates) {

				this.coordinates = coordinates;

				this._sortCoordinatesByXValues();
				this._prepareMatrix();
				this._prepareSolutionVector();
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
					this.matrix.push(row);
				}
			},

			_prepareSolutionVector: function () {
				for (var rowIndex = 0; rowIndex < this.coordinates.length; rowIndex++) {
					this.solutionVector.push(this.coordinates[rowIndex].y);
				}
			},

			_solveEquationSystem: function () {
				var sum, rowIndex, addColumnIndex;

				this.matrix = GaussianElimination.eliminate(this.matrix);
				console.log(this.matrix);

				// backward substitution
				for (rowIndex = this.matrix.length - 1; rowIndex >= 0; rowIndex--) {
					sum = this.solutionVector[rowIndex];
					for (addColumnIndex = rowIndex + 1; addColumnIndex < this.matrix.length; addColumnIndex++) {
						sum -= this.matrix[rowIndex][addColumnIndex] * this.coefficients[addColumnIndex];
					}
					this.coefficients[rowIndex] = sum / this.matrix[rowIndex][rowIndex];
				}
			}

		};

	});