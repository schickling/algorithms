'use strict';

angular.module('extendedEuclideanAlgorithmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.calc = function() {
      alert($scope.a+$scope.b);
    };
  });
