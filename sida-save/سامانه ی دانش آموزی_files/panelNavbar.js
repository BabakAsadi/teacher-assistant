define(['angularAMD', '/Sida/App/directives/hamburgerMenu.js'], function (app) {
    app.directive('panelNavbar', ['$sce', '$state', '$uibModal', 'dataService', 'messageService', '$rootScope', '$state', function ($sce,$state, $modal, dataService, messageService, $rootScope, $state) {
        return {
            restrict: 'EA',
            scope: {
                options: "=?",
                api: "=?"
            },
            replace: true,
            templateUrl: '/Sida/App/template/panelNavbar.html',
            controller: function ($scope, $element, $attrs) {
                $scope.reloadHome = function () {
                    $state.go("home");
                }
                $scope.setToken = function (res) {
                    sessionStorage.setItem('token', res.token);
                    $rootScope.userContext = res;
                    sessionStorage.setItem('user-context', JSON.stringify($rootScope.userContext));
                    $rootScope.getMenu();
                    $state.go("home");
                }
                $scope.changeSubSystem = function (typeid) {
                    dataService.post("api/SchoolPersonel/ChangeSubSystem?sbSystemTypeId=" + typeid).then(function (res) {
                        $scope.setToken(res);
                    });
                }
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                //$(document).click(function (event) {
                //    if ($(event.target).closest(".mark-panel-sub-system").length==0) {
                //        $scope.popoverIsOpen = false;
                //    }
                //    else {
                //        $scope.popoverIsOpen = true;
                //    }
                //});
                
            },
            link: function ($scope, $elem, $attrs) {
                $scope.api = {};

                $scope.loadRole = function (items) {
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'loadUserRole.html',
                        controller: $scope.loadPanelGridMajorController,
                        windowClass: 'showModalPopupFull',

                    });
                    modalInstance.result.then(function (item) {
                        //if (($rootScope.userContext.schoolPersonelId != item.schoolPersonelId) && ($rootScope.userContext.timeYearTypeId != item.timeYearTypeId )&& ($rootScope.userContext.timeDoreTypeId != item.timeDoreTypeId) ) {
                            dataService.post("api/SchoolPersonel/ChangeRoleType", item).then(function (res) {
                                $scope.setToken(res);
                            });
                       //}
                    });
                }

               
                
                if ($rootScope.userContext) {
                    var timeDoreType = [];
                    var timeYearType = [];
                    var callBackData = function (options) {
                        timeDoreType = options[0];
                        timeYearType = options[1];
                    }
                    dataService.callBackData(callBackData, ["api/General/GetTimeDoreType", "api/General/GetTimeYearType"]);
                }

                $scope.loadPanelGridMajorController = function ($scope, $uibModalInstance) {
                    $scope.safeApply = function (fn) {
                        var phase = this.$root.$$phase;
                        if (phase === '$apply' || phase === '$digest')
                            this.$eval(fn);
                        else
                            this.$apply(fn);
                    };
                    $("body").on("click", ".k-link-star", function (e) {
                        $scope.safeApply(function () {
                            $scope.entityRow = $scope.kendo.dataItem($(e.currentTarget).closest("tr"));
                            $(".alert-pass-star").modal("show");
                        });
                    });
                    var columns = [
                        {
                            field: "roleTitle", headerTemplate: '<a class="k-link" >عنوان</a>',
                            title: "عنوان ", sortable: false, filterable: false,
                        },
                        {
                            field: "userTypeTitle", headerTemplate: '<a class="k-link" >سطح</a>',
                            title: "سطح ", sortable: false, filterable: false,
                        },

                        {
                            field: "regionTitle", headerTemplate: '<a class="k-link" >منطقه</a>',
                            title: "منطقه", sortable: false, filterable: false,
                        },
                        {
                            field: "stageTypeTitle", headerTemplate: '<a class="k-link" >مقطع</a>',
                            title: "مدرسه ", sortable: false, filterable: false,
                        },
                        //{
                        //    field: "schoolModelTypeTitle", headerTemplate: '<a class="k-link" >مدل مدرسه</a>',
                        //    title: "مدرسه ", sortable: false, filterable: false,
                        //},
                        {
                            field: "organizationTypeTitle", headerTemplate: '<a class="k-link" >نوع مدرسه</a>',
                            title: "مدرسه ", sortable: false, filterable: false,
                        },
                        {
                            field: "schoolId", headerTemplate: '<a class="k-link" >کد مدرسه</a>',
                            title: "مدرسه ", sortable: false, filterable: false,
                        },
                        {
                            field: "schoolTitle", headerTemplate: '<a class="k-link" >مدرسه</a>',
                            title: "مدرسه ", sortable: false, filterable: false,
                        },
                        {
                            field: "roleDisable", headerTemplate: '<a class="k-link" >وضعیت</a>',
                            title: "وضعیت ", sortable: false, filterable: false,
                            template: "#= roleDisable ? 'غیر فعال' : 'فعال ' #",
                        },
                        {
                            field: "shaadPasswordStar", headerTemplate: '<a class="k-link" >گذرواژه شاد</a>',
                            template: '<a class="k-link k-link-star" > #: shaadPasswordStar#</a>',
                            title: "گذرواژه شاد ", sortable: false, filterable: false,
                        }
                  
                    ]
                    
                    columns.push({
                        field: "timeDoreTypeId ", headerTemplate: '<a class="k-link" >دوره تحصیلی</a>',
                        title: "دوره تحصیلی ", sortable: false, filterable: false, width: 150,
                        template: "<input type='text' class='timeDoreTypeTemp' style='width:130px' disabled/>"
                    });
                    columns.push({
                        field: "timeYearTypeId ", headerTemplate: '<a class="k-link" >سال تحصیلی</a>',
                        title: "سال تحصیلی ", sortable: false, filterable: false,
                        template: "<input type='text' class='timeYearTypeTemp' style='width:130px' disabled/>"
                    });
                    $scope.selectedItemRow = null;

                    $scope.accept = function () {
                        if ($scope.selectedItemRow) {
                            $scope.closeForm($scope.selectedItemRow);
                        }
                        else {
                            messageService.error('یک رکورد را انتخاب کنید', "پیغام");
                        }
                    };

                    dataService.get("/api/user/GetQrScanActivationStatus", { username: $scope.userContext.nationalID }).then(function (res) {
                        $scope.isTotpAppActive = res.isTotpAppActive;
                    });

                    $scope.qrScanEnabled = function () {
                        dataService.get("/api/user/ToggleQrScanActivationStatus", { username: $scope.userContext.nationalID }).then(function (res) {
                            $scope.isTotpAppActive = res.isTotpAppActive;
                        });
                    }

                    $scope.gridOptions = {
                        dataSource: {
                            type: "json",
                            transport: {
                                read: {
                                    type: "post",
                                    url: 'api/SchoolPersonel/GetSchoolPersonelAll',
                                    dataType: "json",

                                }
                            },
                            schema: {
                                data: function (result) {
                                    return dataService.processResponse(result);
                                },
                                total: function (data) {
                                    return dataService.getCount(data);
                                },
                                model: {
                                    id: "id",
                                    fields: {
                                        id: { type: "number" },
                                        title: { type: "string" },
                                    },
                                }
                            },
                            pageSize: 100,
                            serverPaging: true,
                            serverFiltering: true,
                            serverSorting: true
                        },
                        selectable: "row",
                        height: 400,
                        filterable: false,
                        sortable: false,
                        pageable: {
                            numeric: false,
                            butonCount: 5,
                            alwaysVisible: false,
                            previousNext: false,
                            pageSizes: false
                        },
                        change: function () {
                            let rowitem = this.dataItem(this.select())
                            $scope.safeApply(function () {
                                $scope.selectedItemRow = rowitem;
                            });
                        },
                        dataBound: function (e) {

                            $scope.kendo = e.sender;
                            $scope.orginalDataItems = angular.copy($scope.kendo.dataSource.data());
                            $(".main-grid tbody tr").find('.k-button').removeAttr("href");
                            var items = $scope.kendo.items();
                            items.each(function (e) {
                                var dataItem = $scope.kendo.dataItem(this);
                                var ddttimeDoreType = $(this).find('.timeDoreTypeTemp');
                                var ddttimeYearTypeTempType = $(this).find('.timeYearTypeTemp');

                                $(ddttimeDoreType).kendoDropDownList({
                                    enable: true,
                                    value: dataItem.timeDoreTypeId,
                                    dataSource: timeDoreType,
                                    dataTextField: "text",
                                    dataValueField: "value",
                                    change: $scope.onTimeDoreType
                                });
                                $(ddttimeYearTypeTempType).kendoDropDownList({
                                    enable: true,
                                    value: dataItem.timeYearTypeId,
                                    dataSource: timeYearType,
                                    dataTextField: "text",
                                    dataValueField: "value",
                                    change: $scope.onShayestegiScore
                                });
                            });
                        },
                        columns: columns
                    };
                    $scope.onTimeDoreType = function (e) {
                        var element = e.sender.element;
                        var row = element.closest("tr");
                        var dataItem = $scope.kendo.dataItem(row);
                        dataItem.timeDoreTypeId = e.sender.value();
                    }
                    $scope.onTimeYearTypeId = function (e) {
                        var element = e.sender.element;
                        var row = element.closest("tr");
                        var dataItem = $scope.kendo.dataItem(row);
                        dataItem.timeYearTypeId = e.sender.value();
                    }

                    $scope.onDblClickRow = function (row) {
                        $scope.closeForm(row);
                    }

                    $scope.closeForm = function (item) {
                        $uibModalInstance.close(item);
                    };

                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                };
                
            }
        };
    }]);
});
