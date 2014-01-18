'use strict'

describe 'Service: Perlin', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  Perlin = {}
  beforeEach inject (_Perlin_) ->
    Perlin = _Perlin_

  it 'should do something', () ->
    expect(!!Perlin).toBe true
