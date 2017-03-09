'use strict';

/**
 * @ngdoc overview
 * @name ngAppApp
 * @description
 * # ngAppApp
 *
 * Main module of the application.
 */
angular
  .module('ngAppApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
