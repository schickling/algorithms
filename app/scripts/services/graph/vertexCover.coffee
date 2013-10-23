angular.module('algorithmsApp')
  .service 'VertexCover', VertexCover = ->

    mark: (graph) ->
      @graph = graph
      @numberOfMarks = 0

      @_unmarkAllNodes()
      @_markPreMarginNodes()

      @numberOfMarks

    _unmarkAllNodes: ->
      @graph.forEachNode (node) -> node.marked = false

    _markPreMarginNodes: ->
      @graph.forEachNode (node) ->
        unless node.marked
          1

