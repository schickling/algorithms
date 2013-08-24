'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (Utils) {
    utils = Utils;
  }));

  it('should generate number between -50 and 333', function () {
    var random = utils.randomNumber(-50, 333);
    expect(random).toBeGreaterThan(-51);
    expect(random).toBeLessThan(334);
  });

});
