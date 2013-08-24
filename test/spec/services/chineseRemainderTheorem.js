'use strict';

describe('Service: chineseRemainderTheorem', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var chineseRemainderTheorem;
  beforeEach(inject(function (ChineseRemainderTheorem) {
    chineseRemainderTheorem = ChineseRemainderTheorem;
  }));

  it('should return false if #aVector != #mVector', function () {
    var aVector = [1],
      mVector = [1, 2],
      x = chineseRemainderTheorem.calculate(aVector, mVector);

    expect(x).toBe(false);
  });

  it('should calculate x = 47', function () {
    var aVector = [2, 3, 2],
      mVector = [3, 4, 5],
      x = chineseRemainderTheorem.calculate(aVector, mVector);

    expect(x).toBe(47);
  });

  it('should calculate x = 11', function () {
    var aVector = [2, 3, 1],
      mVector = [3, 4, 5],
      x = chineseRemainderTheorem.calculate(aVector, mVector);

    expect(x).toBe(11);
  });

});