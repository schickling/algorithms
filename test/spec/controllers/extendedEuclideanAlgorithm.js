'use strict';

describe('Controller: extendedEuclideanAlgorithm', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var Controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('extendedEuclideanAlgorithm', {
      $scope: scope
    });
  }));

  it('should have 6 rows', function() {
    expect(scope.steps.length).toBe(6);
  })

});
