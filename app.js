var app = angular.module('mean-app', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.label = "Password";
    $rootScope.brand = "Angularjs App";
    $rootScope.navItems = ['Exemplo', 'Exemplo 2', 'Exemplo 3'];
    $rootScope.onNavbarClick = function (item) {
        console.log(item);
    }
});