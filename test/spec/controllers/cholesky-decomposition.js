'use strict';

describe('Controller: CholeskyDecompositionCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var CholeskyDecompositionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CholeskyDecompositionCtrl = $controller('CholeskyDecompositionCtrl', {
      $scope: scope
    });
  }));

});
