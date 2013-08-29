'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (Utils) {
    utils = Utils;
  }));

  it('should generate number between -50 and 333', function () {
    var random = utils.randomNumber(-50, 333);
    expect(random).toBeGreaterThan(-51);
    expect(random).toBeLessThan(334);
  });

  it('should generate the identity matrix for n = 3', function () {
    var expectedMatrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    expect(utils.identityMatrix(3)).toEqual(expectedMatrix);
  });

  it('should generate the identity matrix for n = 5', function () {
    var expectedMatrix = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    expect(utils.identityMatrix(5)).toEqual(expectedMatrix);
  });

  it('shoud multiply two matrices', function () {
    var A = [[-1, -1], [4, 3]],
      B = [[18, 24], [-24, -36]],
      C = [[6, 12], [0, -12]];
    expect(utils.matrixMultiply(A, B)).toEqual(C);
  });

  it('should transpose matrix', function () {
    var A = [[1, 2, 3], [4, 5, 6]],
      B = [[1, 4], [2, 5], [3, 6]];
    expect(utils.matrixTranspose(A)).toEqual(B);
  });

});