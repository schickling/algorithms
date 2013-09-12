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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
