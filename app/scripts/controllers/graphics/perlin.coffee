'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

  	$scope.latticeDistanceX = 10
  	$scope.latticeDistanceY = 10
  	$scope.octaves = 1

  	$scope.draw = ->


  	$scope.draw()