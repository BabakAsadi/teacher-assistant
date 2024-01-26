define(['angularAMD'], function (app) {
    app.directive('actionGrid', ['messageService', '$timeout', '$parse', function (messageService, $timeout, $parse) {
        return {
            restrict: 'E',
            scope: {
                actions: "=?",
            },
            replace: true,
            transclude: true,
            templateUrl: '/Sida/App/template/actionGrid.html',
            link: function ($scope, $elem, $attrs) {

                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
               
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
            }
        };
    }]);
});
