describe 'Service: vertexCover', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  vertexCover = graph = null
  beforeEach inject (VertexCover) ->
    vertexCover = VertexCover
    Graph = require("data-structures").Graph
    graph = new Graph()

  it 'should do something', () ->
    graph.addNode "A"
    numberOfMarks = vertexCover.mark(graph)
    expect(numberOfMarks).toBe 1
    expect(graph.getNode("A").marked).toBe true
