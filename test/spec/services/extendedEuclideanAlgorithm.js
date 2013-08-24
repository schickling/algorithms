'use strict';

describe('Service: extendedEuclideanAlgorithm', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var extendedEuclideanAlgorithm;
  beforeEach(inject(function (ExtendedEuclideanAlgorithm) {
    extendedEuclideanAlgorithm = ExtendedEuclideanAlgorithm;
  }));

  it('should return false if b > a', function() {
    var result = extendedEuclideanAlgorithm.calculate(1, 2);
    expect(result).toBe(false);
  });

  it('should calc results for a = 1, b = 1', function () {
    var result = extendedEuclideanAlgorithm.calculate(1, 1);
    expect(result.gcd).toBe(1);
    expect(result.x).toBe(0);
    expect(result.y).toBe(1);
    expect(result.steps).toEqual([{
      remainder: 1,
      combinationA: 1,
      combinationB: 0
    }, {
      remainder: 1,
      combinationA: 0,
      combinationB: 1
    }]);
  });

  it('should calc results for a = 6, b = 3', function () {
    var result = extendedEuclideanAlgorithm.calculate(6, 3);
    expect(result.gcd).toBe(3);
    expect(result.x).toBe(0);
    expect(result.y).toBe(1);
    expect(result.steps).toEqual([{
      remainder: 6,
      combinationA: 1,
      combinationB: 0
    }, {
      remainder: 3,
      combinationA: 0,
      combinationB: 1
    }]);
  });

  it('should calc results for a = 120, b = 23', function () {
    var result = extendedEuclideanAlgorithm.calculate(120, 23);
    expect(result.gcd).toBe(1);
    expect(result.x).toBe(-9);
    expect(result.y).toBe(47);
    expect(result.steps).toEqual([{
      remainder: 120,
      combinationA: 1,
      combinationB: 0
    }, {
      remainder: 23,
      combinationA: 0,
      combinationB: 1
    }, {
      quotient: 5,
      remainder: 5,
      combinationA: 1,
      combinationB: -5
    }, {
      quotient: 4,
      remainder: 3,
      combinationA: -4,
      combinationB: 21
    }, {
      quotient: 1,
      remainder: 2,
      combinationA: 5,
      combinationB: -26
    }, {
      quotient: 1,
      remainder: 1,
      combinationA: -9,
      combinationB: 47
    }]);
  });

});