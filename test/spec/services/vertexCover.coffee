'use strict'

describe 'Service: vertexCover', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  vertexCover = {}
  beforeEach inject (VertexCover) ->
    vertexCover = VertexCover

  it 'should do something', () ->
    expect(!!vertexCover).toBe true
