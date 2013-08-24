'use strict';

describe('Controller: extendedEuclideanAlgorithm/MainCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('extendedEuclideanAlgorithm/MainCtrl', {
      $scope: scope
    });
  }));

  it('should calc results for a = 1, b = 1', function () {
    scope.a = 1;
    scope.b = 1;
    scope.calc();
    expect(scope.gcd).toBe(1);
    expect(scope.x).toBe(0);
    expect(scope.y).toBe(1);
  });

  it('should calc results for a = 6, b = 3', function () {
    scope.a = 6;
    scope.b = 3;
    scope.calc();
    expect(scope.gcd).toBe(3);
    expect(scope.x).toBe(0);
    expect(scope.y).toBe(1);
  });

  it('should calc results for a = 120, b = 23', function () {
    scope.a = 120;
    scope.b = 23;
    scope.calc();
    expect(scope.gcd).toBe(1);
    expect(scope.x).toBe(-9);
    expect(scope.y).toBe(47);
  });

  it('should swap values to keep order', function () {
    scope.a = 23;
    scope.b = 120;
    scope.calc();
    expect(scope.a).toBe(120);
    expect(scope.b).toBe(23);
  });
});
