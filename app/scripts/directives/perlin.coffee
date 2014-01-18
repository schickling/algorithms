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

        _initWatcher()


      _initWatcher = ->
        timeout = null
        scope.$watch('octaves', ->
          clearTimeout timeout
          timeout = setTimeout(->
            _draw()
          , 300)
        , true)

      _draw = ->
        context.clearRect 0, 0, width, height
        octaves = scope.octaves.map (octave) ->
          Perlin.calculate
            height: height
            width: width
            latticeDistanceX: octave.latticeDistanceX
            latticeDistanceY: octave.latticeDistanceY
        imageData = _octavesToImageData octaves
        context.putImageData imageData, 0, 0

      _octavesToImageData = (octaves) ->
        imageData = context.createImageData(width, height)
        i = 0
        while i < imageData.data.length
          offset = i / 4
          y = parseInt(offset / width)
          x = offset % width
          rand = 255 * octaves.reduce((sum, val) ->
            sum + val[y][x] / octaves.length
          , 0)
          imageData.data.set [rand, rand, rand, 255], i
          i += 4
        imageData

      init()
  )
