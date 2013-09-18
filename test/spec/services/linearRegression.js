'use strict';

describe('Service: linearRegression', function() {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var linearRegression;
  beforeEach(inject(function(LinearRegression) {
    linearRegression = LinearRegression;
  }));

  it('should calculate m = 1, t = 0 ', function() {
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

  it('should calculate a more complex example', function() {
    var inputArray = [{
      x: 1,
      y: 2
    }, {
      x: 2,
      y: 8
    }, {
      x: 3,
      y: 16
    }, {
      x: 4,
      y: 6
    }, {
      x: 5,
      y: 6
    }];

    expect(linearRegression.calculate(inputArray))
      .toEqual({
	m: 0.6,
	t: 5.8
      });
  });

});