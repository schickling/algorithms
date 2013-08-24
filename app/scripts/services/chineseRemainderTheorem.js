'use strict';

angular.module('algorithmsApp')
	.service('ChineseRemainderTheorem', function ChineseRemainderTheorem(ExtendedEuclideanAlgorithm) {
		return {
			calculate: function (aVector, mVector) {

				if (!(aVector instanceof Array) || !(mVector instanceof Array) || aVector.length !== mVector.length) return false;

				var M = 1,
					x = 0,
					n = aVector.length;

				mVector.forEach(function (m) {
					M *= m;
				});

				for (var i = 0; i < n; i++) {
					var s, e,
						mi = mVector[i],
						Mi = M / mi,
						s = ExtendedEuclideanAlgorithm.calculate(Mi, mi).x,
						e = s * Mi;

					x += aVector[i] * e;
				}

				return ((x % M) + M) % M;

			}
		}
	});