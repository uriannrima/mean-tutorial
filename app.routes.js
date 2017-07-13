// Injetar route e location provider na função abaixo.
routes.$inject = ['$routeProvider', '$locationProvider'];

export default function routes($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        // templateUrl: './sections/home/home.template.html',
        // Require será processado pelo Webpack.
        // Webpack ira tentar requisitar HTML e este HTML tera de ser processado por um loader.
        template: require('./sections/home/home.template.html'),
        controller: 'HomeController as Home'
    }).when('/todos', {
        // templateUrl: './sections/todos/todos.template.html',
        template: require('./sections/todos/todos.template.html'),
        controller: 'TodosController as Todos'
    }).otherwise({
        redirectTo: '/'
    });

    // $locationProvider.html5Mode(true);
}