define(['angularAMD', '/Sida/App/directives/fileUploadNew.js'], function (app) {
    app.directive('hamburgerMenu', ['$uibModal', 'messageService', 'dataService', '$rootScope', '$state', function ($modal, messageService, dataService, $rootScope, $state) {
        return {
            restrict: 'E',
            scope: {

            },
            replace: true,
            transclude: true,
            templateUrl: '/Sida/App/template/hamburgerMenu.html',
            link: function ($scope, $elem, $attrs) {
                function initDropDowns(allMenus) {
                    allMenus.children(".shy-menu__hamburger").on("click", function () {

                        var thisTrigger = jQuery(this),
                            thisMenu = thisTrigger.parent(),
                            thisPanel = thisTrigger.next();

                        if (thisMenu.hasClass("is-open")) {

                            thisMenu.removeClass("is-open");

                            jQuery(document).off("click");
                            thisPanel.off("click");

                        } else {

                            allMenus.removeClass("is-open");
                            thisMenu.addClass("is-open");

                            jQuery(document).on("click", function () {
                                allMenus.removeClass("is-open");
                            });
                            thisPanel.on("click", function (e) {
                                e.stopPropagation();
                            });
                        }

                        return false;
                    });
                }
                initDropDowns($($elem));

                $scope.lastChange = function () {
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'lastChangeprofile.html',
                        controller: $scope.lastChangeprofile,
                        windowClass: 'showModalPopupXL',
                        resolve: {
                            entity: function () {
                                return null
                            }
                        }
                    });
                }

                $scope.lastChangeprofile = function ($scope, $uibModalInstance, entity) {
                    $scope.model = {};
                    //dataService.post('api/Notification/GetNotification').then(function (res) {
                    //    $scope.model = res;
                    //});

                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };

                };
                $scope.changePassword = function (el) {
                    $(".shy-menu").removeClass("is-open");
                    $state.go("changePassword", { obj: true });
                }


                $scope.logoutuser = function () {
                    dataService.get('/api/Login/LogOut', {}).then(function (res) {
                        $rootScope.menuItems = [];
                        $rootScope.islogin = false;
                        $state.go("login", { obj: true });
                    });

                }
                $scope.openModalPropfile = function (obj) {
                    $($elem).removeClass("is-open");
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'profile.html',
                        controller: $scope.profileController,
                        windowClass: 'showModalPopupXL',
                        resolve: {
                            entity: function () {
                                return null
                            }
                        }
                    });
                };

                $scope.profileController = function ($scope, $uibModalInstance, entity) {
                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                $scope.openModalCreateBug = function () {
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'createBug.html',
                        controller: $scope.createBugController,
                        windowClass: 'showModalPopup',
                        resolve: {
                            entity: function () {
                                return null
                            }
                        }
                    });
                };

                $scope.createBugController = function ($scope, $uibModalInstance) {
                    $scope.model = {};

                    $scope.safeApply = function (fn) {
                        var phase = this.$root.$$phase;
                        if (phase === '$apply' || phase === '$digest')
                            this.$eval(fn);
                        else
                            this.$apply(fn);
                    };

                    $scope.selected = function (img) {
                        $scope.safeApply(function () {
                            $scope.model.fileSize = img.fileSize;
                            $scope.model.fileName = img.fileName;
                            $scope.model.fileSpace = img.fileSpace;
                            $scope.model.mimeType = img.mimeType;
                        });
                    }
                    $scope.createBug = function () {
                        if (!$scope.model.fileName) {
                            messageService.error("انتخاب فایل اجباریست");
                            return
                        }
                        dataService.post("/api/Crm/SaveCrm", $scope.model).then(function (res) {

                        });
                    }

                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

            }
        };
    }]);
});
