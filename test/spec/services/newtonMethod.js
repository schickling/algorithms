'use strict';

describe('Service: newtonMethod', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var newtonMethod;
  beforeEach(inject(function (NewtonMethod) {
    newtonMethod = NewtonMethod;
  }));

  it('should calculate first 3 values of linear function', function () {
    expect(newtonMethod.calculate('x', '1', 1, 3)).toEqual([0, 0, 0]);
  });

  it('should calculate first 3 values of quadratic function', function () {
    expect(newtonMethod.calculate('x^2', '2*x', 1, 3)).toEqual([0.5, 0.25, 0.125]);
  });

});