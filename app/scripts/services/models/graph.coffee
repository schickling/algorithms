angular.module('algorithmsApp')
  .factory 'Graph', (Node) ->

    class Graph

      constructor: ->
        @_nodes = {}

      addNode: (id, node = new Node()) ->
        node.id = id
        @_nodes[id] = node

      getNode: (id) ->
        @_nodes[id]

      addEdge: (firstId, secondId) ->
        @addDirectedEdge(firstId, secondId)
        @addDirectedEdge(secondId, firstId)

      addDirectedEdge: (firstId, secondId) ->
        firstNode = @getNode(firstId)
        secondNode = @getNode(secondId)
        firstNode.addAdjacentNode(secondNode)

      getNodes: ->
        _.values(@_nodes)
