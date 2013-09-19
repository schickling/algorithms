'use strict';

describe('Service: bezier', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var bezier;
  beforeEach(inject(function (Bezier) {
    bezier = Bezier;
  }));

  it('should do something', function () {
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

});