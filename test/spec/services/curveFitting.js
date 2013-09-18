'use strict';

describe('Service: curveFitting', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var curveFitting;
  beforeEach(inject(function (CurveFitting) {
    curveFitting = CurveFitting;
  }));

  it('should do something', function () {
    expect( !! curveFitting).toBe(true);
  });

});