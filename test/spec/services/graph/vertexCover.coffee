describe 'Service: vertexCover', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  vertexCover = graph = null
  beforeEach inject (VertexCover, Graph) ->
    vertexCover = VertexCover
    graph = new Graph()

  it 'should mark single node graph', () ->
    graph.addNode "A"
    numberOfMarks = vertexCover.mark(graph)
    expect(numberOfMarks).toBe 1

  it 'should mark two node graph', () ->
    graph.addNode "A"
    graph.addNode "B"
    graph.addDirectedEdge "A", "B"
    numberOfMarks = vertexCover.mark(graph)
    expect(numberOfMarks).toBe 1

  # it 'should mark straight three node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addNode "C"
  #   graph.addDirectedEdge "A", "B"
  #   graph.addDirectedEdge "B", "C"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1

  # it 'should mark circular three node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addNode "C"
  #   graph.addDirectedEdge "A", "B"
  #   graph.addDirectedEdge "B", "C"
  #   graph.addDirectedEdge "C", "A"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1

  it 'should mark quadratic four node graph', () ->
    graph.addNode "A"
    graph.addNode "B"
    graph.addNode "C"
    graph.addNode "D"
    graph.addDirectedEdge "A", "B"
    graph.addDirectedEdge "B", "C"
    graph.addDirectedEdge "C", "D"
    numberOfMarks = vertexCover.mark(graph)
    expect(numberOfMarks).toBe 2

  # it 'should mark more complex node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addNode "C"
  #   graph.addNode "D"
  #   graph.addNode "E"
  #   graph.addNode "F"
  #   graph.addDirectedEdge "A", "B"
  #   graph.addDirectedEdge "A", "F"
  #   graph.addDirectedEdge "B", "C"
  #   graph.addDirectedEdge "B", "F"
  #   graph.addDirectedEdge "C", "D"
  #   graph.addDirectedEdge "C", "E"
  #   graph.addDirectedEdge "E", "F"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 3
