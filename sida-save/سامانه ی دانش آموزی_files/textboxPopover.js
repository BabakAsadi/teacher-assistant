define(['angularAMD'], function (app) {
    app.directive('textboxPopover', ['$parse', function ($parse) {
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
                onblur: "&",
                popoverbody: "@"
            },
            templateUrl: '/Sida/App/template/textboxPopover.html',
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
                if (!$scope.type) {
                    $scope.type = "text";
                }
           
                if ($attrs.isnumber && $attrs.isnumber == "true") {
                    
                    $($elem).on('keyup', 'input', function () {
                        $(this).val($(this).val().replace(/[^0-9]/g, ''));
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
                if ($scope.blur && !$attrs.isdecimal) {
                    $($elem).on('blur', 'input', function (event) {
                        var value = $(this).val();
                        $scope.safeApply(function () {
                            $scope.onblur({ val: value })
                        });
                    });
                }
                $($elem).click(function () {
                    $(this).find(".form-control").focus();
                });
            }
        };
    }]);
});