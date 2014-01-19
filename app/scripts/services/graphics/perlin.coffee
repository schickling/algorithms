'use strict'

angular.module('algorithmsApp').service 'Perlin', Perlin = ->

  calculate: (params) ->
    @params = params
    numNodesWidth = Math.floor(@params.width / @params.latticeDistanceX) + 4
    numNodesHeight = Math.floor(@params.height / @params.latticeDistanceY) + 4
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
    res = switch
      when @params.interpolationMethod == 'bilinear' then @_getColorBilinear(xPos, yPos)
      when @params.interpolationMethod == 'bicubic' then @_getColorBicubic(xPos, yPos)

  _getColorBicubic: (xPos, yPos) ->
    if(xPos % @params.latticeDistanceX == 0 && yPos % @params.latticeDistanceY == 0)
      return @randomValues[yPos / @params.latticeDistanceY][xPos / @params.latticeDistanceX]

    latticeXPosMin = Math.max(Math.floor(xPos / @params.latticeDistanceX), 0)
    latticeXPosMax = latticeXPosMax + 4
    latticeYPosMin = Math.max(Math.floor(yPos / @params.latticeDistanceY), 0)
    latticeYPosMax = latticeYPosMax + 4

    columns = []

    for yPos in latticeYPosMin..(latticeYPosMin+3)
      columns[yPos] = []
      for xPos in latticeXPosMin..(latticeXPosMin+3)
        columns[yPos][xPos] = @randomValues[yPos][xPos]

      columns[yPos] = @_interpolateCubic(columns, xPos)

    @_interpolateCubic(columns, y)

  _interpolateCubic: (p, x) ->
    p[1] + 0.5 * x*(p[2] - p[0] + x*(2.0*p[0] - 5.0*p[1] + 4.0*p[2] - p[3] + x*(3.0*(p[1] - p[2]) + p[3] - p[0])));

  _getColorBilinear: (xPos, yPos) ->
    if(xPos % @params.latticeDistanceX == 0 && yPos % @params.latticeDistanceY == 0)
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
