'use strict';

describe('Controller: FixedPointIterationCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var FixedPointIterationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FixedPointIterationCtrl = $controller('FixedPointIterationCtrl', {
      $scope: scope
    });
  }));

});