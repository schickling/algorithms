'use strict';

describe('Controller: chineseRemainderTheorem/MainCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('chineseRemainderTheorem/MainCtrl', {
      $scope: scope
    });
  }));

});
