'use strict'

ddescribe 'Service: Perlin', () ->

  # load the service's module
  beforeEach module 'algorithmsApp'

  # instantiate service
  perlin = {}
  beforeEach inject (Perlin) ->
    perlin = Perlin
    @addMatchers
      toBeValidRandomNumber: ->
        flatArray = _.flatten(@actual)
        flatArray.reduce (sum, value) -> value >= 0 && value <= 1

  it 'should work for small latticeDistance', () ->
    params =
      width: 2
      height: 2
      latticeDistanceX: 1
      latticeDistanceY: 1
    expect(perlin.calculate(params)).toBeValidRandomNumber()

  it 'should work for big latticeDistance', () ->
    params =
      width: 2
      height: 2
      latticeDistanceX: 100
      latticeDistanceY: 100
    expect(perlin.calculate(params)).toBeValidRandomNumber()
