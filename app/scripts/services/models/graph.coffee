angular.module('algorithmsApp')
  .factory 'Graph', ->

    class Graph

      constructor: ->
        @_nodes = []

      addNode: (id, node = {}) ->
        @_nodes[id] = node

      getNode: (id) ->
        @_nodes[id]


