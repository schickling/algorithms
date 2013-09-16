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

});