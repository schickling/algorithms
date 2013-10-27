'use strict'

describe 'Service: Node', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  node = {}
  beforeEach inject (Node) ->
    node = Node

  it 'should do something', () ->
    expect(!!node).toBe true
