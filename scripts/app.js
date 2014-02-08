'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'mgcrea.ngStrap'
])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/en-main.html',
        controller: 'MainCtrl',
        lang_sel:'en'
      })
      .when('/en/PreservationTibetanCulture/', {
        templateUrl: 'views/en-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
        lang_sel:'en'
      })
      .when('/en/LungtaTradition/', {
        templateUrl: 'views/en-LungtaTradition.html',
        controller: 'MainCtrl',
        lang_sel:'en'
      })
      .when('/en/Contacts/', {
        templateUrl: 'views/en-Contacts.html',
        controller: 'MainCtrl',
        lang_sel:'en'
      })

      .when('/it/', {
        templateUrl: 'views/it-main.html',
        controller: 'MainCtrl',
        lang_sel:'it'
      })
      .when('/it/PreservationTibetanCulture/', {
        templateUrl: 'views/it-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
        lang_sel:'it'
      })
      .when('/it/LungtaTradition/', {
        templateUrl: 'views/it-LungtaTradition.html',
        controller: 'MainCtrl',
        lang_sel:'it'
      })
      .when('/it/Contacts/', {
        templateUrl: 'views/it-Contacts.html',
        controller: 'MainCtrl',
        lang_sel:'it'
      })

      .when('/ru/', {
        templateUrl: 'views/ru-main.html',
        controller: 'MainCtrl',
        lang_sel:'ru'
      })
      .when('/ru/PreservationTibetanCulture/', {
        templateUrl: 'views/ru-PreservationTibetanCulture.html',
        controller: 'MainCtrl',
        lang_sel:'ru'
      })
      .when('/ru/LungtaTradition/', {
        templateUrl: 'views/ru-LungtaTradition.html',
        controller: 'MainCtrl',
        lang_sel:'ru'
      })
      .when('/ru/Contacts/', {
        templateUrl: 'views/ru-Contacts.html',
        controller: 'MainCtrl',
        lang_sel:'ru'
      })


      .otherwise({
        redirectTo: '/'
      });
  }]);

