
angular.module('mean-app').directive('meanWordStrength', function ($interval) {
    function link(scope, element, attrs, controllers, transcludeFn) {

        // JQLite Wrapper
        element.bind('keyup', function (event) {
            const value = event.currentTarget.value;
            var color = '#FEFEFE' // White color.
            if (value.length < 5) {
                color = '#FF0000'; // Red color.
            } else if (value.length >= 5 && value.length <= 10) {
                color = '#FFFF00'; // Yellow color.
            } else {
                color = '#00FF00'; // Green color.
            }
            element.css('background-color', color);
        });

    }
    // Configuração
    return {
        restrict: 'A',
        link: link
    };
});

// Recomendado por questões de minificação.
// angular.module('mean-app').directive('meanWordStrength', ['$interval', '', '', '', '', function (a, b, c, d, e) {
//     
// }]);