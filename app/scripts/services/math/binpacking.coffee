'use strict'

angular.module('algorithmsApp')
  .service 'Binpacking', Binpacking = ->

    calculate: (values, epsilon) ->

      delta = epsilon / 2
      filteredValues = values.filter (value) -> value >= delta
      filteredN = filteredValues.length
      k = Math.ceil(epsilon * epsilon * filteredN / 2)
      m = Math.floor(filteredN / k)
      H = []
      filteredValues.forEach (value, i) ->
        index = parseInt(i / k, 10)
        H[index] = []  unless H[index] instanceof Array
        H[index].push value

      [[0.1]]

