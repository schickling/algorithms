'use strict';

describe('Controller: Determinant', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var Controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('Determinant', {
      $scope: scope
    });
  }));

});
