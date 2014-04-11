// console.log("test");
var app = angular.module('routing', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      title:'Home',
      templateUrl: 'app/tpl/index.html',
      controller: 'indexCtrl'
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
});

