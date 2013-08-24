'use strict';

angular.module('algorithmsApp')
  .controller('extendedEuclideanAlgorithm', function ($scope, ExtendedEuclideanAlgorithm) {

    $scope.a = 120;
    $scope.b = 23;
    $scope.gcd = undefined;
    $scope.x = undefined;
    $scope.y = undefined;
    $scope.steps = [];

    $scope.calc = function () {
      var result = ExtendedEuclideanAlgorithm.calculate($scope.a, $scope.b);
      $scope.x = result.x;
      $scope.y = result.y;
      $scope.gcd = result.gcd;
      $scope.steps = result.steps;
    };

    $scope.random = function () {
      $scope.a = $scope._generateRandom(2, 10000);
      $scope.b = $scope._generateRandom(2, 10000);
      $scope.calc();
    };

    $scope.cyclicColor = function(index) {
      var colors = [
        '#990000',
        '#006600',
        '#000099',
        '#FF6600',
        '#000000'
      ];

      return colors[index % colors.length];
    };

    $scope._generateRandom = function (min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    };

    $scope.calc();

  });