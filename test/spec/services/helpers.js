'use strict';

describe('Service: helpers', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var helpers;
  beforeEach(inject(function (Helpers) {
    helpers = Helpers;
  }));

  it('should do something', function () {
    expect(!!helpers).toBe(true);
  });

});
