angular.module('algorithmsApp')
  .service 'VertexCover', VertexCover = ->

    mark: (graph) ->
      console.log graph._nodes
      graph.getNode("A").marked = true
      1
