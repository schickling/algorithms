'use strict'

describe 'Controller: PerlinCtrl', () ->

  # load the controller's module
  beforeEach module 'algorithmsApp'

  PerlinCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    PerlinCtrl = $controller 'PerlinCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
