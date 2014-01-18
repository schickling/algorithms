'use strict'

angular.module('algorithmsApp')
  .controller 'BinpackingCtrl', ($scope, Binpacking) ->

    $scope.identity = angular.identity
    $scope.valueString = "0.9, 0.88, 0.34, 0.01, 0.6, 1"

    $scope.pack = ->
      $scope.values = $scope.valueString.split(',').map (value) ->
        parseFloat(value.trim(), 10)
      $scope.values = $scope.values.filter (value) ->
        value > 0 && value <= 1
      $scope.bins = Binpacking.calculate($scope.values)

    $scope.pack()