'use strict';

describe('Controller: lUDecomposition', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var Controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('lUDecomposition', {
      $scope: scope
    });
  }));
  
});
