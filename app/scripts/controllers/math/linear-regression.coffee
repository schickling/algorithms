"use strict"

angular.module("algorithmsApp")
  .controller "LinearRegressionCtrl", ($scope, LinearRegression) ->

    $scope.x = 1
    $scope.y = 1
    $scope.coordinates = []

    $scope.coordinate = (coordinate) ->

      $scope.addCoordinate = ->
        $scope.coordinates.push x: $scope.x, y: $scope.y
        coordinate.addPoint $scope.x, $scope.y
        $scope.calculate()

      $scope.calculate = ->
        $scope.reset()
        if $scope.coordinates.length < 2 then return
        result = LinearRegression.calculate $scope.coordinates
        coordinate.addFunction "#{result.m} * x + #{result.t}"

      $scope.reset = ->
        coordinate.reset()
