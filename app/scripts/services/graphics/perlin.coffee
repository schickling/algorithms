'use strict'

angular.module('algorithmsApp').service 'Perlin', Perlin = ->

  calculate: (params) ->
    @params = params
    numNodesWidth = Math.floor(@params.width / @params.latticeDistanceX) + 4
    numNodesHeight = Math.floor(@params.height / @params.latticeDistanceY) + 4
    @randomValues = @_generateRandomArray(numNodesHeight, numNodesWidth)
    finalValues = []
    for y in[0..@params.height - 1]
      finalValues.push []
      for x in [0..@params.width - 1]
        finalValues[y].push @_getColor(x, y)
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
    switch
      when @params.interpolationMethod == 'bilinear' then @_getColorBilinear(xPos, yPos)
      when @params.interpolationMethod == 'bicubic' then @_getColorBicubic(xPos, yPos)

  _getColorBicubic: (xPos, yPos) ->
    # if xPos % @params.latticeDistanceX == 0 && yPos % @params.latticeDistanceY == 0
    #   return @randomValues[yPos / @params.latticeDistanceY][xPos / @params.latticeDistanceX]

    latticeXPosMin = Math.floor(xPos / @params.latticeDistanceX)
    latticeYPosMin = Math.floor(yPos / @params.latticeDistanceY)

    columns = []

    # debugger
    for y in [0..3]
      columns[y] = []
      for x in [0..3]
        columns[y][x] = @randomValues[latticeYPosMin + y][latticeXPosMin + x]

      columns[y] = @_interpolateCubic(columns[y], (xPos % @params.latticeDistanceX) / @params.latticeDistanceX)

    @_interpolateCubic(columns, (yPos % @params.latticeDistanceY) / @params.latticeDistanceY)

  _interpolateCubic: (p, x) ->
    p[1] + 0.5 * x * (p[2] - p[0] + x * (2.0 * p[0] - 5.0 * p[1] + 4.0 * p[2] - p[3] + x * (3.0 * (p[1] - p[2]) + p[3] - p[0])))

  _getColorBilinear: (xPos, yPos) ->
    if xPos % @params.latticeDistanceX == 0 && yPos % @params.latticeDistanceY == 0
      return @randomValues[yPos / @params.latticeDistanceY][xPos / @params.latticeDistanceX]

    latticeXPosMin = Math.floor(xPos / @params.latticeDistanceX)
    latticeXPosMax = Math.ceil(xPos / @params.latticeDistanceX)
    latticeYPosMin = Math.floor(yPos / @params.latticeDistanceY)
    latticeYPosMax = Math.ceil(yPos / @params.latticeDistanceY)

    distanceXToLeft = (xPos - latticeXPosMin * @params.latticeDistanceX) / @params.latticeDistanceX
    distanceXToRight = 1 - distanceXToLeft
    distanceYToBottom = (latticeYPosMax * @params.latticeDistanceY - yPos) / @params.latticeDistanceY
    distanceYToTop = 1 - distanceYToBottom

    interpolateBottomX = distanceXToRight * @randomValues[latticeYPosMax][latticeXPosMin] + distanceXToLeft * @randomValues[latticeYPosMax][latticeXPosMax]
    interpolateTopX = distanceXToRight * @randomValues[latticeYPosMin][latticeXPosMin] + distanceXToLeft * @randomValues[latticeYPosMin][latticeXPosMax]

    interpolateVertical = distanceYToTop * interpolateBottomX + distanceYToBottom * interpolateTopX
    interpolateVertical

  _distance: (xDist, yDist) ->
    Math.sqrt Math.pow(xDist, 2) + Math.pow(yDist, 2)
