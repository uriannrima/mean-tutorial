angular.module('mean-app', ['ngRoute']);
angular.module('mean-app').config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: './sections/home/home.template.html',
        controller: 'HomeController as Home'
    }).when('/todos', {
        templateUrl: './sections/todos/todos.template.html',
        controller: 'TodosController as Todos'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});