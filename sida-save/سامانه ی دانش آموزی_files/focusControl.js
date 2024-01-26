define(['angularAMD'], function (app) {
    app.directive('focusControl', ['$timeout', '$parse', function ($timeout, $parse) {
        return {
            restrict: 'EA',
            scope: {
                hasForm: "@"
            },
            replace: true,
            link: function ($scope, $elem, $attrs) {

                $($elem).keypress(function (event) {
                    if ($scope.hasForm == "true") {
                        if (event.keyCode == 13) {
                            $($elem).find('.button-validetion').click();
                        }
                    }
                });
                $scope.$applyAsync(function () {
                    if ($scope.hasForm == "true") {
                        $scope.setFocus();
                    } else {
                        var tagName = $($elem).tagName();
                        switch (tagName) {
                            case "select":
                                $($elem).on("change", function () {
                                    var formGroup = $(this).closest(".form-group").next();
                                    var control = formGroup.find(".form-control:eq(0)");
                                    if (control.length>0) {
                                        control.focus();
                                        control.select();
                                    }

                                });
                                break;
                            case "input":
                                if ($attrs.maxlength) {
                                    var maxlength = parseInt($attrs.maxlength);
                                    $($elem).on("keyup", function () {
                                        if ($(this).val().length == maxlength) {
                                            var formGroup = $(this).closest(".form-group").next();
                                            var control = formGroup.find(".form-control:eq(0)");
                                            if (control.length>0) {
                                                control.focus();
                                                control.select();
                                            }
                                        }
                                    });
                                }
                                break;
                        }


                    }

                });
                $scope.setFocus = function () {
                    var control = $($elem).find(".form-control:eq(0)");
                    if (control.length>0) {
                        control.focus();
                        control.select();
                    }
                }


                $.fn.tagName = function () {
                    return this.prop("tagName").toLowerCase();
                };
            }
        };
    }]);
});
