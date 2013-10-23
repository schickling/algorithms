'use strict';

describe('Service: leibnizDeterminant', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var leibnizDeterminant;
  beforeEach(inject(function (LeibnizDeterminant) {
    leibnizDeterminant = LeibnizDeterminant;
  }));

  it('should calulate determinat of 1*1 matrix', function () {
    expect(leibnizDeterminant.calculate([[1]])).toBe(1);
  });

  it('should calulate determinat of 1*1 matrix', function () {
    expect(leibnizDeterminant.calculate([[8]])).toBe(8);
  });

  it('should calulate determinat of 2*2 matrix', function () {
    expect(leibnizDeterminant.calculate([[1, 0], [0, 1]])).toBe(1);
  });

  it('should calulate determinat of 2*2 matrix', function () {
    expect(leibnizDeterminant.calculate([[1, 1], [1, 1]])).toBe(0);
  });

  it('should calulate determinat of 2*2 matrix', function () {
    expect(leibnizDeterminant.calculate([[2, 1], [1, 1]])).toBe(1);
  });

  it('should calulate determinat of 2*2 matrix', function () {
    expect(leibnizDeterminant.calculate([[3, 1], [1, 1]])).toBe(2);
  });

  it('should calulate determinat of 5*5 matrix', function () {
    expect(leibnizDeterminant.calculate([[1, 0, 0, 0, 0], [0, 2, 0, 0, 0], [0, 0, 3, 0, 0], [0, 0, 0, 4, 0], [0, 0, 0, 0, 5]])).toBe(120);
  });

});