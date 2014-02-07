'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main-en.html',
        controller: 'MainCtrl'
      })
      .when('/it/', {
        templateUrl: 'views/main-it.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

