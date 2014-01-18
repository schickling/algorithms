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

