'use strict';

describe('Service: linearRegression', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var linearRegression;
  beforeEach(inject(function (LinearRegression) {
    linearRegression = LinearRegression;
  }));

  it('should fit', function () {
    expect(linearRegression.calculate([{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }])).toEqual({
      m: 1,
      t: 0
    });
  });

});