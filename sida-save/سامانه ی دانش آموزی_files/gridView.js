define(['angularAMD'], function (app) {
    app.directive('gridView', ['$parse', function ($parse) {
        return {
            restrict: 'E',
            scope: {
                options: "=?",
                api: "=?",
                apiLoad: "&",
                onDblClick: "&",
                onClick: "&",
                onReady: "&",
                apiEvent: "&",
                norownumber:'@'
            },
            replace: true,
            template: '<div class="k-rtl main-grid no-copy-pase"></div>',
            link: function ($scope, $elem, $attrs) {
                if ($attrs.copypase && $attrs.copypase == "true") {
                    $($elem).removeClass("no-copy-pase")
                }
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };
                var rowNumberTemplate = function (row) {
                    var base = 0;
                    if ($scope.grid.pager) {
                        var page = $scope.grid.pager.page();
                        if (page === 0)
                            page = 1;
                        base = (page - 1) * $scope.grid.pager.pageSize();
                    }
                    var index = $scope.grid.dataSource.indexOf(row);
                    return base + (index + 1);
                }
                if ($scope.options && $scope.options.dataSource && $scope.options.dataSource.transport) {
                    $scope.options.dataSource.transport.parameterMap = function (data, type) {
                        if (type == "read") {
                            return kendo.stringify(data);
                        }
                    }
                    if ($scope.options.dataSource.transport && $scope.options.dataSource.transport.read) {
                        //$scope.options.dataSource.transport.read.type = "post";
                        $scope.options.dataSource.transport.read.contentType = "application/json; charset=utf-8";
                    }
                    $scope.options.filterable = { extra: false };
                    angular.isDefined($scope.options.selectable);
                    $scope.options.selectable = angular.isDefined($scope.options.selectable) ? $scope.options.selectable : "row";
                    $scope.page = ($scope.options.dataSource && !$scope.options.dataSource.serverPaging) ? false : true;
                    if (!$scope.options.pageable) {
                        $scope.options.pageable = {};
                    }
                    $scope.options.pageable.refresh = $scope.page;
                    $scope.options.pageable.pageSizes = angular.isDefined($scope.options.pageable.pageSizes) ? $scope.options.pageable.pageSizes : $scope.page;
                }
                if ($scope.options && $scope.options.multiselect) {
                    var checkBox = { headerTemplate: '<input class="checkboxCheckAllGrid" type="checkbox" />', width: 30, template: '<div class="form-check"><input type="checkbox" class="ck-row-item form-check-input">  </div>' };
                    $scope.options.columns.unshift(checkBox);
                }
                var rowNumber = {
                    headerAttributes: {
                        "class": 'column-row-number'
                    },
                    attributes: {
                        "class": 'column-row'
                    },
                    name: "row-number",
                    template: rowNumberTemplate, width: 70, title: "ردیف"
                };
                if ($scope.options.columns) {
                    $scope.options.columns = $scope.options.columns.filter(function (e) { return e.name != 'row-number' });
                    if (!$scope.norownumber) {
                        $scope.options.columns.unshift(rowNumber);
                    }
                }

                $scope.grid = $($elem).kendoGrid($scope.options).data("kendoGrid");
                setTimeout(function () { $scope.onReady({ kendo: $scope.grid }); }, 100);
                if ($scope.options && $scope.options.selectable && $scope.options.selectable == "row") {
                    $($elem).off("dblclick", "tr");
                    $($elem).on("dblclick", "tr", function () {
                        $scope.safeApply(function () {
                            $scope.selecteditems = $scope.grid.dataItem($scope.grid.select());
                            $scope.onDblClick({ items: $scope.selecteditems });
                        });
                    })
                }

                else if ($scope.options && $scope.options.multiselect) {
                    $($elem).on("click", "thead tr .checkboxCheckAllGrid", function () {
                        var checked = $(this).is(":checked");
                        $($elem).find(".form-check-input:not(:disabled)").prop("checked", checked);
                        if (checked) {
                            $($elem).find("tbody tr:not(.disabled)").addClass("k-state-selected");
                        }
                        else {
                            $($elem).find("tbody tr:not(.disabled)").removeClass("k-state-selected");
                        }

                        $scope.safeApply(function () { $scope.onClick(); });
                    });

                    $($elem).on("click", "tbody tr", function () {
                        $($elem).find("thead tr .checkboxCheckAllGrid").prop("checked", false);
                        if (!$(this).hasClass("disabled")) {
                            if ($(this).hasClass("k-state-selected")) {
                                $(this).removeClass("k-state-selected");
                            }
                            else {
                                $(this).addClass("k-state-selected");
                            }

                            $($elem).find(".form-check-input").prop("checked", false);
                            $($elem).find(".k-state-selected .form-check-input").prop("checked", true);

                            $scope.safeApply(function () { $scope.onClick(); });
                        }
                    });
                }
                $($elem).on('keypress', '.text-numberic', function (event) {
                    var ew = event.which;
                    if (ew == 46) {
                        var valuekey = $(this).val();
                        if (valuekey.indexOf('/') > -1) {
                            return false;
                        }
                        $(this).val(valuekey + "/");
                        return false;
                    }
                    if (48 <= ew && ew <= 57)//0-9
                        return true;

                    return false;
                });

                $($elem).on('blur', '.text-numberic', function (event) {
                    let val = $(this).val();
                    if (val && val.length == 4 && val.indexOf("/") == -1) {
                        $(this).val(val.substr(0, 2) + '/' + val.substr(2))
                    }
                    else if (val && val.length > 4) {
                        if (val.replace(/[^0-9]/g, '').length > 4) {
                            $(this).val("");
                        }
                    }
                });

                $($elem).on('keyup', '.nav-enter', function (e) {
                    if (e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 38) {
                        var position = $(this).position();
                        var height = $($elem).find(".k-grid-content").height() - 70;
                        indextd = $(this).closest("td").index();
                        indextr = $(this).closest("tr").index();
                        if (e.keyCode == 38) {
                            indextr--;
                            indextr = indextr == -1 ? 0 : indextr;
                            if (position.top < 100) {
                                $($elem).find('div.k-auto-scrollable').animate({ scrollTop: position.top - 100 }, 500);
                            }
                        }
                        else {
                            var length = $($elem).find("tbody tr").length - 1;
                            if (length > indextr) {
                                indextr++;
                            }
                            if (position.top > height) {
                                $($elem).find('div.k-auto-scrollable').animate({ scrollTop: height + -100 }, 500);
                            }
                        }

                        $($elem).find("tbody tr:eq(" + indextr + ") td:eq(" + indextd + ") input[type='text']").select().focus();
                    }
                });

                $scope.api = {};
                $scope.api.reload = function () {
                    $scope.grid.dataSource.read();
                }
                $scope.api.getAll = function () {
                    var selects = $($elem).find("tr.k-state-selected");
                    var multiselects = [];
                    for (var i = 0; i < selects.length; i++) {
                        var objGrid = $scope.grid.dataItem(selects[i]);
                        objGrid.index = $(selects[i]).index();
                        multiselects.push(objGrid);
                    }
                    return multiselects;
                }
                $scope.api.setCheckboxSelecteds = function (ids) {
                    $($elem).find('input[type="checkbox"]:not(:disabled)').prop("checked", false);
                    $($elem).find("tr.k-state-selected").removeClass("k-state-selected");
                    if (ids && ids.length > 0) {
                        for (var i = 0; i < ids.length; i++) {
                            var item = $scope.grid.dataSource.get(ids[i]);
                            if (item)
                                $("[data-uid='" + item.uid + "']").find('input').prop('checked', true).trigger('click');
                        }
                    }
                };
                $scope.$applyAsync(function () {
                    $scope.apiLoad({ api: $scope.api });
                });
                $scope.$applyAsync(function () {
                    $scope.apiEvent({ api: $scope.api });
                });


                $(".k-pager-info").hide();
                $(".k-rtl .k-pager-wrap .k-pager-nav.k-pager-last").hide();
                //$(".k-rtl .k-pager-input, .k-rtl .k-pager-numbers li, .k-rtl .k-pager-wrap .k-pager-numbers, .k-rtl .k-pager-wrap>.k-link").find("li:not(.k-pager-numbers .k-link, .k-pager-numbers .k-state-selected)").hide();
            }
        };
    }]);
});
