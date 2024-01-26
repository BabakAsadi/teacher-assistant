define(['angularAMD'], function (app) {
    app.directive('textbox', ['$parse', function ($parse) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                label: '@',
                name: '@',
                readonly: '@',
                blur: '@',
                ngModel: "=",
                ngDisabled: "=?",
                type: '@',
                maxlength: '@',
                onblur:"&"
            },
            templateUrl: '/Sida/App/template/textbox.html',
            require: 'ngModel',
            link: function ($scope, $elem, $attrs, ngModel) {
               
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                
                if ($scope.readonly) {
                    $($elem).find(".form-control").prop("readonly","readonly")
                }
               
           
                if ($attrs.isnumber && $attrs.isnumber == "true") {
                    $scope.type = "tel";
                    $($elem).on('keyup', 'input', function () {
                        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
                        var value = $(this).val().replace(/[^0-9]/g, '');
                        $(this).val(value);
                        ngModel.$setViewValue(value);
                    });
                }
                else if ($attrs.ischar && $attrs.ischar == "true") {
                    $($elem).on('keypress', 'input', function (event) {
                        var ew = event.which;
                        if (ew == 40 || ew == 41)//parentheses 
                            return false;
                        if (48 <= ew && ew <= 57)//0-9
                            return false;
                    });
                    $($elem).on('keyup', 'input', function (e) {
                        var str = $(this).val();
                        $(this).val(str.replace(/^[A-z\u00C0-\u00ff\s'\.,-\/#!$%\^&\*;:{}=\-_`~()]+$/, ""));
                    });
                }
                else if ($attrs.isdecimal) {
                    $($elem).on("keypress","input",function (event) {
                        var ew = event.which;
                        if (ew == 46) {
                            var valuekey = $(this).val();
                            if (valuekey.indexOf('/') > -1) {
                                return false;
                            }
                            $(this).val(valuekey + "/");
                            return false;
                        }
                        if (48 <= ew && ew <= 57)//0-9
                            return true;

                        return false;
                    });

                    $($elem).on('blur', 'input', function (event) {
                        let val = $(this).val();
                        if (val && val.length == 4 && val.indexOf("/") == -1) {
                            $(this).val(val.substr(0, 2) + '/' + val.substr(2))
                        }
                        else if (val && val.length > 4) {
                            if (val.replace(/[^0-9]/g, '').length > 4) {
                                $(this).val("");
                            }
                        }
                        var value = $(this).val();
                        $scope.safeApply(function () { 
                            $scope.onblur({ val: value})
                        });
                    });
                }

                if (!$attrs.isdecimal) {
                    $($elem).on('blur', 'input', function (event) {
                        var value = $(this).val();
                        $scope.safeApply(function () {
                            $scope.onblur({ val: value })
                        });
                    });
                }

                if (!$scope.type) {
                    $scope.type = "text";
                }

                $($elem).click(function () {
                    $(this).find(".form-control").focus();
                });
            }
        };
    }]);
});