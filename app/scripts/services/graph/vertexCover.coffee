angular.module('algorithmsApp')
  .service 'VertexCover', VertexCover = ->

    mark: (graph) ->
      @graph = graph
      # @_unmarkAllNodes()
      root = @graph.getNodes()[0]
      Math.max(@_minimumVertexCoverWithNode(root), @_minimumVertexCoverWithoutNode(root))

    _unmarkAllNodes: ->
      for node in @graph.getNodes()
        node.marked = false

    _minimumVertexCoverWithNode: (node) ->
      sum = 1
      node.getAdjacentNodes().forEach (adjacentNode) =>
        sum += @_minimumVertexCoverWithoutNode(adjacentNode)
      sum

    _minimumVertexCoverWithoutNode: (node) ->
      sumWithNode = 0
      sumWithoutNode = 0
      node.getAdjacentNodes().forEach (adjacentNode) =>
        sumWithNode += @_minimumVertexCoverWithNode(adjacentNode)
        sumWithoutNode += @_minimumVertexCoverWithoutNode(adjacentNode)
      Math.max(sumWithNode, sumWithoutNode)


# For each u vertex define S+(u) is cover size with vertex u and S-(u) cover without vertex u.
# S+(u)= 1 + Sum(S-(v)) for each child v of u.
# S-(u)=Sum(max{S-(v),S+(v)}) for each child v of u.
# Answer is max(S+(r), S-(r)) where r is root of your tree.