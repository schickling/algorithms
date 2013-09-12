'use strict';

angular.module('algorithmsApp')
  .controller('main', function ($scope) {
    $scope.algorithms = [
      {
        name: 'Chinese remainder theorem',
        description: 'Solves a system of congruence equations',
        url: 'chinese-remainder-theorem',
        label: ''
      }, {
        name: 'Prime number test',
        description: 'Test a number if it\'s prime with the sieve of Eratosthenes',
        url: 'prime-number-test',
        label: ''
      }, {
        name: 'Prime number generators',
        description: 'Generate prime numbers with different algorithms',
        url: 'prime-number-generators',
        label: 'Under construction'
      }, {
        name: 'Extended euclidean algorithm',
        description: 'Calculates the greates common divisor',
        url: 'extended-euclidean-algorithm',
        label: ''
      }, {
        name: 'Gaussian elimination',
        description: 'Row reduces a matrix',
        url: 'gaussian-elimination',
        label: ''
      }, {
        name: 'Invert matrix',
        description: 'Inverts a matrix with the gaussian elimination',
        url: 'invert-matrix',
        label: ''
      }, {
        name: 'Smith normal form',
        description: 'Translate a matrix smith normal form',
        url: 'smith-normal-form',
        label: 'Under construction'
      }, {
        name: 'Matrix multiplication',
        description: 'Multiplicates three matrices',
        url: 'matrix-multiplication',
        label: ''
      }, {
        name: 'Legendre symbol',
        description: 'Legendre symbol calulation',
        url: 'legendre',
        label: ''
      }, {
        name: 'Determinant',
        description: 'Determinant calulation with Leibniz algorithm',
        url: 'determinant',
        label: ''
      }, {
        name: 'LU Decomposition',
        description: 'Factorizes a matrix into an upper and a lower diagonal matrix and solves the given equation system',
        url: 'lu-decomposition',
        label: ''
      }, {
        name: 'Cholesky Decomposition',
        description: 'Factorizes a symetric, positive definite matrix',
        url: 'cholesky-decomposition',
        label: ''
      }, {
        name: 'Polynomial Interpolation',
        description: 'Interpolates points into a polynomial',
        url: 'interpolation',
        label: ''
      },
    ];
  });