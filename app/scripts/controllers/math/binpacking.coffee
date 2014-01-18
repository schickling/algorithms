'use strict'

angular.module('algorithmsApp')
  .controller 'BinpackingCtrl', ($scope, Binpacking) ->

    $scope.identity = angular.identity
    $scope.valueString = "0.9, 0.8, 0.8, 0.8, 0.7, 0.65, 0.6, 0.6, 0.55, 0.55, 0.45, 0.4, 0.3, 0.3, 0.25, 0.25, 0.25, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2"
    $scope.epsilon = 0.6

    $scope.pack = ->
      $scope.values = $scope.valueString.split(',').map (value) ->
        parseFloat(value.trim(), 10)
      $scope.values = $scope.values.filter (value) ->
        value > 0 && value <= 1
      $scope.bins = Binpacking.calculate($scope.values, $scope.epsilon)

    $scope.pack()