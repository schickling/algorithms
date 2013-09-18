'use strict';

describe('Service: curveFitting', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var curveFitting;
  beforeEach(inject(function (CurveFitting) {
    curveFitting = CurveFitting;
  }));

  it('should fit', function () {
    expect(curveFitting.calculate([{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }])).toEqual({
      m: 1,
      t: 0
    });
  });

});