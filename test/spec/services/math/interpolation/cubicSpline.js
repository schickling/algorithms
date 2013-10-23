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
      b: 2.75,
      c: 0,
      d: -0.75,
      minX: 0,
      maxX: 1
    }, {
      a: 3,
      b: 0.5,
      c: -2.25,
      d: 0.75,
      minX: 1,
      maxX: 2
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
      b: 2.75,
      c: 0,
      d: -0.75,
      minX: 0,
      maxX: 1
    }, {
      a: 3,
      b: 0.5,
      c: -2.25,
      d: 0.75,
      minX: 1,
      maxX: 2
    }]);
  });

  it('should interpolate 4 coords', function () {
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
      b: 2.774193548387097,
      c: 0,
      d: -0.7741935483870969,
      minX: 0,
      maxX: 1
    }, {
      a: 3,
      b: 0.4516129032258067,
      c: -2.3225806451612905,
      d: 0.870967741935484,
      minX: 1,
      maxX: 2
    }, {
      a: 2,
      b: -1.5806451612903225,
      c: 0.2903225806451613,
      d: -0.03225806451612903,
      minX: 2,
      maxX: 5
    }]);
  });

});