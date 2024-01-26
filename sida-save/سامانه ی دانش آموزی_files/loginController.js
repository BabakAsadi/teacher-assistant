define(['app'], function (app) {
    app.register.controller("loginController", ["messageService", "dataService", "$scope", "$state", "$rootScope",
        function (messageService, dataService, $scope, $state, $rootScope) {
            $scope.model = {};
            $scope.onCaptcha = function (captchahash) {
                $scope.model.captchaHash = captchahash;
            }
            dataService.get("/api/login/logout", {});
            $scope.safeApplylogin = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest')
                    this.$eval(fn);
                else
                    this.$apply(fn);
            };

            // dataService.get("/api/test/GetData", {}).then(function (res) {
            // 
            // });


            $rootScope.islogin = false;
            $rootScope.userContext = null;
            sessionStorage.setItem("token", "");
            sessionStorage.setItem("user-context", "");
            sessionStorage.setItem("acceptDocRegisterStudent", "");

            $scope.acceptLogin = function () {
                dataService.post("/api/Login/LoginUser", $scope.model).then(function (res) {
                    if (res.item1 == 2) {
                        messageService.warning("شماره موبایل شما ثبت نشده است", "پیغام");
                        $state.go("registerMobile", { obj: $scope.model });
                    }
                    else if (res.item1 == 3) {
                        $state.go("changePasswordLogin", { obj: $scope.model });
                    }
                    else {
                        $rootScope.islogin = true;
                        sessionStorage.setItem('token', res.item2.token);
                        delete res.item2.token;
                        $rootScope.userContext = res.item2;
                        // $rootScope.getMenu();
                        sessionStorage.setItem('user-context', JSON.stringify($rootScope.userContext));
                        $state.go('home');
                    }
                });
            }


            $scope.changePassword = function () {
                $state.go("firstChangePassword");
            }

            $scope.registerMobile = function () {
                $state.go("registerMobileManual");
            }


            //$scope.checkCapsLock = function (e) {
            //    var str = String.fromCharCode(e.which);

            //    if (!str || str.toLowerCase() === str.toUpperCase()) {
            //        return;
            //    }
            //    $scope.capsLockIsOn = (str.toLowerCase() === str && e.shiftKey) || (str.toUpperCase() === str && !e.shiftKey);

            //};
            $("#msform .login-key").on("keypress", "#password", function (e) {
                $scope.safeApplylogin(function () {
                   // $scope.checkCapsLock(e);
                });
            });

            setTimeout(function () {
                $(".alert-info").animate({
                    top: '30px',
                    opacity: '0.9',
                    width: '100%'
                }, 500);
            }, 100);
            if ($(".modal-backdrop").length > 0) {
                $(".modal-backdrop").hide();
            }
            $("#msform .login-key").on("keydown", "input", function (event) {
                if (event.ctrlKey && (event.keyCode == 67 || event.keyCode == 86)) {
                    return false;
                }

            });

        }]);
});
