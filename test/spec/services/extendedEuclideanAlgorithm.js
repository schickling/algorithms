'use strict';

describe('Service: extendedEuclideanAlgorithm', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var extendedEuclideanAlgorithm;
  beforeEach(inject(function (ExtendedEuclideanAlgorithm) {
    extendedEuclideanAlgorithm = ExtendedEuclideanAlgorithm;
  }));

  it('should calc results for a = 1, b = 1', function () {
    var result = extendedEuclideanAlgorithm.calculate(1, 1);
    expect(result.gcd).toBe(1);
    expect(result.lcm).toBe(1);
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

  it('should calc results for a = 2, b = -4', function () {
    var result = extendedEuclideanAlgorithm.calculate(2, -4);
    expect(result.gcd).toBe(2);
    expect(result.lcm).toBe(4);
    expect(result.x).toBe(1);
    expect(result.y).toBe(0);
    expect(result.steps).toEqual([{
      remainder: 2,
      combinationA: 1,
      combinationB: 0
    }, {
      remainder: 4,
      combinationA: 0,
      combinationB: -1
    }, {
      quotient: 0,
      remainder: 2,
      combinationA: 1,
      combinationB: 0
    }]);
  });

  it('should calc results for a = 6, b = 3', function () {
    var result = extendedEuclideanAlgorithm.calculate(6, 3);
    expect(result.gcd).toBe(3);
    expect(result.lcm).toBe(6);
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
    expect(result.lcm).toBe(2760);
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



  it('should calc results for a = 23, b = 120', function () {
    var result = extendedEuclideanAlgorithm.calculate(23, 120);
    expect(result.gcd).toBe(1);
    expect(result.lcm).toBe(2760);
    expect(result.x).toBe(47);
    expect(result.y).toBe(-9);
    expect(result.steps).toEqual([{
      remainder: 23,
      combinationA: 1,
      combinationB: 0
    }, {
      remainder: 120,
      combinationA: 0,
      combinationB: 1
    }, {
      quotient: 0,
      remainder: 23,
      combinationA: 1,
      combinationB: 0
    }, {
      quotient: 5,
      remainder: 5,
      combinationA: -5,
      combinationB: 1
    }, {
      quotient: 4,
      remainder: 3,
      combinationA: 21,
      combinationB: -4
    }, {
      quotient: 1,
      remainder: 2,
      combinationA: -26,
      combinationB: 5
    }, {
      quotient: 1,
      remainder: 1,
      combinationA: 47,
      combinationB: -9
    }]);
  });

});