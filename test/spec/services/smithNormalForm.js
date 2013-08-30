'use strict';

describe('Service: SmithNormalForm', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var smithNormalForm;
  beforeEach(inject(function (SmithNormalForm) {
    smithNormalForm = SmithNormalForm;
  }));

  it('should normalize 2*2 matrix', function () {
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

  it('should normalize 1st 3*3 matrix', function () {
    var A = [[2, 4, 4], [-6, 6, 12], [10, -4, -16]],
      elementaryDivisors = [2, 6, 12],
      B = [[2, 0, 0], [0, 6, 0], [0, 0, 12]],
      S = [[1, 0, 0], [2, -1, -1], [3, -4, -3]],
      T = [[1, -2, 2], [0, 0, 1], [0, 1, -2]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

  it('should normalize 2nd 3*3 matrix', function () {
    var A = [[1, 2, 3], [-2, 2, 4], [0, 4, 6]],
      elementaryDivisors = [1, 2, 2],
      B = [[1, 0, 0], [0, 2, 0], [0, 0, -2]],
      S = [[1, 0, 0], [2, 1, -1], [-4, -2, 3]],
      T = [[1, -2, 1], [0, 1, -2], [0, 0, 1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

  it('should normalize 3rd 3*3 matrix', function () {
    var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      elementaryDivisors = [1, 3],
      B = [[1, 0, 0], [0, 3, 0], [0, 0, 0]],
      S = [[1, 0, 0], [4, -1, 0], [-1, 2, -1]],
      T = [[1, -2, 1], [0, 1, -2], [0, 0, 1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

  it('should normalize 4th 3*3 matrix that zero blocks are at end', function () {
    var A = [[2, 2, 2], [2, 2, 2], [2, 2, 4]],
      elementaryDivisors = [2],
      B = [[2, 0, 0], [0, 0, 0], [0, 0, 0]],
      S = [[-1, 0, 1], [-1, 1, 0], [-1, 1, 0]],
      T = [[1, 0, -1], [0, 1, -1], [0, 1, -1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

  it('should normalize 5th 3*3 matrix', function () {
    var A = [[4, 0, 0], [0, 10, 0], [0, 0, 15]],
      elementaryDivisors = [1, 10, 60],
      // B = [[1, 0, 0], [0, 3, 0], [0, 0, 0]],
      // S = [[1, 0, 0], [4, -1, 0], [-1, 2, -1]],
      // T = [[1, -2, 1], [0, 1, -2], [0, 0, 1]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    // expect(result.B).toEqual(B);
    // expect(result.S).toEqual(S);
    // expect(result.T).toEqual(T);
  });

  it('should normalize 3*3 matrix after reordering', function () {
    var A = [[7, 9, 8], [6, 1, 5], [3, 0, 2]],
      elementaryDivisors = [1, 1, 17],
      B = [[1, 0, 0], [0, 1, 0], [0, 0, 17]],
      S = [[0, 1, 0], [-1, 9, -18], [2, -18, 37]],
      T = [[0, 0, 1], [0, 1, 7], [1, -5, -41]],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
    expect(result.B).toEqual(B);
    expect(result.S).toEqual(S);
    expect(result.T).toEqual(T);
  });

});