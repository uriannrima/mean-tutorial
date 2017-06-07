angular.module('mean-app').directive('meanInputGroup', function () {
    // Configuration Object.
    return {
        restrict: 'E',
        scope: {
            label: '@'
        },
        template: `
            <label>{{label}}</label>
            <input type="text" placeholder="{{label}}"/>
        `
    };
});