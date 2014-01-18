'use strict'

angular.module('algorithmsApp')
  .directive('perlin', (Perlin) ->
    template: '<canvas></canvas>'
    restrict: 'E'
    link: (scope, element, attrs) ->

      width = height = context = null

      init = ->
        width = element.width()
        height = element.height()

        $canvas = element.children('canvas').first()
        $canvas.attr({
          width: width,
          height: height
        })

        canvas = $canvas.get(0)
        context = canvas.getContext('2d')

        scope.$watch('params', ->
          draw()
        , true)

      draw = ->
        context.clearRect 0, 0, width, height
        randomValues = Perlin.calculate
          height: height
          width: width
          latticeDistanceX: scope.params.latticeDistanceX
          latticeDistanceY: scope.params.latticeDistanceY
        imageData = gridToImageData(randomValues)
        context.putImageData imageData, 0, 0

      gridToImageData = (values) ->
        imageData = context.createImageData(width, height)
        i = 0
        while i < imageData.data.length
          offset = i / 4
          y = parseInt(offset / width)
          x = offset % width
          rand = values[y][x] * 255
          imageData.data.set [rand, rand, rand, 255], i
          i += 4
        imageData

      init()
  )
