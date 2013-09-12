'use strict';

describe('Service: VandermondeInterpolation', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var vandermondeInterpolation;
  beforeEach(inject(function (VandermondeInterpolation) {
    vandermondeInterpolation = VandermondeInterpolation;
  }));

  it('should do something', function () {
    expect( !! vandermondeInterpolation).toBe(true);
  });

});