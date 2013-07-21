'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('extendedEuclideanAlgorithmApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should calc results for x = 1, y = 1', function () {
    scope.x = 1;
    scope.y = 1;
    scope.calc();
    expect(scope.gcd).toBe(1);
    expect(scope.a).toBe(1);
    expect(scope.b).toBe(1);
  });

  it('should calc results for x = 6, y = 3', function () {
    scope.x = 6;
    scope.y = 3;
    scope.calc();
    expect(scope.gcd).toBe(3);
    expect(scope.a).toBe(0);
    expect(scope.b).toBe(1);
  });
});
