define(['angularAMD'], function (app) {
    app.directive('inputThousandSeparator', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $elem, $attrs, ngModel) {

                var viewValue, noCommasVal;
                var numberMode = $attrs['inputThousandSeparator'];

                var currencyReg = /^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.[0-9]{2})?$/;
                var percentageReg = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/;
                var wholeNosReg = /^(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})?$/;

                function testValue(value) {
                    switch (numberMode) {
                        case 'currency':
                            ngModel.$setValidity('pattern', currencyReg.test(value));
                            break;

                        case 'percentage':
                            ngModel.$setValidity('pattern', percentageReg.test(value));
                            break;

                        case 'whole':
                            ngModel.$setValidity('pattern', wholeNosReg.test(value));
                            break;
                    }
                }

                function setThousandSeperator(value) {
                    if (value) {
                        noCommasVal = value.toString().replace(/,/g, '');
                        viewValue = noCommasVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        ngModel.$setViewValue(viewValue);
                        ngModel.$render();
                    }
                }

                ngModel.$parsers.push(function (value) {
                    if (!value) {
                        ngModel.$setValidity('pattern', true);
                    } else {
                        testValue(value);
                        setThousandSeperator(value);
                        return noCommasVal;
                    }
                });
                ngModel.$formatters.push(function (value) {
                    if (!value) {
                        ngModel.$setValidity('pattern', true);
                        return value;
                    } else {
                        testValue(value);
                        setThousandSeperator(value);
                        return viewValue;
                    }
                });
            }
        };
    }]);
});