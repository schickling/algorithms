'use strict';

angular.module('algorithmsApp')
  .directive('bezier', (Bezier) ->
    template: '<canvas></canvas>'
    restrict: 'E'
    link: (scope, element, attrs) ->

      points = []
      $canvas = context = null

      initCanvas = ->
        width = element.width();
        height = element.height();

        $canvas = element.children('canvas').first();
        $canvas.attr({
          width: width,
          height: height
        });

        context = $canvas.get(0).getContext('2d');

      initListener = ->
        $canvas.on 'click', (e) ->
          points.push x: e.offsetX, y: e.offsetY
          drawPoint e.offsetX, e.offsetY

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

      initCanvas()
      initListener()

  )
