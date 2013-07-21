'use strict';

angular.module('extendedEuclideanAlgorithmApp')
  .controller('MainCtrl', function ($scope) {

    $scope.a = 120;
    $scope.b = 23;
    $scope.gcd;
    $scope.x;
    $scope.y;
    $scope.steps = [];

    $scope.calc = function () {

      $scope._checkSwap();

      var a = $scope.a,
        b = $scope.b,
        index = 2,
        steps = [],
        quotient, remainder, combinationA, combinationB, x, y;

      // initialize
      steps.push({
        remainder: a,
        combinationA: 1,
        combinationB: 0,
      });
      steps.push({
        remainder: b,
        combinationA: 0,
        combinationB: 1,
      });

      // magic!
      do {
        quotient = parseInt(steps[index - 2].remainder / steps[index - 1].remainder, 10);
        remainder = steps[index - 2].remainder % steps[index - 1].remainder;
        combinationA = steps[index - 2].combinationA - steps[index - 1].combinationA * quotient;
        combinationB = steps[index - 2].combinationB - steps[index - 1].combinationB * quotient;

        steps.push({
          quotient: quotient,
          remainder: remainder,
          combinationA: combinationA,
          combinationB: combinationB,
        });

        index++;
      } while (remainder > 0);

      // delete last steps
      steps.pop();

      x = steps[index - 2].combinationA;
      y = steps[index - 2].combinationB;

      // save data
      $scope.x = x;
      $scope.y = y;
      $scope.gcd = a * x + b * y;
      $scope.steps = steps;
    };

    $scope.random = function () {
      $scope.a = $scope._generateRandom(2, 1000);
      $scope.b = $scope._generateRandom(2, 1000);
      $scope.calc();
    };

    $scope._generateRandom = function (min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    };

    $scope._checkSwap = function () {
      if ($scope.b > $scope.a) {
        var tmp = $scope.a;
        $scope.a = $scope.b;
        $scope.b = tmp;
      }
    };

    $scope.calc();

  });