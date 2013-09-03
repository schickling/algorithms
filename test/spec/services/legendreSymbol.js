'use strict';

describe('Service: legendreSymbol', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var legendreSymbol;
  beforeEach(inject(function (LegendreSymbol) {
    legendreSymbol = LegendreSymbol;
  }));

  it('should calculate(3, 29)', function () {
    expect(legendreSymbol.calculate(3, 29)).toBe(-1);
  });

  it('should calculate(111, 41)', function () {
    expect(legendreSymbol.calculate(111, 41)).toBe(-1);
  });

  it('should calculate(113, 41)', function () {
    expect(legendreSymbol.calculate(113, 41)).toBe(1);
  });

  it('should calculate(2, 31)', function () {
    expect(legendreSymbol.calculate(2, 31)).toBe(1);
  });

  it('should calculate(5, 31)', function () {
    expect(legendreSymbol.calculate(5, 31)).toBe(1);
  });

  it('should calculate(150, 1009)', function () {
    expect(legendreSymbol.calculate(150, 1009)).toBe(1);
  });

  it('should calculate(25, 1009)', function () {
    expect(legendreSymbol.calculate(25, 1009)).toBe(1);
  });

  it('should calculate(2, 1009)', function () {
    expect(legendreSymbol.calculate(2, 1009)).toBe(1);
  });

  it('should calculate(3, 1009)', function () {
    expect(legendreSymbol.calculate(3, 1009)).toBe(1);
  });

});