'use strict'

describe 'Controller: BezierCtrl', () ->

  # load the controller's module
  beforeEach module 'algorithmsApp'

  BezierCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    BezierCtrl = $controller 'BezierCtrl', {
      $scope: scope
    }
