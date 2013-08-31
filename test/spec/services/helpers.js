'use strict';

describe('Service: helpers', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var helpers;
  beforeEach(inject(function (Helpers) {
    helpers = Helpers;
  }));

  it('should extend Number prototype with sign', function () {
    expect((-5).sign()).toBe(-1);
    expect((5).sign()).toBe(1);
    expect((0).sign()).toBe(0);
  });

  it('should extend Number prototype with isPrime', function () {
    expect((-5).isPrime()).toBe(false);
    expect((2).isPrime()).toBe(true);
    expect((3).isPrime()).toBe(true);
    expect((4).isPrime()).toBe(false);
    expect((5).isPrime()).toBe(true);
    expect((6).isPrime()).toBe(false);
    expect((3571).isPrime()).toBe(true);
    expect((115249).isPrime()).toBe(true);
    expect((115251).isPrime()).toBe(false);
  });

});