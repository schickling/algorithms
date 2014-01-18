'use strict'

angular.module('algorithmsApp')
  .controller 'PerlinCtrl', ($scope) ->

  	$scope.params = 
  		latticeDistanceX: 10
  		latticeDistanceY: 10
  		octaves: 1

  	$scope.draw = ->


  	$scope.draw()