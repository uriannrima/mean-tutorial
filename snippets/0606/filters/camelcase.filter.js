angular.module('mean-app').filter('camelcase', function (/** $timeout **/) {
    return function (input) {
        return input
            .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
    }
});