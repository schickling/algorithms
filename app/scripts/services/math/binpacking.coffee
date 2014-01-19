'use strict'

angular.module('algorithmsApp')
  .service 'Binpacking', Binpacking = ->

    # calculate: (values, epsilon) ->

    #   delta = epsilon / 2
    #   filteredValues = values.filter (value) -> value >= delta
    #   smallValues = value.filter (value) -> value < delta
    #   filteredN = filteredValues.length
    #   k = Math.ceil(epsilon * epsilon * filteredN / 2)
    #   m = Math.floor(filteredN / k)
    #   H = []
    #   filteredValues.forEach (value, i) ->
    #     index = parseInt(i / k, 10)
    #     H[index] = []  unless H[index] instanceof Array
    #     H[index].push value

    #   console.log H.length, filteredN

    #   [[0.1]]


    # first fit
    calculate: (values) ->
      bins = [[]]

      values.forEach (value) =>
        for bin in bins
          if bin.length == 0 || @_sumOfBin(bin) + value <= 1
            return bin.push value
        bins.push [value]

      bins

    _sumOfBin: (bin) ->
      bin.reduce (sum, value) -> sum + value

