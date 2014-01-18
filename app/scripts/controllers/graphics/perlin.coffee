'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

    $scope.octaves = [
      latticeDistanceX: 10
      latticeDistanceY: 10
    ,
      latticeDistanceX: 20
      latticeDistanceY: 20
    ]

    $scope.draw = ->

    $scope.deleteOctave = (index) ->
      $scope.octaves.splice(index, 1)

    $scope.draw()