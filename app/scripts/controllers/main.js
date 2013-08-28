'use strict';

angular.module('algorithmsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.algorithms = [
      {
        name: 'Chinese remainder theorem',
        url: 'chinese-remainder-theorem',
      }, {
        name: 'Extended euclidean algorithm',
        url: 'extended-euclidean-algorithm',
      }, {
        name: 'Gaussian elimination',
        url: 'gaussian-elimination',
      },
    ];
  });