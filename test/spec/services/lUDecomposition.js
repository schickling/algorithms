'use strict';

describe('Service: lUDecomposition', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var lUDecomposition;
  beforeEach(inject(function (LUDecomposition) {
    lUDecomposition = LUDecomposition;
  }));

  it('should do decomposite 3*3 matrix without pivoting', function () {
    var result = lUDecomposition.calculate([[1, 2, 1], [2, 2, 3], [3, 5, 4]]),
      expectedX = [1],
      expectedY = [1],
      expectedP = [[1]],
      expectedL = [[1, 0, 0], [-2, 1, 0], [-3, -0.5, 1]],
      expectedU = [[1, 2, 1], [0, -2, 1], [0, 0, 0.5]];

    // expect(result.x).toEqual(expectedX);
    // expect(result.y).toEqual(expectedY);
    // expect(result.P).toEqual(expectedP);
    expect(result.L).toEqual(expectedL);
    expect(result.U).toEqual(expectedU);
  });

});