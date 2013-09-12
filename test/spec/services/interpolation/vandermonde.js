'use strict';

describe('Service: VandermondeInterpolation', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var vandermondeInterpolation;
  beforeEach(inject(function (VandermondeInterpolation) {
    vandermondeInterpolation = VandermondeInterpolation;
  }));

  it('should calculate constant 1', function () {
    expect(vandermondeInterpolation.calculate([{
      x: 1,
      y: 1
    }])).toEqual([1]);
  });

});