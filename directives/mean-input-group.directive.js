// mean-input-group
app.directive('meanInputGroup', function () {
    return {
        templateUrl: './directives/mean-input-group.template.html',
        restrict: 'E', // (E)lement; (A)ttribute; (C)lass; (M)Comment
        scope: {
            label: '@?'
        }
    };
});