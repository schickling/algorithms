'use strict';

describe('Service: helpers', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var helpers;
  beforeEach(inject(function (Helpers) {
    helpers = Helpers;
  }));

  it('should extend Number class with sign', function () {
    expect((-5).sign()).toBe(-1);
    expect((5).sign()).toBe(1);
    expect((0).sign()).toBe(0);
  });

});
