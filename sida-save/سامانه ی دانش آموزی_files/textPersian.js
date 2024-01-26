define(['angularAMD'], function (app) {
    app.directive('textPersian', ['$parse', function ($parse) {
        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function ($scope, $elem, $attrs, ngModel) {
                $($elem).keypress(function (event) {
                    var ew = event.which;
                    if (ew == 32)//space
                        return true;
                    if (ew == 95 || ew == 45 || ew == 43 || ew == 61)//Underline/ dash/plus/equal
                        return false;
                    if (ew == 40 || ew == 41)//parentheses 
                        return false;
                    if (48 <= ew && ew <= 57)//0-9
                        return true;
                    if (65 <= ew && ew <= 90)//A-Z
                        return false;
                    if (97 <= ew && ew <= 122)//a-z
                        return false;
                    return true;
                });
            }
        };
    }]);
});