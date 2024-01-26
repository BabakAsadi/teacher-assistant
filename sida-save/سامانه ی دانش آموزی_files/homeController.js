define(['app'], function (app) {
    app.register.controller("homeController", ["$uibModal", "dataService", "$scope", "$state", "$rootScope", "messageService",
        function ($modal, dataService, $scope, $state, $rootScope, messageService) {
            $scope.height = $(".card-body").height() - 600;
            $scope.models = [];
            $scope.lastUpdatep1 = [];
            $scope.lastUpdatep2 = [];
            $scope.isSchool = false;
            if ($rootScope.userContext.userTypeId == 4) {
                $scope.isSchool = true;
                $scope.setPageTalfigh = function () {
                    $(".alert-sick").modal("hide");
                    $(".modal").hide();
                    setTimeout(function () {
                        $state.go("sickStudent");
                    }, 1000);

                }

                //dataService.post('api/Student/GetSickStudentCount').then(function (res) {
                //    if (res > 0) {
                //        $scope.sickNum = res
                //        $(".alert-sick").modal("show");
                //    }
                //});


                //$scope.typeTitle = "";
                //if ([314, 411, 511, 602, 702, 802, 914].indexOf($rootScope.userContext.roleTypeId) > -1) {
                //    dataService.get('api/PCR/Get').then(function (res) {
                //        $scope.models = res;
                //        $(".alert-moragheb").modal("show");
                //    });
                //}

                var schoolAddress = localStorage.getItem("schoolAddress4");
                if (!schoolAddress) {
                    localStorage.setItem("schoolAddress4", 1);
                    setTimeout(function () {
                        $state.go("registryAddress");
                    }, 1000);
                }
            }

            dataService.post('api/LastUpdate/GetList').then(function (res) {
                if (res) {
                    var lastUpdateData = res[0].persianSetDate;
                    for (var i = 0; i < res.length; i++) {
                        if (lastUpdateData == res[i].persianSetDate) {
                            $scope.lastUpdatep1.push({
                                persianSetDate: res[i].persianSetDate,
                                importantLevel: res[i].importantLevel,
                                message: res[i].message
                            });
                        }
                    }
                }
            });

            $scope.pagestudentPCR = function () {
                $(".alert-moragheb").modal("hide");
                $(".modal").hide();
                setTimeout(function () {
                    $state.go("studentPCR");
                    $(".alert-moragheb").modal("hide");
                    $(".modal").hide();
                }, 1000);

            }

        }]);
});
