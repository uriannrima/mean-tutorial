angular.module('mean-app').factory('Abstract', function () {
    // Construtor
    var Abstract = function () {
    };

    // Métodos publicos
    Abstract.prototype = {
        loadModel: function (model) {
            if (model) angular.extend(this, model);
        },
        getInstance: function () {
            return {};
        }
    };

    return Abstract;
});

angular.module('mean-app').factory('User', function (Abstract) {
    // Construtor
    var User = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Extender métodos do Abstract
    User.prototype = new Abstract();

    // Sobrescreve método do Abstract.
    User.prototype.getInstance = function (model) {
        return new User(model.firstName, model.lastName);
    }

    // Métodos necessários somente neste modelo.
    var extendPrototype = {
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    angular.extend(User.prototype, extendPrototype);

    return User;
});