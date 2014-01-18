'use strict'

angular.module('algorithmsApp').service 'Perlin', Perlin = ->

  calculate: (params) ->
    @params = params
    numNodesWidth = Math.floor(@params.width / @params.latticeDistanceX) + 1
    numNodesHeight = Math.floor(@params.height / @params.latticeDistanceY) + 1
    @randomValues = @_generateRandomArray(numNodesHeight, numNodesWidth)
    finalValues = []
    y = 0
    while y < @params.height
      finalValues[y] = []
      x = 0

      while x < @params.width
        #finalValues[y].push 0.5
        finalValues[y].push @_getColor(x, y)
        x++
      y++
    finalValues

  _generateRandomArray: (numNodesHeight, numNodesWidth) ->
    randomValues = []
    y = 0
    while y < numNodesHeight
      randomValues[y] = []
      x = 0

      while x < numNodesWidth
        randomValues[y][x] = Math.random()
        x++
      y++
    randomValues

  _getColor: (xPos, yPos) ->
    #if(xPos % nodeDistWidth == 0 && yPos % nodeDistHeight == 0) { // on lattice point
    # return randomValues[xPos / nodeDistWidth][yPos / nodeDistHeight];
    #}
    latticeXPosMin = Math.floor(xPos / @params.latticeDistanceX)
    latticeXPosMax = Math.ceil(xPos / @params.latticeDistanceX)
    latticeYPosMin = Math.floor(yPos / @params.latticeDistanceY)
    latticeYPosMax = Math.ceil(yPos / @params.latticeDistanceY)

    # calculate distances and values
    distances = []
    values = []
    distanceXToLeft = Math.abs(latticeXPosMin * @params.latticeDistanceX - xPos)
    distanceYToTop = Math.abs(latticeYPosMin * @params.latticeDistanceY - yPos)

    # Order
    # 1    2
    #
    # 3    4
    distances.push @_distance(distanceXToLeft, distanceYToTop)
    distances.push @_distance(@params.latticeDistanceX - distanceXToLeft, distanceYToTop)
    distances.push @_distance(distanceXToLeft, @params.latticeDistanceY - distanceYToTop)
    distances.push @_distance(@params.latticeDistanceX - distanceXToLeft, @params.latticeDistanceY - distanceYToTop)
    values.push @randomValues[latticeYPosMin][latticeXPosMin]
    values.push @randomValues[latticeYPosMin][latticeXPosMax]
    values.push @randomValues[latticeYPosMax][latticeXPosMin]
    values.push @randomValues[latticeYPosMax][latticeXPosMax]
    @_interpolate distances, values

  _distance: (xDist, yDist) ->
    Math.sqrt Math.pow(xDist, 2) + Math.pow(yDist, 2)

  _interpolate: (distances, values) ->
    res = 0.0
    distSum = 0.0
    i = 0

    while i < distances.length
      distSum += distances[i]
      i++
    i = 0

    while i < distances.length
      res += values[i] * (distances[i] / distSum)
      i++
    res
