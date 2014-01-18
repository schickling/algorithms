'use strict'

angular.module('algorithmsApp').service 'Perlin', Perlin = ->

  calculate: (params) ->
    @params = params
    numNodesWidth = Math.floor(@params.width / @params.latticeDistanceX) + 2
    numNodesHeight = Math.floor(@params.height / @params.latticeDistanceY) + 2
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

    interpolateBottomX = distanceXToLeft * @randomValues[latticeYPosMax][latticeXPosMin] + distanceXToRight * @randomValues[latticeYPosMax][latticeXPosMax]
    interpolateTopX = distanceXToLeft * @randomValues[latticeYPosMin][latticeXPosMin] + distanceXToRight * @randomValues[latticeYPosMin][latticeXPosMax]

    interpolateVertical = distanceYToTop * interpolateBottomX + distanceYToBottom * interpolateTopX
    interpolateVertical

  _distance: (xDist, yDist) ->
    Math.sqrt Math.pow(xDist, 2) + Math.pow(yDist, 2)
