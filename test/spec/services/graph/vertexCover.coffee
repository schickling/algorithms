describe 'Service: vertexCover', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  vertexCover = graph = null
  beforeEach inject (VertexCover, Graph) ->
    vertexCover = VertexCover
    graph = new Graph()

  # it 'should mark single node graph', () ->
  #   graph.addNode "A"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1
  #   expect(graph.getNode("A").marked).toBe true

  # it 'should mark two node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addEdge "A", "B"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1
  #   expect(graph.getNode("A").marked).toBe true
  #   expect(graph.getNode("B").marked).toBe false

  # it 'should mark three node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addNode "C"
  #   graph.addEdge "A", "B"
  #   graph.addEdge "B", "C"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1
  #   expect(graph.getNode("A").marked).toBe false
  #   expect(graph.getNode("B").marked).toBe true
  #   expect(graph.getNode("C").marked).toBe false

  # it 'should mark quadratic four node graph', () ->
  #   graph.addNode "A"
  #   graph.addNode "B"
  #   graph.addNode "C"
  #   graph.addNode "D"
  #   graph.addEdge "A", "B"
  #   graph.addEdge "B", "C"
  #   graph.addEdge "C", "D"
  #   numberOfMarks = vertexCover.mark(graph)
  #   expect(numberOfMarks).toBe 1
  #   expect(graph.getNode("A").marked).toBe false
  #   expect(graph.getNode("B").marked).toBe true
  #   expect(graph.getNode("C").marked).toBe false
