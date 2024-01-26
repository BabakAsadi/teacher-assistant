define(['angularAMD'], function (app) {
    app.directive('textNumeric', ['$parse', function ($parse) {
        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function ($scope, $elem, $attrs, ngModel) {
                function fromText(text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');
                    if ($attrs.sep == "true") {
                        transformedInput = transformedInput.toString().replace(/[^\dA-Z]/g, '-').replace(/(.{4})/g, '$1-').trim();
                        if (transformedInput.length==20) {
                            transformedInput= transformedInput.substr(0, 19) 
                        }
                    }
                    if (transformedInput !== text) {
                        $elem.val(transformedInput);
                    }
                    return transformedInput;
                }
                ngModel.$parsers.push(fromText);

                ngModel.$render = function () {
                    if (ngModel.$viewValue) {
                        var transformedInput = ngModel.$viewValue.toString().replace(/[^0-9]/g, '');
                        if ($attrs.sep == "true") {
                            transformedInput = transformedInput.toString().replace(/[^\dA-Z]/g, '-').replace(/(.{4})/g, '$1-').trim();
                        }
                        $elem.val(transformedInput);
                    }
                    else {
                        $elem.val("");
                    }
                }
            }
        };
    }]);
});