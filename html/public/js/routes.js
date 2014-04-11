// console.log("test");
var app = angular.module('routing', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      title:'Home',
      templateUrl: 'app/tpl/index.html',
      controller: 'indexCtrl'
    }).when('/about',{
      title:'About',
      templateUrl: 'app/tpl/about.html',
      controller: 'aboutCtrl'
    });


    $routeProvider.otherwise({
      redirectTo:'/'
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
});

