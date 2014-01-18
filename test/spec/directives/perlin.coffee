'use strict'

describe 'Directive: perlin', () ->

  # load the directive's module
  beforeEach module 'algorithmsApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<perlin></perlin>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the perlin directive'
