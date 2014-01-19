'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

    $scope.params = {}
    $scope.params.interpolationMethods = ['bilinear', 'bicubic']

    $scope.params.layers = [
      latticeDistanceX: 30
      latticeDistanceY: 30
      interpolationMethod: 'bilinear'
    ,
      latticeDistanceX: 20
      latticeDistanceY: 20
      interpolationMethod: 'bicubic'
    ]

    $scope.addLayer = ->
      $scope.params.layers.push
        latticeDistanceX: 10
        latticeDistanceY: 10
        interpolationMethod: 'bicubic'

    $scope.deleteLayer = (index) ->
      $scope.params.layers.splice(index, 1)