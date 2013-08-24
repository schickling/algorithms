'use strict';

angular.module('algorithmsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/extended-euclidean-algorithm', {
        templateUrl: 'views/extended-euclidean-algorithm.html',
        controller: 'extendedEuclideanAlgorithm/MainCtrl'
      })
      .when('/chinese-remainder-theorem', {
        templateUrl: 'views/chinese-remainder-theorem.html',
        controller: 'chineseRemainderTheorem/MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
