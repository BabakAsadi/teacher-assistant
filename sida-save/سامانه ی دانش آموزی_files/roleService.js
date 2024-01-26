define(['angularAMD'], function (app) {
    app.service('roleService', ['$rootScope', function ($rootScope) {
        return {
            compute: function () {
                var value  = ' <i class="far fa-info-circle"></i>';
                if ($rootScope.userContext) {
                    if ($rootScope.userContext.userTypeId <= 4) {
                        switch ($rootScope.userContext.userTypeId) {
                            case 0:
                                value = 'کاربر سوپروایزر ';
                                break;
                            case 1:
                            case 5:
                                value += 'کاربر ستاد  سمت <span>' + $rootScope.userContext.roleTitle;
                                break;
                            case 2:
                            case 6:
                                value += 'کاربر استان  <span>' + $rootScope.userContext.stateId + $rootScope.userContext.stateTitle + '</span>سمت <span>' + $rootScope.userContext.roleTitle;
                                break;
                            case 3:
                            case 7:
                                value += 'کاربر منطقه  <span>' + $rootScope.userContext.regionId + $rootScope.userContext.regionTitle + '</span>سمت <span>' + $rootScope.userContext.roleTitle;
                                break;
                            case 4:
                            case 8:
                                var typeTitle = "";
                                var year = $rootScope.userContext.timeYearTypeTitle.split('-');
                                if ($rootScope.userContext.stageTypeId != 3) {
                                    typeTitle = $rootScope.userContext.timeDoreTypeTitle + ' ' + year[1] + '-' + year[0];
                                }
                                else {
                                    typeTitle = year[1] + '-' + year[0];
                                }
                                var titleSchool = $rootScope.userContext.roleTypeId >= 2000 ? ' کاربر مجتمع ورزشی ' : ' کاربر مدرسه';
                                value += titleSchool + '  <span> ' + $rootScope.userContext.schoolId + $rootScope.userContext.schoolTitle + '</span>سمت <span>' + $rootScope.userContext.roleTitle + '</span> مقطع <span>' + $rootScope.userContext.stageTypeTitle + '</span> سال دوره تحصیلی <span class="label-year-dore">' + typeTitle + ' </span> کد منطقه<span>' + $rootScope.userContext.regionId + '</span>   ';
                                //if ([300, 400, 500, 600, 700, 800, 900].indexOf($rootScope.userContext.roleTypeId) > -1) {
                                //    if ($rootScope.userContext.shaadPassword) {
                                //        value += '<span>تایید کد احراز هویت : ' + $rootScope.userContext.shaadPassword + '</span>';
                                //    }
                                //    else {
                                //        value += '<span>تایید کد احراز هویت : ندارد</span>';
                                //    }
                                //}
                                break;
                        }
                    }
                }
                return value;
            },
        }
    }])
});

