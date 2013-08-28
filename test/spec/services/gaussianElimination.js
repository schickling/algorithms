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

});
