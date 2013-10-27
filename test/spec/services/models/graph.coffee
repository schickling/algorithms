describe 'Service: Models/Graph', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  graph = _Node = null
  beforeEach inject (Graph, Node) ->
    graph = new Graph()
    _Node = Node

  it 'should add node', () ->
    graph.addNode("A")
    node = new _Node()
    node.id = "A"
    expect(graph.getNode("A")).toEqual(node)

  it 'should add edge', () ->
    a = graph.addNode("A")
    b = graph.addNode("B")
    graph.addEdge("A", "B")
    expect(a.getAdjacentNodes()[0]).toEqual b
    expect(b.getAdjacentNodes()[0]).toEqual a
