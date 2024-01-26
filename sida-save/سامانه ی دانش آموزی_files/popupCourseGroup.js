define(['angularAMD'], function (app) {
    app.directive('popupCourseGroup', ['dataService', 'messageService', '$uibModal', function (dataService, messageService, $modal) {
        return {
            restrict: 'EA',
            scope: {
                url: '@',
                setApi: "&",
                onChange: "&",
                filter: "=?",
                api: "=?",
                ngDisabled: "=disabled",
                title: "=?",
                multiSelect: "@"
            },
            require: 'ngModel',
            templateUrl: '/Sida/App/template/popupCourseGroup.html',
            link: function ($scope, $elem, $attrs, ngModel) {
                $scope.api = {};
                $scope.api.remove = function () {
                    $scope.prsname = null;
                }
                $scope.api.add = function (str) {
                    $scope.title = str;
                }
                ngModel.$render = function () {
                    if (!ngModel.$viewValue) {
                        $scope.prsname = null;
                    }
                }
                $scope.setApi({ api: $scope.api });

                $scope.loadPanelGrid = function () {
                    if ($scope.ngDisabled) {
                        return;
                    }
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        templateUrl: 'loadPanelCourseGroup.html',
                        controller: $scope.loadPanelGridClassRoomController,
                        windowClass: 'showModalPopupFull',
                        resolve: {
                            filter: function () {
                                return !$scope.filter ? [] : $scope.filter;
                            },
                            multiSelectRow: function () {
                                return $scope.multiSelect;
                            },
                            url: function () {
                                return $scope.url;
                            }

                        }
                    });
                    modalInstance.result.then(function (items) {
                        if (angular.isArray(items)) {
                            $scope.title = items.length + " مورد";
                            $scope.onChange({ item: items });
                        } else {
                            ngModel.$setViewValue(items.id);
                            $scope.title = items.title.trim();
                            $scope.onChange({ item: items });
                        }
                    });
                }

                $scope.loadPanelGridClassRoomController = function ($scope, $uibModalInstance, filter, multiSelectRow, url) {
                    $scope.model = {};
                    $scope.selectedItemRow = null;
                    $scope.safeApply = function (fn) {
                        var phase = this.$root.$$phase;
                        if (phase === '$apply' || phase === '$digest')
                            this.$eval(fn);
                        else
                            this.$apply(fn);
                    };


                    $scope.acceptClosePopup = function () {
                        if ($(".grid-class-room .k-state-selected").length > 0) {
                            var selects = $(".grid-class-room .k-state-selected");
                            if (multiSelectRow == "true") {
                                var multiselects = selects.map(function (idx, sel) {
                                    return $scope.kendo.dataItem(sel)
                                });
                                var items = [];
                                for (var i = 0; i < multiselects.length; i++) {
                                    items.push(multiselects[i]);
                                }
                                $uibModalInstance.close(items);
                            } else {
                                var selects = $(".grid-class-room .k-state-selected");
                                var item = $scope.kendo.dataItem(selects);
                                $uibModalInstance.close(item);
                            }


                        }
                        else {
                            messageService.error('', "یک رکورد را انتخاب کنید");
                        }

                    };

                    $scope.gridOptions = {
                        dataSource: {
                            type: "json",
                            transport: {
                                read: {
                                    type: "post",
                                    url: url ? url : 'api/CourseGroup/GetCourseGroupByClassRoom',
                                    dataType: "json",
                                    data: filter
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
                                        courseId: { type: "number" },
                                        id: { type: "number" },
                                        title: { type: "string" },
                                    },
                                }
                            },
                            pageSize: 50,
                            serverPaging: true,
                            serverFiltering: true,
                            serverSorting: true
                        },
                        selectable: multiSelectRow == "true" ? false : "row",
                        multiselect: multiSelectRow == "true" ? true : false,
                        height: 400,
                        filterable: true,
                        sortable: true,
                        pageable: {
                            numeric: false,
                            butonCount: 5,
                            alwaysVisible: true,
                            previousNext: true,
                            pageSizes: true
                        },
                        dataBound: function (e) {
                            $scope.kendo = e.sender;
                            $(".main-grid tbody tr").find('.k-button').removeAttr("href");
                            if (multiSelectRow == "true") {
                                $(".main-grid thead tr .checkboxCheckAllGrid").prop("checked", false);
                            }
                        },
                        change: function () {
                            let rowitem = this.dataItem(this.select())
                            $scope.safeApply(function () {
                                $scope.selectedItemRow = rowitem;
                            });
                        },
                        columns: [
                            {
                                field: "groupCode", width: 100,
                                title: "کد گروه "
                            },
                            {
                                field: "gradeTypeTitle", width: 100, filterable: false, sortable: false,
                                title: "پایه ", headerTemplate: '<a class="k-link" >پایه</a>' 
                            },
                            {
                                field: "classRoomTitle",
                                title: "کلاس ", 
                            },
                            {
                                field: "classRoomCode", width: 120,
                                title: "کد کلاس ",
                            },
                            {
                                field: "courseId", width: 120,
                                title: "کد درس "
                            },
                            {
                                field: "title",
                                title: "درس "
                            },
                            {
                                field: "name",
                                title: "نام معلم "
                            },
                            {
                                field: "lName",
                                title: "نام خانوادگی "
                            },
                            {
                                field: "examModelType",
                                title: "نوبت "
                            },
                            {
                  
                                headerTemplate: '<a class="k-link" > نوع درس</a>',
                                field: "courseTypeId", filterable: false, sortable: false,
                                title: "نوع درس", template: "<a class='link-status '>#= courseTypeId==3 ?'نهایی':'عادی'  #</a>", width: 120,
                            }
                            
                        ]
                    };

                    $scope.onDblClickRow = function (row) {
                        if (multiSelectRow != "true") {
                            $scope.closeForm(row);

                        }
                    }
                    $scope.closeForm = function (item) {
                        $uibModalInstance.close(item);
                    };

                    $scope.closePopup = function () {
                        $uibModalInstance.dismiss('cancel');
                    };

                };
            },

        };
    }]);
});
