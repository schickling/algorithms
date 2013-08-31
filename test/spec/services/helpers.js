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

  it('should extend Number prototype with primeFactors', function () {
    expect((20).primeFactors()).toEqual([2, 2, 5]);
    expect((40).primeFactors()).toEqual([2, 2, 2, 5]);
    expect((115249).primeFactors()).toEqual([115249]);
  });

  it('should extend Number prototype with isSquare', function () {
    expect((2).isSquare()).toEqual(false);
    expect((4).isSquare()).toEqual(true);
    expect((8).isSquare()).toEqual(false);
  });

});