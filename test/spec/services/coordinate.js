'use strict';

describe('Service: coordinate', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var coordinate;
  beforeEach(inject(function (_coordinate_) {
    coordinate = _coordinate_;
  }));

  it('should do something', function () {
    expect(!!coordinate).toBe(true);
  });

});
