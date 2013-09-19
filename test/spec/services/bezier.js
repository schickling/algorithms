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
    expect( !! bezier).toBe(true);
  });

});