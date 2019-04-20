var app = angular.module('erp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/error");
    $stateProvider
    .state('home',
        {
            url : '/home',
            templateUrl : 'views/home.html'
            // controller : 'homeController'
        }
    )
    .state('about',
        {
            url : '/about',
            templateUrl : 'views/about.html'
        }
    )
    .state('services',
        {
            url : '/services',
            templateUrl : 'views/services.html'
        }
    )
    .state('careers',
        {
            url : '/careers',
            templateUrl : 'views/services.html'
        }
    )
    .state('error',
        {
            url : '/error',
            templateUrl : 'views/error.html'
        }
    )
})