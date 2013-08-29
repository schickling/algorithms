'use strict';

describe('Service: SmithNormalForm', function () {

  // load the service's module
  beforeEach(module('algorithmsApp'));

  // instantiate service
  var smithNormalForm;
  beforeEach(inject(function (SmithNormalForm) {
    smithNormalForm = SmithNormalForm;
  }));

  it('should do', function () {
    var A = [[2, 4, 4], [-6, 6, 12], [10, -4, -16]],
      elementaryDivisors = [2, 6, 12],
      result = smithNormalForm.calculate(A);

    expect(result.elementaryDivisors).toEqual(elementaryDivisors);
  });

});