'use strict';

describe('Service: primeNumberGenerator', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var primeNumberGenerator;
  beforeEach(inject(function (PrimeNumberGenerator) {
    primeNumberGenerator = PrimeNumberGenerator;
  }));

  it('should return 5 primeNumbers with primorial calculation', function () {
    expect(primeNumberGenerator.primorial(5)).toEqual([2, 3, 5, 29, 869]);
  });

});