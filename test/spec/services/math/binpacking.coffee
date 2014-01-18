'use strict'

describe 'Service: Binpacking', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  binpacking = {}
  beforeEach inject (Binpacking) ->
    binpacking = Binpacking

  it 'should do something', () ->
    expect(!!binpacking).toBe true
