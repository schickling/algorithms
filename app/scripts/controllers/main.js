'use strict';

angular.module('algorithmsApp')
  .controller('main', function ($scope) {
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
      }, {
        name: 'Invert matrix',
        url: 'invert-matrix',
      }, {
        name: 'Smith normal form',
        url: 'smith-normal-form',
      },
    ];
  });