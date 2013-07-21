'use strict';

angular.module('extendedEuclideanAlgorithmApp')
  .controller('MainCtrl', function ($scope) {

    $scope.x = 120;
    $scope.y = 23;
    $scope.gcd = undefined;
    $scope.a = undefined;
    $scope.b = undefined;
    $scope.steps = [];

    $scope.calc = function () {

      // first step
      var firstStep = {
        r: $scope.x
      };

      $scope.steps.push(firstStep);

      // second step
      var secondStep = {
        r: $scope.y
      };

      $scope.steps.push(secondStep);

      // mid steps

      // last step
    };

    $scope.random = function () {
      $scope.x = $scope._generateRandom(2, 1000);
      $scope.y = $scope._generateRandom(2, 1000);
      $scope.calc();
    };

    $scope._generateRandom = function (min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    };

    $scope.calc();

  });