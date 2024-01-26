define(['angularAMD'], function (app) {
    app.directive('captchaImage', ['dataService', '$rootScope', function (dataService, $rootScope) {
        return {
            restrict: 'E',
            scope: {
                setValue: "&"
            },
            template: '<div class="captcha-wrapper"><img class="captcha-image" src="{{captchaImageSrc}}" ng-style="imgStyle" ng-click="generate()"/><a ng-click="generate()"><i class="far fa-repeat icon-captcha"></i></a></div>',
           
            link: function ($scope, $elem, $attrs) {
                $scope.api = {};
                $scope.$on('callRegenarateCaptchaMethod', function (event) {
                    $scope.generate();
                });
                $scope.model = null;
                $scope.generate = function () {
                    dataService.get("/api/Captcha/GetCaptcha", {},true).then(function (data) {
                        $scope.captchaImageSrc = "data:image/png;base64," + data.value;
                        $scope.setValue({ val: data.hashValue});
                    });
                }

                $scope.imgStyle = {
                    'height': '100px',
                    'width': '140px',
                }
                $scope.generate();
                
            }
        };
    }]);
});