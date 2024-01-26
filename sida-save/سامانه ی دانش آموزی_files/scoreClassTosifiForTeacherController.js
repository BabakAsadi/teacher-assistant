define(['app', '/Sida/App/directives/popupCourseGroup.js', '/Sida/App/services/scoreComputService.js'], function (app) {
    app.register.controller("scoreClassTosifiForTeacherController", ["scoreComputService", "$rootScope", "dataService", "$scope", "$state", "$stateParams", "messageService",
        function (scoreComputService, $rootScope, dataService, $scope, $state, $stateParams, messageService) {
            $scope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest')
                    this.$eval(fn);
                else
                    this.$apply(fn);
            };

            $scope.isApproval = false
            if ($stateParams.obj && $stateParams.obj.key) {

                $scope.isApproval = true
            }

            $rootScope.panelDescFrom = "(با زدن کلیک در بالای ستون نتایج مقیاس برای تمام دانش اموزان تکرار می شود)";
            $scope.model = {};
            $scope.data = {};
            $scope.comboOptionShiftTypes = [{ id: 1, title: 'نوبت اول' }, { id: 2, title: 'نوبت دوم' }, { id: 3, title: 'نوبت تابستان' }];
            $scope.height = $(".card-body").height() - 50;
            $scope.modelFilter = {};
            $scope.modelCourseGroup = null;


            var columns = [
                {
                    type: 1,
                    field: "studentId", filterable: false, sortable: false,
                    title: "کد ", width: 100
                },
                {
                    type: 1,
                    field: "lName", filterable: false, sortable: false,
                    title: "نام خانوادگی", width: 140
                },
                {
                    type: 1, filterable: false, sortable: false,
                    field: "name",
                    title: "نام", width: 140
                }
            ];

            $scope.gridOptions = {
                dataSource: {
                    type: "json",
                    data: [],
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
                                studentId: { type: "number" },
                                nimeh1: { type: "number", editable: true },
                            },
                        }
                    },
                    pageSize: 150,
                    serverPaging: false,
                    serverFiltering: false,
                    serverSorting: false,
                    sort: { field: "courseId", dir: "asc" }
                },
                selectable: "row",
                height: $scope.height - 10,
                filterable: true,
                sortable: true,
                pageable: {
                    numeric: false,
                    butonCount: 5,
                    alwaysVisible: false,
                    previousNext: false,
                    pageSizes: false
                },
                dataBound: function (e) {
                    $scope.kendo = e.sender;
                    $(".panel-scoreClassTosifi-grid  tbody .form-control").prop("disabled", true);

                    var dataItems = $scope.kendo.dataItems();
                    if (dataItems.length > 0) {
                        $scope.getMessage(dataItems);
                    }

                },
                columns: []
            };

            $scope.onChangecourseGroup = function (row) {
                $scope.model.shiftId = null;
                $scope.data = {};
                $scope.modelCourseGroup = row;
                $scope.dataGrid = null;
                $scope.kendo.dataSource.data([]);
                $scope.generateTitle();
               
            };

            $scope.bindColumnCourse = function () {
                var oldOptions = $scope.kendo.getOptions();
                var gridOptioncolumns = angular.copy(columns);
                var dataGrid = angular.copy($scope.dataGrid);
                var title = $scope.modelCourseGroup.title.split('-')[1];
                if ($scope.model.statusClient == 1 || $scope.model.statusClient == 3) {
                    var row = { sortable: false, filterable: false, title: title, width: 60, editable: true, field: $scope.classRow };
                    row.template = '<input  value="#=' + $scope.classRow + '? ' + $scope.classRow + ':""#"  maxlength="1" class="' + $scope.classRow + ' form-control-score form-control form-control-sm text-numberic nav-enter" type="text" ng-model=\"this.dataItem.' + $scope.classRow + '\" />';
                    row.headerTemplate = "<span style='color:#7b68ee' data-value='0' class='" + $scope.classRow + "'>" + title + "</span>"
                    gridOptioncolumns.push(row);


                }
                if ($scope.model.statusClient == 2 || $scope.model.statusClient == 3) {
                    var dataRow = dataGrid[0];
                    dataRow.items.forEach(function (itemrow) {
                        row = { sortable: false, filterable: false, title: itemrow.title, width: 60, editable: true, field: itemrow.class };
                        row.template = '<input data-row="' + itemrow.topicId + '" value="#=' + itemrow.class + '? ' + itemrow.class + ':""#"  maxlength="1" class="form-control-score ' + itemrow.class + ' form-control form-control-sm text-numberic nav-enter" type="text" ng-model=\"this.dataItem.' + itemrow.class + '\" />';
                        row.headerTemplate = "<span  data-value='0' class='" + itemrow.class + "'>" + itemrow.title + "</span>"
                        gridOptioncolumns.push(row);
                    });
                    dataGrid.forEach(function (itemrow) {
                        itemrow.items.forEach(function (sub) {
                            itemrow[sub.class] = sub.value;
                        });
                    });
                }
                var row = { sortable: false, filterable: false, title: 'توصیف عملکرد', width: 280, editable: true };
                row.template = '<input value="#=desc?desc :""#" style="width:95% !important; text-align: right !important;"   maxlength="1000" class="form-control form-control-sm form-control-desc" type="text"  />';
                gridOptioncolumns.push(row);
                oldOptions.columns = gridOptioncolumns;
                $scope.kendo.setOptions(oldOptions);
                $scope.kendo.dataSource.data(dataGrid);
            }


            $scope.bindColumn = function (st) {
                if ($scope.dataGrid) {
                    $scope.bindColumnCourse();
                }
                else {
                    dataService.get("api/TopicScoreTosifi/GetTopicScoreTosifi", { courseGroup: [$scope.modelCourseGroup.id], courseId: $scope.modelCourseGroup.courseId, name: $scope.classRow }).then(function (res) {
                        $scope.dataGrid = res;
                        $scope.bindColumnCourse();
                        if ($scope.dataGrid != null && $rootScope.userContext.stageTypeId == 31 && $scope.dataGrid.filter((e) => [5101, 5105].indexOf(e.majorId) > -1) ) {
                            $scope.kamTavan = true;
                        }
                        else {
                            $scope.kamTavan = false;
                        }

                    });
                }
            }

            $scope.columnsDynamic = [];

            $scope.onChangeShift = function (item) {
                $scope.data = {};
                $scope.model.statusScore = false;
                $scope.generateTitle();
                $scope.dataGrid = null;
                $scope.kendo.dataSource.data([]);

                switch ($scope.model.shiftId) {
                    case '1':
                        //messageService.error("موقتا بسته می باشد");  // با توجه به حرف س.ا
                        //return;
                        $scope.setScore("nimeh1", 2);
                        break;
                    case '2':
                        messageService.error("موقتا بسته می باشد"); // با توجه به حرف س.ا
                        return;
                        $scope.setScore("nimeh2", 4);
                        break;
                    case '3':
                        messageService.error("موقتا بسته می باشد"); // با توجه به حرف س.ا
                        $scope.setScore("shahrivar", 5);
                        break;
                }
            };

            $scope.setScore = function (classRow, periodTypeId) {
                $scope.model.statusClient = 3;
                $scope.classRow = classRow;
                $scope.model.statusScore = true;
                $scope.dataGrid = null;
                $scope.kendo.dataSource.data([]);
                $scope.bindColumn(3);
                $scope.titleAccept = 'تایید و ارسال به مدیر';
                $scope.periodApprovalGradesTypeId = periodTypeId;
                $(".panel-scoreClass-grid tbody .selected-custome").removeClass("selected-custome");

            }

            $scope.accept = function () {
                var status = true;
                var statusEmpty = true;
                var message = "";
                var inputs = $(".panel-scoreClassTosifi-grid input[type='text']");
                var inputDescs = $(".panel-scoreClassTosifi-grid .form-control-desc");
                inputDescs.removeClass("warning-req");
                inputs.removeClass("warning-req");
                for (var i = 0; i < inputs.length; i++) {
                    var item = inputs[i]
                    if ($(item).val() == "") {
                        // $(item).addClass("warning-req");
                        // status = false;
                    }
                    else if ($(item).val() != "0" && (parseInt($(item).val()) > 4 || parseInt($(item).val()) < 1) && $scope.kamTavan == false) {
                        $(item).addClass("warning-req");
                        statusEmpty = false;
                        message = "مقياس ها را بین عدد 1 تا 4 انتخاب کنید";
                    }
                    else if ($(item).val() != "0" && (parseInt($(item).val()) > 5 || parseInt($(item).val()) < 1) && $scope.kamTavan == true) {
                        $(item).addClass("warning-req");
                        statusEmpty = false;
                        message = "مقياس را بین عدد 1 تا 5 انتخاب کنید";

                    }
                }

                if (!statusEmpty) {
                    messageService.error(message);
                    return;
                }
                for (var i = 0; i < inputDescs.length; i++) {
                    var inputScore = $(".panel-scoreClassTosifi-grid tbody tr:eq(" + i + ") ." + $scope.classRow).val();
                    var item = inputDescs[i];

                    if (inputScore && (!$(item).val() || $(item).val().length < 30)) {
                        $(item).addClass("warning-req");
                        status = false;
                    }
                }

                if (!status) {
                    messageService.error("توصیف عمکرد یا خالی است یا تعداد کارکتر وارده شده کافی نیست");
                    return;
                }
                var dataItems = $scope.kendo.dataItems();
                var entityRow = [];

                dataItems.forEach(function (item, inex) {
                    var inputDesc = $(".panel-scoreClassTosifi-grid tbody tr[data-uid='" + item.uid + "'] .form-control-desc").val();
                    if ($scope.model.statusClient == 1 || $scope.model.statusClient == 3) {
                        var inputElm = $(".panel-scoreClassTosifi-grid tbody tr[data-uid='" + item.uid + "'] ." + $scope.classRow);
                        var obj = { tosifiDesc: inputDesc, name: $scope.classRow, isCourse: true, studentId: item.studentId, courseScoreId: item.id, courseId: item.courseId };
                        obj[$scope.classRow] = inputElm.val();
                        entityRow.push(obj);
                    }
                    if ($scope.model.statusClient == 2 || $scope.model.statusClient == 3) {
                        var inputElms = $(".panel-scoreClassTosifi-grid tbody tr[data-uid='" + item.uid + "'] .form-control-score");
                        for (var i = 0; i < inputElms.length; i++) {
                            if (!$(inputElms[i]).hasClass($scope.classRow)) {
                                var obj = { name: $scope.classRow, isCourse: false, studentId: item.studentId, courseScoreId: item.id, courseId: item.courseId };
                                obj[$scope.classRow] = $(inputElms[i]).val();
                                obj.topicCode = $(inputElms[i]).data("row");
                                entityRow.push(obj);
                            }
                        }

                    }
                });

                dataService.post("api/TopicScoreTosifi/InsertTopicScoreTosifi", { courseId: $scope.modelCourseGroup.courseId, courseGroupId: $scope.modelCourseGroup.id, name: $scope.classRow, topicScores: entityRow, periodApprovalGradesTypeId: $scope.periodApprovalGradesTypeId }).then(function (res) {
                    if (res.rabbitMQ) {
                        messageService.success("نمرات برای اعتبار سنجی در صف قرار داده شده");
                    }
                    else {
                        messageService.success("عملیات با موفقیت انجام شد");
                    }

                    $scope.dataGrid = null;
                });
            }

            $scope.onReady = function (kendo) {
                $scope.kendo = kendo;
            }

            $scope.generateTitle = function (titleRow) {
                $scope.safeApply(function () {
                    $scope.model.tilteGrid = "نمایش اطلاعات";
                    if ($scope.model.classRoomTitle) {
                        $scope.model.tilteGrid = "پایه  " + $scope.model.classRoomTitle;
                    }
                    if ($scope.modelCourseGroup) {
                        $scope.model.tilteGrid = $scope.model.tilteGrid + "  / درس  " + $scope.modelCourseGroup.title + "  / کد  " + $scope.modelCourseGroup.courseId;
                    }
                    if ($scope.model.shiftId) {
                        switch ($scope.model.shiftId) {

                            case '1': $scope.model.shiftTitle = "  نوبت اول  "; break;
                            case '2': $scope.model.shiftTitle = " نوبت دوم  "; break;
                            case '3': $scope.model.shiftTitle = "  تابستان  "; break;
                        }
                        $scope.model.tilteGrid = $scope.model.tilteGrid + "  /  " + $scope.model.shiftTitle;
                    }
                    if (titleRow) {
                        $scope.model.tilteGrid = $scope.model.tilteGrid + "  /  " + titleRow;
                    }
                });
            }

            $scope.generateTitle();
            $scope.approval = function () {
                var status = true;
                var statusEmpty = true;
                var inputs = $(".panel-scoreClassTosifi-grid input[type='text']");
                var inputDescs = $(".panel-scoreClassTosifi-grid .form-control-desc");
                inputDescs.removeClass("warning-req");
                inputs.removeClass("warning-req");
                var dataItems = $scope.kendo.dataItems();
                for (var i = 0; i < inputs.length; i++) {
                    var item = inputs[i]
                    if ($(item).val() == "") {
                        $(item).addClass("warning-req");
                        status = false;
                    }
                    else if ($(item).val() != 0 && (parseInt($(item).val()) > 4 || parseInt($(item).val()) < 1) && $scope.kamTavan == false) {
                        $(item).addClass("warning-req");
                        statusEmpty = false;
                        messageService.error("مقياس ها را بین عدد 1 تا 4 انتخاب کنید");
                    }
                    else if ($(item).val() != 0 && (parseInt($(item).val()) > 5 || parseInt($(item).val()) < 1) && $scope.kamTavan == true) {
                        $(item).addClass("warning-req");
                        statusEmpty = false;
                        message = "مقياس را بین عدد 1 تا 5 انتخاب کنید";

                    }
                }
                //if (!status) {
                //  //  messageService.error("نتايج را بصورت کامل وارد نمایید");
                //   // return;
                //}
                //if (!statusEmpty) {
                //    messageService.error("مقياس ها را بین عدد 1 تا 4 انتخاب کنید");
                //    return;
                //}

                if (!statusEmpty) {
                    messageService.error(message);
                    return;
                }
                for (var i = 0; i < inputDescs.length; i++) {
                    var inputScore = $(".panel-scoreClassTosifi-grid tbody tr:eq(" + i + ") ." + $scope.classRow).val();
                    var item = inputDescs[i];

                    if (inputScore && (!$(item).val() || $(item).val().length < 30)) {
                        $(item).addClass("warning-req");
                        status = false;
                    }
                }

                if (!status) {
                    messageService.error("توصیف عمکرد یا خالی است یا تعداد کارکتر وارده شده کافی نیست");
                    return;
                }
                $(".modal-dialog-ApprovScore").modal('show');
                return;

            }
            $scope.saveApproval = function () {
                $(".modal").modal('hide');
                dataService.post("api/FinalApprovalGrades/Insert", {
                    courseGroupId: $scope.modelCourseGroup.id
                    , periodApprovalGradesTypeId: $scope.periodApprovalGradesTypeId
                    , classRoomId: $scope.modelCourseGroup.classRoomId
                }).then(function (res) {
                    messageService.success("عملیات با موفقیت انجام شد");
                    $(".panel-scoreClass-grid tbody tr .form-control").prop("disabled", true);
                    $scope.model.statusScore = false;
                    $scope.setValue = false;
                });
            }

            $scope.getMessage = function () {
                var courseGroupId = $scope.modelCourseGroup.id;
                $scope.data = {};
                dataService.post("api/FinalApprovalGrades/GetMessage", {
                    courseGroupId: courseGroupId,
                    periodApprovalGradesTypeId: $scope.periodApprovalGradesTypeId
                }).then(function (res) {
                    if (res) {
                        $scope.data = res;
                        $scope.model.disableScore = true;
                        if (res.classScoreStudent.length > 0) {
                            var dataItems = $scope.kendo.dataItems()
                            res.classScoreStudent.forEach(function (t) {
                                var obj = dataItems.filter(function (e) { return e.studentId == t.studentId && t.isActive })[0];
                                if (obj && !$scope.isApproval) {
                                    $(".panel-scoreClassTosifi-grid  tbody tr[data-uid='" + obj.uid + "'] input:text").prop("disabled", false);
                                    $(".panel-scoreClassTosifi-grid tbody  tr[data-uid='" + obj.uid + "'] td").addClass("selected-custome");
                                }
                            });
                        }
                        else if (!$scope.isApproval && res.statusApprovalGradesTypeId == 1) {
                            $(".panel-scoreClassTosifi-grid  tbody .form-control").prop("disabled", false);
                        }
                        else if ($scope.isApproval) {
                            $(".panel-scoreClassTosifi-grid  tbody .form-control").prop("disabled", true);
                        }
                        else {
                            $(".panel-scoreClassTosifi-grid  tbody .form-control").prop("disabled", true);
                        }
                    }
                   
                    else {
                        $scope.model.disableScore = false;
                        if (!$scope.isApproval) {
                            $(".panel-scoreClassTosifi-grid  tbody .form-control").prop("disabled", false);
                        }
                       
                    }
                });
            }

            $('.panel-scoreClassTosifi-grid').on('click', 'thead th', function () {
                if ($scope.isApproval) {
                    return;
                }
                if ($scope.data.id) {
                    return;
                }
                var elm = $(this).find("[data-value]");
                if (elm.length > 0) {
                    var classRow = elm.attr("class")
                    var value = $(elm).data("value");
                    if (value == 4 && $scope.kamTavan == false) {
                        value = 1;
                    }
                    else if (value == 5 && $scope.kamTavan == true) {
                        value = 1;
                    }
                    else {
                        value++;
                    }
                    $(".panel-scoreClassTosifi-grid tbody td ." + classRow).val(value);
                    $(elm).data("value", value)
                }
            });
            $('.panel-scoreClassTosifi-grid').on('click', 'tbody .form-control-score', function () {
                if ($scope.isApproval) {
                    return;
                }
                var val = $(this).val();
                if (!val) {
                    val = 1;
                }
                else if (val == 4 && $scope.kamTavan == false) {
                    val = 1;
                }
                else if (val == 5 && $scope.kamTavan == true) {
                    val = 1;
                }
                else {
                    val = parseInt(val) + 1;
                }
                $(this).val(val);
                $(this).select();
            });
        }]);
});
