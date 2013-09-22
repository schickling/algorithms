'use strict'

describe 'Directive: bezier', () ->

  # load the directive's module
  beforeEach module 'algorithmsApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
