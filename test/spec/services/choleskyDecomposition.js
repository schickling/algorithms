'use strict';

describe('Service: choleskyDecomposition', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var choleskyDecomposition;
  beforeEach(inject(function (CholeskyDecomposition) {
    choleskyDecomposition = CholeskyDecomposition;
  }));

  it('should do something', function () {
    expect( !! choleskyDecomposition).toBe(true);
  });

});