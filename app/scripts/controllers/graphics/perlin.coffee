'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

    $scope.params = {}
    $scope.params.interpolationMethods = ['bilinear', 'bicubic']
    $scope.params.interpolationMethod = $scope.params.interpolationMethods[1]

    $scope.params.octaves = [
      latticeDistanceX: 10
      latticeDistanceY: 10
    ,
      latticeDistanceX: 20
      latticeDistanceY: 20
    ]

    $scope.addOctave = ->
      $scope.params.octaves.push
        latticeDistanceX: 10
        latticeDistanceY: 10

    $scope.deleteOctave = (index) ->
      $scope.params.octaves.splice(index, 1)