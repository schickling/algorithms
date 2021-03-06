angular.module("algorithmsApp").service "Bezier", Bezier = ->

  calculate: (coordinates, t) ->
    n = coordinates.length - 1
    coordinate =
      x: 0
      y: 0

    # sum up coordinate
    for i in [0..n] by 1
      factor = @_binomialCoefficient(n, i) * Math.pow(1 - t, n - i) * Math.pow(t, i)
      coordinate.x += factor * coordinates[i].x
      coordinate.y += factor * coordinates[i].y

    coordinate

  _binomialCoefficient: (n, k) ->
    @_factorial(n) / (@_factorial(n - k) * @_factorial(k))

  _factorial: (n) ->
    if n is 0 then 1 else n * @_factorial(n - 1)