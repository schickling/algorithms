'use strict'

describe 'Service: Binpacking', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  binpacking = null
  beforeEach inject (Binpacking) ->
    binpacking = Binpacking

  it 'should do something', () ->
    values = [0.1]
    expect(binpacking.calculate(values, 1)).toEqual [[0.1]]
