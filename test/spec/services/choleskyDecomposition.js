'use strict';

describe('Service: choleskyDecomposition', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var choleskyDecomposition;
  beforeEach(inject(function (CholeskyDecomposition) {
    choleskyDecomposition = CholeskyDecomposition;
  }));

  it('should decomposite 3*3 matrix', function () {
    var result = choleskyDecomposition.calculate([[4, 2, 2], [2, 17, 5], [2, 5, 11]]),
      expectedL = [[2, 0, 0], [1, 4, 0], [1, 1, 3]],
      expectedLT = [[2, 1, 1], [0, 4, 1], [0, 0, 3]];

    expect(result.L).toEqual(expectedL);
    expect(result.LT).toEqual(expectedLT);
  });

  it('shouldn\'t decomposite non symetric 3*3 matrix', function () {
    expect(choleskyDecomposition.calculate([[4, 2, 2], [1, 17, 5], [2, 5, 11]])).toBe(false);
  });

  it('shouldn\'t decomposite non positive definite 3*3 matrix', function () {
    expect(choleskyDecomposition.calculate([[-1, 2, 2], [2, 17, 5], [2, 5, 11]])).toBe(false);
  });

  it('shouldn\'t decomposite non positive definite 3*3 matrix', function () {
    expect(choleskyDecomposition.calculate([[0, 2, 2], [2, 17, 5], [2, 5, 11]])).toBe(false);
  });

  it('shouldn\'t decomposite non positive definite 2*2 matrix', function () {
    expect(choleskyDecomposition.calculate([[2, 4], [4, 1]])).toBe(false);
  });

});