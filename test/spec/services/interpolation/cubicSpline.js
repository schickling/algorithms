'use strict';

describe('Service: CubicSplineInterpolation', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var cubicSplineInterpolation;
  beforeEach(inject(function (CubicSplineInterpolation) {
    cubicSplineInterpolation = CubicSplineInterpolation;
  }));

  it('should do something', function () {
    expect(cubicSplineInterpolation.calculate([{
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 2
    }])).toEqual([{
      a: 1,
      b: 0,
      c: 0,
      d: 2,
    }, {
      a: 3,
      b: 6,
      c: 6,
      d: -13,
    }]);
  });

});