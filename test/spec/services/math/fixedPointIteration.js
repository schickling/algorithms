'use strict';

describe('Service: fixedPointIteration', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var fixedPointIteration;
  beforeEach(inject(function (FixedPointIteration) {
    fixedPointIteration = FixedPointIteration;
  }));

  it('should calculate first 5 iteration steps', function () {
    expect(fixedPointIteration.calculate('x', 5, 2)).toEqual([2, 2, 2, 2, 2]);
  });

  it('should calculate first 5 iteration steps', function () {
    expect(fixedPointIteration.calculate('x^2', 5, 2)).toEqual([4, 16, 256, 65536, 4294967296]);
  });

  it('should calculate first 5 iteration steps', function () {
    expect(fixedPointIteration.calculate('sin(x)', 5, 0)).toEqual([0, 0, 0, 0, 0]);
  });

});