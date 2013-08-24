'use strict';

angular.module('algorithmsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/extended-euclidean-algorithm', {
        templateUrl: 'views/extendedEuclideanAlgorithm.html',
        controller: 'extendedEuclideanAlgorithm'
      })
      .when('/chinese-remainder-theorem', {
        templateUrl: 'views/chineseRemainderTheorem.html',
        controller: 'chineseRemainderTheorem'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
