'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

    $scope.params = {}
    $scope.params.interpolationMethods = ['bilinear', 'bicubic']
    $scope.params.interpolationMethod = $scope.params.interpolationMethods[0]

    $scope.params.octaves = [
      latticeDistanceX: 10
      latticeDistanceY: 10
    ,
      latticeDistanceX: 20
      latticeDistanceY: 20
    ]

    $scope.addOctave = ->
      $scope.octaves.push
        latticeDistanceX: 10
        latticeDistanceY: 10

    $scope.deleteOctave = (index) ->
      $scope.octaves.splice(index, 1)