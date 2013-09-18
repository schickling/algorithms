'use strict';

describe('Service: newtonMethod', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var newtonMethod;
  beforeEach(inject(function (NewtonMethod) {
    newtonMethod = NewtonMethod;
  }));

  it('should do something', function () {
    expect( !! newtonMethod).toBe(true);
  });

});