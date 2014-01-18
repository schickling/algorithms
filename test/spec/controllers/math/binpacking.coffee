'use strict'

describe 'Controller: BinpackingCtrl', () ->

  # load the controller's module
  beforeEach module 'algorithmsApp'

  BinpackingCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    BinpackingCtrl = $controller 'BinpackingCtrl', {
      $scope: scope
    }
