angular.module('mean-app').factory('userService', function (User) {
    var service = {};

    var users = [
        { id: 1, user: 'lcn', firstName: 'Luciano', lastName: 'Lima' },
        { id: 2, user: 'liz', firstName: 'Luiz', lastName: 'Costa' },
        { id: 3, user: 'gst', firstName: 'Gustavo', lastName: 'Santos' },
        { id: 4, user: 'vct', firstName: 'Victor', lastName: 'Lima' }
    ];

    service.getUserById = function (userId) {
        return new User(users.filter(user => user.id === userId)[0]);
    }

    return service;
});