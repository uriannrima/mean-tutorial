// mean-input-group
app.directive('meanTextStrength', function () {
    return {
        restrict : 'A',
        link: function (scope, element, attrs) {
            element.bind('keyup', function (event) {
                const value = event.currentTarget.value;

                var color = "#FFFFFF";
                if (value.length <= 5) {
                    color = "#FF0000";
                } else if (value.length > 5 && value.length <= 10) {
                    color = "#FFFF00";
                } else {
                    color = "#00FF00";
                }

                element.css('background-color', color);
            });
        }
    };
});