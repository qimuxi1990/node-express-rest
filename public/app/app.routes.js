'use strict';

var app = angular.module('restApp', ['ngRoute', 'modules']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/components/home/homeView.html'
    })
    .when('/test', {
      templateUrl: 'app/components/test/testView.html'
    })
    .when('/api', {
      templateUrl: 'app/components/api/apiView.html'
    }).
  otherwise({
    redirectTo: '/home'
  });
});