'use strict';

describe('Controller: PrimeNumberTest', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var Controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('PrimeNumberTest', {
      $scope: scope
    });
  }));

});