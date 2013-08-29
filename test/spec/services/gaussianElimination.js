'use strict';

describe('Service: gaussianElimination', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var gaussianElimination;
  beforeEach(inject(function (GaussianElimination) {
    gaussianElimination = GaussianElimination;
  }));

  it('should eliminate 1*1 matrix', function () {
    var input = [[0]],
        expectedOutput = [[0]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 1*1 matrix', function () {
    var input = [[2]],
        expectedOutput = [[1]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 2*1 matrix', function () {
    var input = [[2],[4]],
        expectedOutput = [[1],[0]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 1*2 matrix', function () {
    var input = [[2,4]],
        expectedOutput = [[1,2]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 2*2 matrix', function () {
    var input = [[1,2],[3,4]],
        expectedOutput = [[1,0],[0,1]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 2*2 matrix', function () {
    var input = [[0,0],[99,0]],
        expectedOutput = [[1,0],[0,0]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 3*3 matrix', function () {
    var input = [[1,0,0],[0,1,0],[0,0,1]],
        expectedOutput = [[1,0,0],[0,1,0],[0,0,1]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 3*3 matrix', function () {
    var input = [[1,1,1],[1,1,1],[7,8,9]],
        expectedOutput = [[1,0,-1],[0,1,2],[0,0,0]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should eliminate 3*3 matrix', function () {
    var input = [[1,2,3],[4,5,6],[7,8,9]],
        expectedOutput = [[1,0,-1],[0,1,2],[0,0,0]];
    expect(gaussianElimination.eliminate(input)).toEqual(expectedOutput);
  });

  it('should invert 1*1 matrix', function () {
    var input = [[1]],
        expectedOutput = [[1]];
    expect(gaussianElimination.invert(input)).toEqual(expectedOutput);
  });

  it('should invert 2*2 matrix', function () {
    var input = [[1,0],[0,1]],
        expectedOutput = [[1,0],[0,1]];
    expect(gaussianElimination.invert(input)).toEqual(expectedOutput);
  });

  it('should invert 2*2 matrix', function () {
    var input = [[1,2],[1,4]],
        expectedOutput = [[2,-1],[-0.5,0.5]];
    expect(gaussianElimination.invert(input)).toEqual(expectedOutput);
  });

  it('should invert 3*3 matrix', function () {
    var input = [[0,-1,0],[0,0,-1],[4,0,2]],
        expectedOutput = [[0,0.5,0.25],[-1,0,0],[0,-1,0]];
    expect(gaussianElimination.invert(input)).toEqual(expectedOutput);
  });

  it('shouldn\'t invert non regular 2*2 matrix', function () {
    var input = [[1,1],[1,1]],
        expectedOutput = false;
    expect(gaussianElimination.invert(input)).toEqual(expectedOutput);
  });

});
