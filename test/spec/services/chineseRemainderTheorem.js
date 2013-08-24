'use strict';

describe('Service: chineseRemainderTheorem', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var chineseRemainderTheorem;
  beforeEach(inject(function (ChineseRemainderTheorem) {
    chineseRemainderTheorem = ChineseRemainderTheorem;
  }));

  it('should return false if #A != #M', function () {
    var A = [1],
      M = [1, 2],
      x = chineseRemainderTheorem.calculate(A, M);

    expect(x).toBe(false);
  });

  it('should calculate x = 47', function () {
    var A = [2, 3, 2],
      M = [3, 4, 5],
      x = chineseRemainderTheorem.calculate(A, M);

    expect(x).toBe(47);
  });

  it('should calculate x = 11', function () {
    var A = [2, 3, 1],
      M = [3, 4, 5],
      x = chineseRemainderTheorem.calculate(A, M);

    expect(x).toBe(11);
  });

});