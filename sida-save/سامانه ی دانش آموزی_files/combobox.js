define(['angularAMD'], function (app) {
    app.directive('comboBox', ['dataService', function (dataService) {
        return {
            restrict: 'E',
            scope: {
                options: "=",
                placeholder: "@",
                name: "@",
                onChange: "&",
                onDataBound: "&",
                api: "=?",
                ngDisabled:"=?"
            },
            replace: true,
            require: 'ngModel',
            template: '<div class="kendocomboBox"> <label class="combobox-lable">{{name}}</label><input class="k-rtl comboBox-main"  style="width: 100%;" /></div>',
            link: function ($scope, $elem, $attrs, ngModelCtrl) {
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                $scope.comboOptions = { readonly: false, filter: "contains", suggest: false, placeholder: "انتخاب کنید...." }

                if (angular.isArray($scope.options)) {
                    $scope.comboOptions.dataTextField = $attrs.textfield;
                    $scope.comboOptions.dataValueField = $attrs.valuefield;
                    $scope.comboOptions.dataSource = $scope.options;
                }
                else {
                    angular.extend($scope.comboOptions, $scope.options);
                }

                $scope.comboOptions.change = function (e) {
                    $scope.safeApply(function () {
                        ngModelCtrl.$setViewValue(e.sender.value());
                        $scope.onChange({ item: e.sender });
                    });
                }
                $scope.api = {};

                $scope.api.disable = function () {
                    $scope.kendoComboBox.enable(false);
                };
                $scope.api.enable = function () {
                    $scope.kendoComboBox.enable(true);
                };

                $scope.comboOptions.dataBound = function (e) {
                    $scope.onDataBound({ kendo: e.sender });
                }

                $scope.kendoComboBox = $($elem).find(".comboBox-main").kendoComboBox($scope.comboOptions).data("kendoComboBox");
                $scope.kendoComboBox.input.prop("readonly", true)
                if ($scope.ngDisabled) {
                    $scope.kendoComboBox.enable(false);
                }

                if (angular.isArray($scope.options)) {
                    $scope.$watchCollection('options', function (newValue, oldValue) {
                        if (newValue) {
                            $scope.kendoComboBox.dataSource.data(newValue);
                        }
                    }, true)
                }
                $scope.$watch('ngDisabled', function (newValue, oldValue) {
                    if (angular.isDefined(newValue)) {
                        $scope.kendoComboBox.enable(!newValue);
                    }
                }, true)
                
                ngModelCtrl.$render = function () {
                    if (ngModelCtrl.$viewValue || ngModelCtrl.$viewValue==0) {
                        $scope.kendoComboBox.value(ngModelCtrl.$viewValue);
                    }
                    else {
                        $scope.kendoComboBox.value(null);
                        $scope.kendoComboBox.text("")
                    }
                }

                if ($attrs.textRequired) {
                    setTimeout(() => {
                        $($elem).closest(".form-group");
                    }, 1000);
                }
            }
        };
    }]);
});
