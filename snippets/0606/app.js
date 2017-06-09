// [] => Array de dependencias
// <ng-view></ng-view>
var app = angular.module('mean-app', ['ngRoute']);

app.run(function ($rootScope) {
    $rootScope.label = "Password";
    $rootScope.brand = "Angularjs App";
    $rootScope.navItems = [
        { label: 'Home', link: '/' },
        { label: 'Todos', link: '/todos' },
        { label: 'Categories', link: '/categories' }
    ];
    $rootScope.param = "ok";
    $rootScope.onNavbarClick = function (item) {
        console.log(item);
    }
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: './sections/home/home.template.html',
        controller: 'HomeController as home'
    }).when('/todos', {
        templateUrl: './sections/todos/todos.template.html',
        controller: 'TodosController as todos'
    }).when('/categories', {
        template: '<h1>Categories</h1>',
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});