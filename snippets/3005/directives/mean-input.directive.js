// Injetavel
angular.module('mean-app').directive('meanInput', function () {
    // Configuration Object.
    return {
        restrict: 'EA',
        // Has own scope (with parent scope as $parent)
        // Otherwhise, uses parent scope (scope in "control")
        scope: {
            placeholder: '@'
        },
        template: '<input type="text" placeholder="{{placeholder}}"/>',
        // Element is the one who received the directive
        // Or the element which "represents" the directive like <mean-input></mean-input>
        link: function (scope, element, attrs, controllers, transculeFn) {
            console.log(scope);
            console.log(element);
        }
    };
});