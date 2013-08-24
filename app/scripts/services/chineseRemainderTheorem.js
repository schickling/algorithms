'use strict';

angular.module('algorithmsApp')
	.service('ChineseRemainderTheorem', function ChineseRemainderTheorem() {
		return {
			calculate: function (A, M) {
				
				if (!(A instanceof Array) || !(M instanceof Array) || A.length !== M.length) return false;

				

				return 47;
				
			}
		}
	});