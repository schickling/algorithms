'use strict';

describe('Controller: NewtonMethodCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var NewtonMethodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewtonMethodCtrl = $controller('NewtonMethodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
