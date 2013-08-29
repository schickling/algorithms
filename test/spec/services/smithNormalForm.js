'use strict';

describe('Service: SmithNormalForm', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var smithNormalForm;
  beforeEach(inject(function (SmithNormalForm) {
    smithNormalForm = SmithNormalForm;
  }));

  it('should normalize 3*3 matrix', function () {
    var A = [[18, 24], [-24, -36]],
      elementaryDivisors = [6, 12],
      B = [[6, 0], [0, -12]],
      S = [[-1, -1], [4, 3]],
      T = [[1, -2], [0, 1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

  it('should normalize 3*3 matrix', function () {
    var A = [[2, 4, 4], [-6, 6, 12], [10, -4, -16]],
      elementaryDivisors = [2, 6, 12],
      B = [[2, 0, 0], [0, 6, 0], [0, 0, -12]],
      S = [[1, 0, 0], [2, -1, -1], [-3, 4, 3]],
      T = [[1, -2, 2], [0, 1, -2], [0, 0, 1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

});