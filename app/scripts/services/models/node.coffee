angular.module('algorithmsApp')
  .factory 'Node', () ->

    class Node

      constructor: ->
        @_adjacentNodes = []

      addAdjacentNode: (node) ->
        @_adjacentNodes.push(node)

      removeAdjacentNode: (node) ->
        @_adjacentNodes = _.without(@_adjacentNodes, node)

      getAdjacentNodes: ->
        @_adjacentNodes

