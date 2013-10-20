'use strict';

angular.module('algorithmsApp')
  .directive('bezier', (Bezier) ->
    template: '<canvas></canvas>'
    restrict: 'E'
    link: (scope, element, attrs) ->

      points = []
      canvas = $canvas = width = height = dragStartPoint = pointToDrag = isDragging = context = null

      initCanvas = ->
        width = element.width();
        height = element.height();

        $canvas = element.children('canvas').first();
        $canvas.attr({
          width: width,
          height: height
        });

        canvas = $canvas.get(0)
        context = canvas.getContext('2d')

      initListener = ->

        mouseDown = (e) ->
          for point in points
            if Math.abs(point.x - e.offsetX) < 12 and Math.abs(point.y - e.offsetY) < 12
              pointToDrag = point
              isDragging = true
              dragStartPoint = x: e.offsetX, y: e.offsetY

        mouseUp = (e) ->
          if not isDragging or (pointToDrag.x is e.offsetX and pointToDrag.y is e.offsetY)
            points.push x: e.offsetX, y: e.offsetY
            draw()

          isDragging = false
          pointToDrag = null

        mouseMove = (e) ->
          if isDragging
            drag(e)
            dragStartPoint = x: e.offsetX, y: e.offsetY

        canvas.onmousedown = mouseDown
        canvas.onmouseup = mouseUp
        canvas.onmousemove = mouseMove

      drag = (e) ->
        pointToDrag.x += e.offsetX - dragStartPoint.x
        pointToDrag.y += e.offsetY - dragStartPoint.y
        draw()

      draw = ->
        reset()
        drawPoint point.x, point.y for point in points
        drawBezier()

      reset = ->
        context.clearRect 0, 0, width, height

      drawPoint = (x, y) ->
        context.beginPath()
        context.arc x, y, 12, 0, Math.PI * 2, true
        context.closePath()
        context.fillStyle = 'rgba(0, 0, 0, 0.1)'
        context.fill()
        context.beginPath()
        context.arc x, y, 3, 0, Math.PI * 2, true
        context.closePath()
        context.fillStyle = 'rgba(0, 0, 0, 0.7)'
        context.fill()

      drawBezier = ->
        context.beginPath()
        for t in [0..1] by 0.01
          point = Bezier.calculate points, t
          context.lineTo point.x, point.y
        context.stroke()

      initCanvas()
      initListener()

  )
