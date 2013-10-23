'use strict';

describe('Controller: LinearRegressionCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var LinearRegressionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinearRegressionCtrl = $controller('LinearRegressionCtrl', {
      $scope: scope
    });
  }));

});
