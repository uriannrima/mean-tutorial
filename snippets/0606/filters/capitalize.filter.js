// Option: 'first' | 'all'
angular.module('mean-app').filter('capitalize', function (/** $timeout **/) {
    return function (input, parameter) {
        if (!parameter || parameter == 'first') {
            return input.charAt(0).toUpperCase() + input.slice(1);
        } else if (parameter == 'all') {
            return input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        } else {
            return input;
        }
    }
});