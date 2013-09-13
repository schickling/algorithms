'use strict';

describe('Controller: InterpolationCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var InterpolationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterpolationCtrl = $controller('InterpolationCtrl', {
      $scope: scope
    });
  }));

});