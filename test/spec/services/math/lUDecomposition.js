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
    var result = lUDecomposition.calculate([[1, 2, 1], [2, 2, 3], [3, 5, 4]], [4, 2, 5], false),
      expectedX = [14, -1, -8],
      expectedY = [4, -6, -4],
      expectedP = [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
      expectedL = [[1, 0, 0], [2, 1, 0], [3, 0.5, 1]],
      expectedU = [[1, 2, 1], [0, -2, 1], [0, 0, 0.5]];

    expect(result.x).toEqual(expectedX);
    expect(result.y).toEqual(expectedY);
    expect(result.P).toEqual(expectedP);
    expect(result.L).toEqual(expectedL);
    expect(result.U).toEqual(expectedU);
  });

  it('should do decomposite 3*3 matrix with pivoting', function () {
    var result = lUDecomposition.calculate([[-1, 2, 3], [-2, 7, 4], [1, 4, -2]], [1, 2, 3], true),
      expectedX = [2.466666666666667, 0.5333333333333333, 0.8],
      expectedY = [2, 4, 0.8],
      expectedP = [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
      expectedL = [[1, 0, 0], [-0.5, 1, 0], [0.5, -0.2, 1]],
      expectedU = [[-2, 7, 4], [0, 7.5, 0], [0, 0, 1]];

    expect(result.x).toEqual(expectedX);
    expect(result.y).toEqual(expectedY);
    expect(result.P).toEqual(expectedP);
    expect(result.L).toEqual(expectedL);
    expect(result.U).toEqual(expectedU);
  });

});