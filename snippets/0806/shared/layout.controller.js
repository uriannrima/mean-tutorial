angular.module('mean-app').controller('LayoutController', function () {
    var vm = this;
    vm.navbarItems = [
        {
            label: "Home",
            link: "/"
        }, {
            label: "Todos",
            link: "/todos"
        }
    ];
});