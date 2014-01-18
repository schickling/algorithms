'use strict'

describe 'Directive: perlin', () ->

  # load the directive's module
  beforeEach module 'algorithmsApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

