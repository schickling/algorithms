'use strict';

describe('Service: CubicSpline', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var cubicSpline;
  beforeEach(inject(function (CubicSpline) {
    cubicSpline = CubicSpline;
  }));

  it('should do something', function () {
    expect(!!cubicSpline).toBe(true);
  });

});
