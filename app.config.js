app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: './sections/home/home.template.html',
        controller: 'HomeController as home'
    }).when('/categories', {
        templateUrl: './sections/categories/categories.template.html',
        controller: 'CategoriesController as categories'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});