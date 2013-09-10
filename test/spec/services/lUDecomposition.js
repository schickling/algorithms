'use strict';

describe('Service: lUDecomposition', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var lUDecomposition;
  beforeEach(inject(function (_lUDecomposition_) {
    lUDecomposition = _lUDecomposition_;
  }));

  it('should do something', function () {
    expect(!!lUDecomposition).toBe(true);
  });

});
