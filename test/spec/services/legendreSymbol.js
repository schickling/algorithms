'use strict';

describe('Service: legendreSymbol', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var legendreSymbol;
  beforeEach(inject(function (LegendreSymbol) {
    legendreSymbol = LegendreSymbol;
  }));

  it('should do something', function () {
    expect( !! legendreSymbol).toBe(true);
  });

});