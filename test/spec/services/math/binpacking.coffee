'use strict'

describe 'Service: Binpacking', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  binpacking = null
  beforeEach inject (Binpacking) ->
    binpacking = Binpacking

  it 'should pack one value', ->
    values = [1]
    expect(binpacking.calculate(values)).toEqual [[1]]

  it 'should pack two values', ->
    values = [1, 1]
    expect(binpacking.calculate(values)).toEqual [[1], [1]]

  it 'should pack two values', ->
    values = [0.5, 0.5]
    expect(binpacking.calculate(values)).toEqual [[0.5, 0.5]]

  it 'should pack four values', ->
    values = [0.5, 0.4, 0.1, 0.5]
    expect(binpacking.calculate(values)).toEqual [[0.5, 0.4, 0.1], [0.5]]

  it 'should pack many values', ->
    values = [0.7, 0.65, 0.6, 0.6, 0.55, 0.55, 0.45, 0.4, 0.3, 0.3, 0.25, 0.25, 0.25, 0.2, 0.2]
    expect(binpacking.calculate(values)).toEqual [[0.7, 0.3], [0.65, 0.3], [0.6, 0.4], [0.6, 0.25], [0.55, 0.45], [0.55, 0.25, 0.2], [0.25, 0.2]]
