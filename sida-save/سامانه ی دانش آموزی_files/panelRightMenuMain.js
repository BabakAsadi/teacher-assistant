define(['angularAMD'], function (app) {
    app.directive('panelRightMenuMain', ['$state', '$rootScope', '$uibModal', 'dataService', function ($state, $rootScope, $modal, dataService) {
        return {
            restrict: 'EA',
            scope: {
                options: "=?",
                api: "=?"
            },
            replace: true,
            templateUrl: '/Sida/App/template/panelRightMenuMain.html',
            controller: function ($scope, $element, $attrs) {
                $scope.reloadHome = function () {
                    $state.go("home");
                }
            },
            link: function ($scope, $elem, $attrs) {
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };

                $($elem).on("click", ".panel-sub-menu .btn-link", function () {
                    var attr = $(this).attr("aria-expanded");
                    $(".panel-sub-menu").find(".collapsed-icon").removeClass("fa-minus").addClass("fa-plus");
                    if (attr == "false") {
                        $(this).closest(".card").find(".collapsed-icon").addClass("fa-minus").removeClass("fa-plus");

                    }
                })
                $(document).click(function (event) {

                    if (!$(event.target).is("#menu-right *,.panel-sub-menu *")) {
                        $(".panel-sub-menu")
                            .animate({
                                width: '0px'
                            }, 100)
                    }
                });

                $scope.checkPage = function (detail) {
                    
                    if (detail.id == 1060 && $rootScope.userContext.timeDoreTypeId < 3) {
                        return true;
                    }
                    else if (detail.id == 1125 &&
                        ($rootScope.userContext.stageTypeId == 5 && [6, 13, 11].indexOf($rootScope.userContext.schoolModelTypeId) > -1
                        )) {
                        return false;
                    }
                      else if ([1386, 1322].indexOf(detail.id)>-1 && $rootScope.userContext.stageTypeId == 11) {
                        return true;
                    }
                    //else if ([1386,1351, 1322, 1310].indexOf(detail.id)>-1 && $rootScope.userContext.stageTypeId == 11) {
                    //    return true;
                    //}
                    if (detail.id == 1167 &&
                        !($rootScope.userContext.stageTypeId == 31 && [3].indexOf($rootScope.userContext.schoolModelTypeId) > -1
                        )) {
                        return true;
                    }
                    if (detail.id == 1125 &&
                        !($rootScope.userContext.stageTypeId == 5 && [6, 13, 11].indexOf($rootScope.userContext.schoolModelTypeId) > -1
                        )) {
                        return true;
                    }
                    //if (detail.id == 1033 &&
                    //    ($rootScope.userContext.stageTypeId == 5 && [6, 13, 11].indexOf($rootScope.userContext.schoolModelTypeId) > -1
                    //    )) {
                    //    return true;
                    //}
                    //if (detail.id == 1201 && $rootScope.userContext.stageTypeId !=11 ) {
                    //    return true;
                    //}
                    //if (detail.id == 1201 && $rootScope.userContext.stageTypeId == 11 && $rootScope.userContext.schoolModelTypeId !=2) {
                    //    return true;
                    //}
                    if (detail.id == 1199 && $rootScope.userContext.stageTypeId !=5) {
                        return true;
                    }
                    if(detail.id == 1188 && $rootScope.userContext.stageTypeId != 3){
                        return true;
                    }
                    if (detail.id == 1316 && $rootScope.userContext.stageTypeId != 31) {
                        return true;
                    }
                    if (detail.id == 1317 && $rootScope.userContext.stageTypeId != 31) {
                        return true;
                    }
                    if (detail.id == 1209 && $rootScope.userContext.stageTypeId != 11 && $rootScope.userContext.stageTypeId != 5) {
                        return true;
                    }
                    if ([1265, 1266].indexOf(detail.id) > -1) {
                        return true;
                    }
                    if (detail.id == 1069 && [30, 31, 32, 33, 34, 35, 37, 45, 46, 47].indexOf($rootScope.userContext.stageTypeId) > -1) {
                        return true;
                    }
                    if (detail.id == 1072 && [30, 31, 32, 33, 34, 35, 37, 45, 46, 47].indexOf($rootScope.userContext.stageTypeId) > -1) {
                        return true;
                    }
                    if (detail.id == 1153 && [30, 31, 32, 33, 34, 35, 37, 45, 46, 47].indexOf($rootScope.userContext.stageTypeId) > -1) {
                        return true;
                    }
                    if (detail.id == 1231 && $rootScope.userContext.stageTypeId==3) {
                        detail.title="دفتر ارزشیابی";
                    }
                    //else
                    return false;
                }

                $scope.getSubMenu = function (e, index,item) {
                    
                    $(".panel-sub-menu").width(0);
                    $(".panel-sub-menu").find(".collapsed-icon").removeClass("fa-minus").addClass("fa-plus");
                    var elms = $(".panel-sub-menu .btn-link");
                    elms.addClass("collapsed");
                    elms.attr("aria-expanded", false);
                    if (item.id == 1083) {
                        $state.go("mainReport");
                        return;
                    }
                    $(".panel-sub-menu").find(".collapse").removeClass("show");

                    $(".panel-sub-menu").width(0);
                    $(".panel-sub-menu" + index)
                        .animate({
                            width: '280px'
                        }, 150)
                }

                $scope.changeDoreh = function () {
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'changeDoreh.html',
                        controller: $scope.changeDorehController,
                        resolve: {
                            timeYearTypeId: function () {
                                return $rootScope.userContext.timeYearTypeId
                            },
                            entity: function () {
                                return $rootScope.userContext;
                            }
                        }
                    });
                    modalInstance.result.then(function (row) {
                        sessionStorage.setItem('token', row.token);
                        $rootScope.userContext.timeDoreTypeId = parseInt(row.model.timeDoreTypeId);
                        $rootScope.userContext.timeYearTypeId = parseInt(row.model.timeYearTypeId);
                        $rootScope.userContext.timeDoreTypeTitle = row.model.timeDoreTypeTitle;
                        $rootScope.userContext.timeYearTypeTitle = row.model.timeYearTypeTitle;
                        sessionStorage.setItem('user-context', JSON.stringify($rootScope.userContext));
                        $rootScope.getMenu();
                        $state.go("home");
                    });
                };

                $scope.changeDorehController = function ($scope, $uibModalInstance, timeYearTypeId, entity) {
                    $scope.model = {};
                    $scope.comboOptiontimeDoreTypes = [];
                    var getCallBackData = function (options) {
                        options[0].forEach(function (item, i) {
                            item.title = item.timeDoreTypeTitle + "  " + item.timeYearTypeTitle;
                            item.id = (i + 10)
                        });
                        $scope.comboOptiontimeDoreTypes = options[0];
                        // $scope.model.timeYearTypeId = timeYearTypeId;
                    }
                    dataService.callBackData(getCallBackData, ["api/SchoolPersonel/GetDore"]);

                    $scope.onChangeDorehTahsili = function (item) {
                        $scope.model = item.dataItem();
                    }

                    $scope.changeDorehTahsili = function (e) {
                        $scope.model.id = entity.id;
                        dataService.post("/api/SchoolPersonel/ChangeRtimeDoreType", $scope.model).then(function (res) {
                            $uibModalInstance.close({ token: res, model: $scope.model });
                        });
                    }

                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };

                $scope.closeMenu = function (e) {
                    $(".panel-sub-menu")
                        .animate({
                            width: '0px'
                        }, 100)
                }

                $scope.api = {};
                $scope.api.setData = function (items) {
                    $rootScope.menuItems = items;
                }

            }
        };
    }]);
});
