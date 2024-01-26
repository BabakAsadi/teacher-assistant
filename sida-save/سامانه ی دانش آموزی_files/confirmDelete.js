define(['angularAMD'], function (app) {
    app.directive('confirmDelete', ['messageService', '$timeout', '$parse', function (messageService, $timeout, $parse) {
        return {
            restrict: 'E',
            scope: {
                api: "=",
                action: "@",
                title:"@"
            },
            replace: true,
            templateUrl: '/Sida/App/template/confirmDelete.html',
            link: function ($scope, $elem, $attrs) {
                if (!$scope.title) {
                    $scope.title = "آیا از انجام عملیات اطمینان دارید؟";
                }
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                $scope.api = {};
                $scope.api.close = function () {
                    $("#deletedModalLong").modal("hide");
                }
                $scope.api.show = function () {
                    $("#deletedModalLong").modal("show");
                }
                $scope.count = 0;
                $scope.setAction = function (ac, parent) {
                    if ($scope.count == 5) {
                        return;
                    }
                    var action = null;
                    if (!parent) {
                        action = $scope.$parent[ac.action];
                    }
                    else {
                        $scope.count++;
                        action = parent[ac.action];
                    }
                    if (action) {
                        action();
                    }
                    else {
                        $scope.setAction(ac, $scope.$parent);
                    }
                }
                $scope.count = 0;
                $scope.accept = function (parent) {
                    if ($scope.count == 8) {
                        $scope.count = 0;
                        return;
                    }
                    $scope.count++;
                    var action = null;
                    if (!parent) {
                        action = $scope.$parent[$scope.action];
                        if (!action) {
                            $scope.accept($scope.$parent);
                        }
                        else {
                            action();
                            $("#deletedModalLong").modal("hide");
                        }
                    }
                    else {
                        action = parent.$parent[$scope.action];
                        if (!action) {
                            $scope.accept(parent.$parent);
                        }
                        else {
                            action();
                            $("#deletedModalLong").modal("hide");
                        }
                    }
                }
            }
        };
    }]);
});
