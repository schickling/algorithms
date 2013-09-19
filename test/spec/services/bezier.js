'use strict';

describe('Service: bezier', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var bezier;
  beforeEach(inject(function (Bezier) {
    bezier = Bezier;
  }));

  it('should calculate for two points', function () {
    expect(bezier.calculate([{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }], 1)).toEqual({
      x: 1,
      y: 1
    });
  });

  it('should calculate for two points', function () {
    expect(bezier.calculate([{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }], 0)).toEqual({
      x: 0,
      y: 0
    });
  });

});