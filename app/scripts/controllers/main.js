'use strict';

angular.module('algorithmsApp')
  .controller('main', function ($scope) {
    $scope.algorithms = [
      {
        name: 'Chinese remainder theorem',
        description: 'Solves a system of congruence equations',
        url: 'chinese-remainder-theorem',
      }, {
        name: 'Extended euclidean algorithm',
        description: 'Calculates the greates common divisor',
        url: 'extended-euclidean-algorithm',
      }, {
        name: 'Gaussian elimination',
        description: 'Row reduces a matrix',
        url: 'gaussian-elimination',
      }, {
        name: 'Invert matrix',
        description: 'Inverts a matrix with the gaussian elimination',
        url: 'invert-matrix',
      }, {
        name: 'Smith normal form',
        description: 'Translate a matrix smith normal form',
        url: 'smith-normal-form',
      },
    ];
  });