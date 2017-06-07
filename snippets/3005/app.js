// Sem sujar o Global Namespace do Javascript
angular.module('mean-app', []);

angular.module('mean-app').controller('homeController', function (logService, userService) {

    var user = userService.getUserById(2);
    console.log(user.getFullName());

    this.navItems = [
        { label: 'Home', link: '/home' },
        { label: 'Characters', link: '/home' },
        { label: 'About me', link: '/about' }
    ];

    this.onNavbarClick = function (item) {
        console.log(item);
    }

    logService.log('Home Controller Loaded.');
});