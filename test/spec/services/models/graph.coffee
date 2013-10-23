describe 'Service: Models/Graph', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  graph = {}
  beforeEach inject (Graph) ->
    graph = new Graph()

  it 'should add node', () ->
    graph.addNode("A")
    expect(graph.getNode("A")).toEqual {}
