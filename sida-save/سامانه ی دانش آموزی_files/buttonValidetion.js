define(['angularAMD'], function (app) {
    app.directive('buttonValidation', ['messageService', '$timeout', '$parse', function (messageService, $timeout, $parse) {
        return {
            restrict: 'E',
            scope: {
                click: "&",
                textsubmit: '@',
                classStyle: '@',
                show: "@"
            },
            replace: true,
            transclude: true,
            template: '<button type="button"  class="{{classStyle}}"><ng-transclude></ng-transclude>{{textsubmit}}</button>',
            controller: function ($scope, $element, $attrs) {

            },
            link: function ($scope, $elem, $attrs) {


                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                $scope.accept = function () {
                    if ($scope.status) {
                        $scope.click()
                    }
                    else {
                        if ($scope.messages) {
                            var elmParent = $("<ul></ul>")
                            for (var i = 0; i < $scope.messages.length; i++) {
                                elmParent.append('<li >' + $scope.messages[i].message + '</li>');
                            }
                           
                            if ($attrs.infomessage && $attrs.infomessage =="true") {
                                messageService.infoMessage(elmParent);
                            }
                            else {
                                messageService.warningMessage(elmParent);
                            }
                            
                        }
                    }
                };
                $elem.on('click', function (e) {
                    var mainelm = $elem.closest(".from-validation");
                    mainelm.find(".warning-req").removeClass("warning-req");
                    var elms = mainelm.find('[text-required]');
                    if (mainelm.find(".from-validation-not").length > 0) {
                        elms = mainelm.find('[text-required]').not(".from-validation-not [text-required]");
                    }
                    $scope.messages = [];
                    $scope.status = true;
                    $.each(elms, function (index, item) {
                        if (!checkControlTag(item)) {
                            $scope.messages.push({ message: $(item).attr("text-required") });
                            $scope.status = false;
                        }
                    });
                    $scope.safeApply(function () { $scope.accept(); });

                });

                function checkControlTag(elm) {
                    var status = true;
                    if (angular.isDefined($(elm).attr("k-disabled"))) {
                        var parse = $parse($(elm).attr("k-disabled"))($scope.$parent);
                        if (parse == true) {
                            return status;
                        }
                    }

                    var name = $(elm).tagName();
                    var attr = "none";
                    switch (name) {
                        case "select":
                            if ($("#" + $(elm).attr("id") + " option:selected").text() == "" ||
                                $("#" + $(elm).attr("id") + " option:selected").val() == "" || $("#" + $(elm).attr("id") + " option:selected").val() == "-1") {
                                status = false;
                                bindControl(attr, elm, name);
                            }
                            break;
                        case "input":
                           var elemet= $(elm).find("input");
                            if (elemet.val() == "") {
                                status = false;
                                bindControl(attr, elemet, name);
                            }
                            break;
                        case "textarea":
                            if ($(elm).val() == "") {
                                status = false;
                                bindControl(attr, elm, name);
                            }
                            break;
                        case "popup":
                            if ($(elm).find("input[type='text']").val() == "") {
                                status = false;
                                bindControl("popup", elm, name);
                            }
                            break;
                        case "comboBox":
                            if ($(elm).find("input[type='text']").val() == "") {
                                status = false;
                                bindControl("comboBox", elm, name);
                            }
                            break;
                        case "form-control":
                            if ($(elm).val() == "") {
                                status = false;
                                bindControl("none", elm, name);
                            }
                            break;
                            
                    }
                    return status;
                }

                function bindControl(attr, elm, tag) {
                    switch (attr) {
                        case "none":
                            $(elm).addClass('warning-req');
                            if (tag == "input") {
                                $(elm).on('keypress', function () {
                                    if ($(this).hasClass('warning-req')) {
                                        $(this).removeClass('warning-req');
                                    }
                                })
                            }
                            else {
                                $(elm).on('change', function () {
                                    if ($(this).hasClass('warning-req')) {
                                        $(this).removeClass('warning-req');
                                    }
                                })
                            }
                            break;
                        case "popup":
                            $(elm).find('input').addClass('warning-req');
                            $(elm).on('click', "input", function () {
                                $(this).removeClass('warning-req');
                            })
                            break;
                        case "comboBox":
                            $(elm).find('.k-dropdown-wrap').addClass('warning-req');
                            $(elm).on('click', ".k-dropdown-wrap", function () {
                                $(this).removeClass('warning-req');
                            })
                            break;
                    }
                }


                $.fn.tagName = function () {
                    if (this.hasClass("input-label")) {
                        return  "input";
                    }
                    if (this.hasClass("kendocomboBox")) {
                        return "comboBox";
                    }
                    if (this.hasClass("popup")) {
                        return "popup";
                    }
                    if (this.hasClass("textarea") || this.hasClass("date-picker")) {
                        return "textarea";
                    }
                    if (this.hasClass("form-control")) {
                        return "form-control";
                    }
                     
                };
                var countStar = 0;
                function setStarLabel() {
                    countStar++;
                    setTimeout(function () {
                        var mainelm = $elem.closest(".from-validation");
                        var lengthrequired = mainelm.find("[text-required]");
                        var lengthstar = mainelm.find(".required-star").length;
                        if (lengthrequired.length != lengthstar) {
                            $.each(lengthrequired, function (index, item) {
                                var text = $(item).closest(".form-group").find(".float-label-star");
                                if (text.length>0) {
                                    text.addClass('positionParent').prepend('<span class="required-star">*</span>');
                                }
                                var comboBox = $(item).closest(".form-group").find(".kendocomboBox ");
                                if (comboBox.length > 0) {
                                    comboBox.addClass('positionParent').prepend('<span class="required-star">*</span>');
                                }
                            });
                        }
                        if (countStar > 10) {
                            setStarLabel();
                        }
                    }, 500);
                }
                

                $scope.$applyAsync(function () {
                    setStarLabel();
                    $elem.focus();
                });

            }
        };
    }]);
});
