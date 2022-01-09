angular.module('marvelApp').config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'view/heroes.html'
    })
    .when('/heroDetail/:id',{
        templateUrl:'view/heroDetail.html'
    })
    .otherwise({redirectTo:'/heroes'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
})