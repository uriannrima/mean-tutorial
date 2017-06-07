angular.module('mean-app').component('meanNavbar', {
    templateUrl: './components/navbar.component.html',
    // Inject here
    controller: function () {
        var ctrl = this;
        ctrl.in = false;

        ctrl.toggle = function () {
            ctrl.in = !ctrl.in;
        }
        ctrl.itemClick = function (navItem) {
            ctrl.toggle();
            ctrl.onItemClick({ item: navItem });
        }
    },
    bindings: {
        brand: '@',
        navItems: '<',
        onItemClick: '&'
    }
});