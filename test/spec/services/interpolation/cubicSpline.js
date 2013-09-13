'use strict';

describe('Service: CubicSplineInterpolation', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var cubicSplineInterpolation;
  beforeEach(inject(function (CubicSplineInterpolation) {
    cubicSplineInterpolation = CubicSplineInterpolation;
  }));

  it('should interpolate 3 coords', function () {
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
      minX: 0,
      maxX: 1,
    }, {
      a: 3,
      b: 6,
      c: 6,
      d: -13,
      minX: 1,
      maxX: 2,
    }]);
  });

  it('should interpolate 3 coords in wrong order', function () {
    expect(cubicSplineInterpolation.calculate([{
      x: 1,
      y: 3
    }, {
      x: 0,
      y: 1
    }, {
      x: 2,
      y: 2
    }])).toEqual([{
      a: 1,
      b: 0,
      c: 0,
      d: 2,
      minX: 0,
      maxX: 1,
    }, {
      a: 3,
      b: 6,
      c: 6,
      d: -13,
      minX: 1,
      maxX: 2,
    }]);
  });

  it('should interpolate 3 coords', function () {
    expect(cubicSplineInterpolation.calculate([{
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 2
    }, {
      x: 5,
      y: -1
    }])).toEqual([{
      a: 1,
      b: 0,
      c: 0,
      d: 2,
      minX: 0,
      maxX: 1,
    }, {
      a: 3,
      b: 6,
      c: 6,
      d: -13,
      minX: 1,
      maxX: 2,
    }, {
      a: 2,
      b: -21,
      c: -33,
      d: 51,
      minX: 2,
      maxX: 5,
    }]);
  });

});