'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'mgcrea.ngStrap',
  'firebase'
])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/en', {
        templateUrl: 'views/en-main.html',
        controller: 'MainCtrl',
      })
      .when('/en/PreservationTibetanCulture', {
        templateUrl: 'views/en-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
      })
      .when('/en/LungtaTradition', {
        templateUrl: 'views/en-LungtaTradition.html',
        controller: 'MainCtrl',
      })
      .when('/en/Contacts', {
        templateUrl: 'views/en-Contacts.html',
        controller: 'MainCtrl',
      })
      .when('/en/tks', {
        templateUrl: 'views/en-Tks.html',
        controller: 'MainCtrl',
      })

      .when('/it', {
        templateUrl: 'views/it-main.html',
        controller: 'MainCtrl',
      })
      .when('/it/PreservationTibetanCulture', {
        templateUrl: 'views/it-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
      })
      .when('/it/LungtaTradition', {
        templateUrl: 'views/it-LungtaTradition.html',
        controller: 'MainCtrl',
      })
      .when('/it/Contacts', {
        templateUrl: 'views/it-Contacts.html',
        controller: 'MainCtrl',
      })
      .when('/it/tks', {
        templateUrl: 'views/it-Tks.html',
        controller: 'MainCtrl',
      })


      .when('/ru', {
        templateUrl: 'views/ru-main.html',
        controller: 'MainCtrl',
      })
      .when('/ru/PreservationTibetanCulture', {
        templateUrl: 'views/ru-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
      })
      .when('/ru/LungtaTradition', {
        templateUrl: 'views/ru-LungtaTradition.html',
        controller: 'MainCtrl',
      })
      .when('/ru/Contacts', {
        templateUrl: 'views/ru-Contacts.html',
        controller: 'MainCtrl',
      })
      .when('/ru/tks', {
        templateUrl: 'views/ru-Tks.html',
        controller: 'MainCtrl',
      })


      .when('/myA', {
        templateUrl: 'views/a.html',
        controller: 'MainCtrl',
      })
      

      .otherwise({
        redirectTo: '/en'
      });
  }]);

