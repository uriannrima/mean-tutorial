angular.module('mean-app').factory('logService', function () {
    var service = {};

    service.log = function (anything) {
        console.log(anything);
    }

    return service;
});


// Recomendado por questões de minificação.
// angular.module('mean-app').factory('logService', ['$interval', '', '', '', '', function (a, b, c, d, e) {
//      var service = {};
//      return service;
// }]);