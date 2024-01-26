define(['angularAMD'], function (angularAMD) {
    var app = angular.module("app", ["ui.router", "blockUI", "ui.bootstrap", "kendo.directives", 'routeResolverServices']);
    app.config(function (blockUIConfigProvider) {
        blockUIConfigProvider.message("لطفا کمی صبر کنید....");
        blockUIConfigProvider.delay(1);
        blockUIConfigProvider.autoBlock(false);
    });
    var baseUrl = "Sida/App/views/";
    var appVersion = sessionStorage.getItem("verApp");
    var fristPage = "/login";
    if (document.location.href.indexOf("sso") > -1) {
        var objUrl = getquery();
        if (objUrl && objUrl.code) {
            fristPage = "mySSO";
        }
    }



    app.config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', function ($stateProvider, $urlRouterProvider, routeResolverProvider) {
        $urlRouterProvider.when('', fristPage), $urlRouterProvider.otherwise(fristPage),
            $stateProvider.state('home', angularAMD.route({
                title: 'صفحه ی اصلی',
                url: '/home',
                controller: 'homeController',
                templateUrl: baseUrl + 'home/home.html?',
                controllerUrl: baseUrl + 'home/homeController.js',
                params: {
                    obj: null,
                },
            }))
                .state('registerSampad', angularAMD.route({
                    title: 'ثبت نام مدارس سمپاد',
                    url: '/registerSampad',
                    controller: "registerSampadController",
                    templateUrl: baseUrl + "cartableRegister/registerSampad/registerSampad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/registerSampad/registerSampadController.js',
                    params: {
                        obj: {},
                    },
                }))
            .state('sportsEquipmentSetadView', angularAMD.route({
                    title: 'نهضت ستاد',
                    url: '/sportsEquipmentSetadView',
                    controller: "sportsEquipmentSetadViewController",
                templateUrl: baseUrl + "/report/sportsEquipmentReport/setad/sportsEquipmentSetadView.html?v=" + appVersion,
                controllerUrl: baseUrl + '/report/sportsEquipmentReport/setad/sportsEquipmentSetadViewController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('editAtba', angularAMD.route({
                    title: 'اصلاح اطلاعات اتباع',
                    url: '/editAtba',
                    controller: "editAtbaController",
                    templateUrl: baseUrl + "/register/editAtba/editAtba.html?v=" + appVersion,
                    controllerUrl: baseUrl + '/register/editAtba/editAtbaController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('schoolPayesh', angularAMD.route({
                    title: 'پایش تحصیلی مدرسه',
                    url: '/schoolPayesh',
                    controller: "schoolPayeshController",
                    templateUrl: baseUrl + "/register/payeshTahsily/school/schoolPayesh.html?v=" + appVersion,
                    controllerUrl: baseUrl + '/register/payeshTahsily/school/schoolPayeshController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('mainSahat', angularAMD.route({
                    title: 'کارتابل ساهت',
                    url: '/mainSahat',
                    controller: "mainSahatController",
                    templateUrl: baseUrl + "/sahat/mainSahat/mainSahat.html?v=" + appVersion,
                    controllerUrl: baseUrl + '/sahat/mainSahat/mainSahatController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commissionJamandeCapicity', angularAMD.route({
                    title: 'ظرفیت کمیسیون جامانده',
                    url: '/commissionJamandeCapicity',
                    controller: "commissionJamandeCapicityController",
                    templateUrl: baseUrl + "register/shahed/commissionJamande/commissionJamandeCapicity.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/shahed/commissionJamande/commissionJamandeCapicityController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('preRegisterReport1402', angularAMD.route({
                    title: 'گزارش پیش ثبت نام 1402',
                    url: '/preRegisterReport1402',
                    controller: "preRegisterReport1402Controller",
                    templateUrl: baseUrl + "report/preRegisterReport1402/preRegisterReport1402.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/preRegisterReport1402/preRegisterReport1402Controller.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('preRegisterShahed1402', angularAMD.route({
                    title: 'گزارش پیش ثبت نام شاهد ',
                    url: '/preRegisterReport1402',
                    controller: "preRegisterShahed1402Controller",
                    templateUrl: baseUrl + "report/preRegisterReport1402/preRegisterShahed1402/preRegisterShahed1402.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/preRegisterReport1402/preRegisterShahed1402/preRegisterShahed1402Controller.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('capasityReport', angularAMD.route({
                    title: 'گزارش ظرفیت رشته ها',
                    url: '/capasityReport',
                    controller: "capasityReportController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/capacityHedayatTahsiliForRegion/forSetad/capasityReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/capacityHedayatTahsiliForRegion/forSetad/capasityReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commissionJamande', angularAMD.route({
                    title: 'کمیسیون جامانده',
                    url: '/commissionJamande',
                    controller: "commissionJamandeController",
                    templateUrl: baseUrl + "register/shahed/commissionJamande/commissionJamande.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/shahed/commissionJamande/commissionJamandeController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('scheduleRegister', angularAMD.route({
                    title: 'زمانبدی شاهد',
                    url: '/scheduleRegister',
                    controller: "scheduleRegisterController",
                    templateUrl: baseUrl + "register/shahed/scheduleRegister/scheduleRegister.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/shahed/scheduleRegister/scheduleRegisterController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportKhebreh', angularAMD.route({
                    title: 'سیستم خبره ',
                    url: '/reportKhebreh',
                    controller: "reportKhebrehController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportKhebreh/reportKhebreh.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportKhebreh/reportKhebrehController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('nemonBargStuValiSetad', angularAMD.route({
                    title: 'گزارش اماری ستاد نظرخواهی دانش اموز و والدین ',
                    url: '/nemonBargStuValiSetad',
                    controller: "nemonBargStuValiSetadController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/nemonBargStuVali/forSetad/nemonBargStuValiSetad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/nemonBargStuVali/forSetad/nemonBargStuValiSetadController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportHalandTop1Setad', angularAMD.route({
                    title: '  ستاد گزارش زیرمقیاس ',
                    url: '/reportHalandTop1Setad',
                    controller: "reportHalandTop1SetadController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportHaland/forSetad/reportHalandTop1Setad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportHaland/forSetad/reportHalandTop1SetadController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportHalandTop1State', angularAMD.route({
                    title: '  استان گزارش زیرمقیاس ',
                    url: '/reportHalandTop1State',
                    controller: "reportHalandTop1StateController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportHaland/forState/reportHalandTop1State.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportHaland/forState/reportHalandTop1StateController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportHalandTop1Region', angularAMD.route({
                    title: '  منطقه گزارش زیرمقیاس ',
                    url: '/reportHalandTop1Region',
                    controller: "reportHalandTop1RegionController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportHaland/forRegion/reportHalandTop1Region.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportHaland/forRegion/reportHalandTop1RegionController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportZMTop1Setad', angularAMD.route({
                    title: '   گزارش تیپ ',
                    url: '/reportZMTop1Setad',
                    controller: "reportZMTop1SetadController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportHaland/forSetad/reportZMTop1Setad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportHaland/forSetad/reportZMTop1SetadController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('top1StudentVote', angularAMD.route({
                    title: '   گزارش اولویت اول دانش اموزان ',
                    url: '/top1StudentVote',
                    controller: "top1StudentVoteController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/reportTop1StudentVote/top1StudentVote.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/reportTop1StudentVote/top1StudentVoteController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('teacherMoshaverSetad', angularAMD.route({
                    title: 'گزارش آماری نظرخواهی مشاور و دبیر',
                    url: '/teacherMoshaverSetad',
                    controller: "teacherMoshaverSetadController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/nazarTeacherMoshaverForSchool/forSetad/teacherMoshaverSetad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/nazarTeacherMoshaverForSchool/forSetad/teacherMoshaverSetadController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('nemonBargStuVali', angularAMD.route({
                    title: 'گزارش اسمی نمون برگ نظر خواهی والدین و دانش آموز ',
                    url: '/nemonBargStuVali',
                    controller: "nemonBargStuValiController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/nemonBargStuVali/forSchool/nemonBargStuVali.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/nemonBargStuVali/forSchool/nemonBargStuValiController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('cardFinalSearch', angularAMD.route({
                    title: 'کارت فاینال',
                    url: '/cardFinalSearch',
                    controller: "cardFinalSearchController",
                    templateUrl: baseUrl + "final/cardFinal/cardFinalSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'final/cardFinal/cardFinalSearchController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('normalReg', angularAMD.route({
                    title: 'پیش ثبت نام مدارس',
                    url: '/normalReg',
                    controller: "normalRegController",
                    templateUrl: baseUrl + "cartableRegister/normal/normal.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/normal/normalController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('shahedReg', angularAMD.route({
                    title: 'پیش ثبت نام مدارس شاهد',
                    url: '/shahedReg',
                    controller: "shahedController",
                    templateUrl: baseUrl + "cartableRegister/shahed/shahed.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/shahed/shahedController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commissionReg', angularAMD.route({
                    title: 'کمیسیون',
                    url: '/commissionReg',
                    controller: "commissionController",
                    templateUrl: baseUrl + "cartableRegister/commission/commission.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/commission/commissionController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('demandReg', angularAMD.route({
                    title: 'مدارس پر تقاضا',
                    url: '/demandReg',
                    controller: "demandRegController",
                    templateUrl: baseUrl + "cartableRegister/demand/demand.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/demand/demandController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('sehatSanjiForSchool', angularAMD.route({
                    title: 'گزارش اسمی صحت سنجی',
                    url: '/sehatSanjiForSchool',
                    controller: "sehatSanjiForSchoolController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/sehatSanjiQues/sehatSanjiForSchool.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/sehatSanjiQues/sehatSanjiForSchoolController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('internship', angularAMD.route({
                    title: 'مدیریت دوره های کارورزی',
                    url: '/internship',
                    controller: "internshipController",
                    templateUrl: baseUrl + "register/internship/internship.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/internship/internshipController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('nazarTeacherMoshaverForSchool', angularAMD.route({
                    title: 'گزارش نظرخواهی معلم و مشاور',
                    url: '/nazarTeacherMoshaverForSchool',
                    controller: "nazarTeacherMoshaverForSchoolController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/nazarTeacherMoshaverForSchool/nazarTeacherMoshaverForSchool.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/nazarTeacherMoshaverForSchool/nazarTeacherMoshaverForSchoolController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('sampadTafsiliReport', angularAMD.route({
                    title: 'گزارش تفصیلی سمپاد',
                    url: '/sampadTafsiliReport',
                    controller: "sampadTafsiliReportController",
                    templateUrl: baseUrl + "sampad/sampadReport/sampadTafsiliReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'sampad/sampadReport/sampadTafsiliReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('capacityHedayatTahsiliForRegion', angularAMD.route({
                    title: 'ظرفیت بندی رشته ',
                    url: '/capacityHedayatTahsiliForRegion',
                    controller: "capacityHedayatTahsiliForRegionController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/capacityHedayatTahsiliForRegion/capacityHedayatTahsiliForRegion.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/capacityHedayatTahsiliForRegion/capacityHedayatTahsiliForRegionController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('locationRange', angularAMD.route({
                    title: 'مناطق همجوار برای شاهد',
                    url: '/locationRange',
                    controller: "locationRangeController",
                    templateUrl: baseUrl + "register/shahed/locationRange/locationRange.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/shahed/locationRange/locationRangeController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('easaargaranScore', angularAMD.route({
                    title: 'فرم امتیاز بندی شاهد',
                    url: '/easaargaranScore',
                    controller: "easaargaranScoreController",
                    templateUrl: baseUrl + "register/shahed/easaargaranScore/easaargaranScore.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/shahed/easaargaranScore/easaargaranScoreController.js',
                    params: {
                        obj: {},
                    },
                })).state('nemonBargHedayatTahsily', angularAMD.route({
                    title: 'گزارش آماری فرم های نظرخواهی',
                    url: '/nemonBargHedayatTahsily',
                    controller: "nemonBargHedayatTahsilyController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/nemonBargHedayatTahsily/nemonBargHedayatTahsily.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/nemonBargHedayatTahsily/nemonBargHedayatTahsilyController.js',
                    params: {
                        obj: {},
                    },
                })).state('schoolPopulous', angularAMD.route({
                    title: 'مدارس پر تقاضا',
                    url: '/schoolPopulous',
                    controller: "schoolPopulousController",
                    templateUrl: baseUrl + "register/schoolPopulous/schoolPopulous.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/schoolPopulous/schoolPopulousController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('uploadForOrganizationType', angularAMD.route({
                    title: 'پیوست برای نوع مدرسه',
                    url: '/uploadForOrganizationType',
                    controller: "uploadForOrganizationTypeController",
                    templateUrl: baseUrl + "register/uploadForOrganizationType/uploadForOrganizationType.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/uploadForOrganizationType/uploadForOrganizationTypeController.js',
                    params: {
                        obj: {},
                    },
                })).state('karnamehPoodemaniAll', angularAMD.route({
                    title: 'کارنامه گروهی پودمانی',
                    url: '/karnamehPoodemaniAll',
                    controller: "karnamehPoodemaniAllController",
                    templateUrl: baseUrl + "karnameh/karnamehMotevasetehTwo/karnamehPoodemaniAll.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'karnameh/karnamehMotevasetehTwo/karnamehPoodemaniAllController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('crmSearch', angularAMD.route({
                    title: 'لیست تیکت های ثبت شده',
                    url: '/crmSearch',
                    controller: "crmSearchController",
                    templateUrl: baseUrl + "base/crm/crmSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/crm/crmSearchController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('authorizationFrom', angularAMD.route({
                    title: 'درخواست ثبت کد ملی',
                    url: '/authorizationFrom',
                    controller: "authorizationFromController",
                    templateUrl: baseUrl + "security/authorizationFrom/authorizationFrom.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'security/authorizationFrom/authorizationFromController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reghbatTavanayiSetadReport', angularAMD.route({
                    title: 'گزارش آماری رغبت توانایی',
                    url: '/reghbatTavanayiSetadReport',
                    controller: "reghbatTavanayiSetadReportController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/setadReport/reghbatTavanayiSetadReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/setadReport/reghbatTavanayiSetadReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reghbatTavanayiSchoolReport', angularAMD.route({
                    title: 'گزارش آماری رغبت توانایی مدرسه',
                    url: '/reghbatTavanayiSchoolReport',
                    controller: "reghbatTavanayiSchoolReportController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/schoolReport/reghbatTavanayiSchoolReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/schoolReport/reghbatTavanayiSchoolReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reghbatTavanayiTafsiliSchoolReport', angularAMD.route({
                    title: 'گزارش تفصیلی رغبت توانایی ',
                    url: '/reghbatTavanayiTafsiliSchoolReport',
                    controller: "reghbatTavanayiTafsiliSchoolReportController",
                    templateUrl: baseUrl + "report/reghbatTavanayiReport/schoolReport/reghbatTavanayiTafsiliSchoolReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/reghbatTavanayiReport/schoolReport/reghbatTavanayiTafsiliSchoolReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('sickStudent', angularAMD.route({
                    title: 'نمایش دانش آموزان تلفیقی',
                    url: '/sickStudent',
                    controller: "sickStudentController",
                    templateUrl: baseUrl + "base/sickStudent/sickStudent.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/sickStudent/sickStudentController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('resultHedayatTahsili', angularAMD.route({
                    title: 'نتیجه ی هدایت تحصیلی',
                    url: '/resultHedayatTahsili',
                    controller: "resultHedayatTahsiliController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/resultHedayatTahsili/resultHedayatTahsili.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/resultHedayatTahsili/resultHedayatTahsiliController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('sampadReport', angularAMD.route({
                    title: 'گزارش آماری سمپاد',
                    url: '/sampadReport',
                    controller: "sampadReportController",
                    templateUrl: baseUrl + "sampad/sampadReport/sampadReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'sampad/sampadReport/sampadReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('confirmationStudentSearch', angularAMD.route({
                    title: 'درخواست ثبت کد ملی',
                    url: '/confirmationStudentSearch',
                    controller: "confirmationStudentSearchController",
                    templateUrl: baseUrl + "register/confirmationStudent/confirmationStudentSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/confirmationStudent/confirmationStudentSearchController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('kardaneshDateRegisterSearch', angularAMD.route({
                    title: 'زمان بندی توسعه رشته فنی  حرفه ای و کاردانش ',
                    url: '/kardaneshDateRegisterSearch',
                    controller: "kardaneshDateRegisterSearchController",
                    templateUrl: baseUrl + "base/kardaneshDateRegister/kardaneshDateRegisterSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/kardaneshDateRegister/kardaneshDateRegisterSearchController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('changeCodeStudent', angularAMD.route({
                    title: 'تغییر کد دانش آموزی بر اساس سال و دوره و معرفی دیپلم مجدد',
                    url: '/changeCodeStudent',
                    controller: "changeCodeStudentController",
                    templateUrl: baseUrl + "register/changeCodeStudent/changeCodeStudent.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/changeCodeStudent/changeCodeStudentController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('tarhePakSetad', angularAMD.route({
                    title: 'اطلاعات و آمار دانش آموزان شرکت کننده در طرح پاک',
                    url: '/tarhePakSetad',
                    controller: "tarhePakSetadController",
                    templateUrl: baseUrl + "report/pakReport/setadReport/tarhePakSetad.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/pakReport/setadReport/tarhePakSetadController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('tarhePakSchool', angularAMD.route({
                    title: 'اطلاعات و آمار دانش آموزان شرکت کننده در طرح پاک',
                    url: '/tarhePakSchool',
                    controller: "tarhePakSchoolController",
                    templateUrl: baseUrl + "report/pakReport/schoolReport/tarhePakSchool.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/pakReport/schoolReport/tarhePakSchoolController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('tarhePakRegion', angularAMD.route({
                    title: 'اطلاعات و آمار دانش آموزان شرکت کننده در طرح پاک',
                    url: '/tarhePakRegion',
                    controller: "tarhePakRegionController",
                    templateUrl: baseUrl + "report/pakReport/regionReport/tarhePakRegion.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/pakReport/regionReport/tarhePakRegionController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('tarhePakState', angularAMD.route({
                    title: 'اطلاعات و آمار دانش آموزان شرکت کننده در طرح پاک',
                    url: '/tarhePakState',
                    controller: "tarhePakStateController",
                    templateUrl: baseUrl + "report/pakReport/stateReport/tarhePakState.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/pakReport/stateReport/tarhePakStateController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('hedayatTahsilyForTeacher', angularAMD.route({
                    title: ' هدایت تحصیلی معلم',
                    url: '/hedayatTahsilyForTeacher',
                    controller: "hedayatTahsilyForTeacherController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/hedayatTahsilyForTeacher/hedayatTahsilyForTeacher.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/hedayatTahsilyForTeacher/hedayatTahsilyForTeacherController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('mainHedayatTahsily', angularAMD.route({
                    title: ' انتخاب رغبت و توانایی',
                    url: '/mainHedayatTahsily',
                    controller: "mainHedayatController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/groupHedayatTahsily/mainHedayat/mainHedayat.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/groupHedayatTahsily/mainHedayat/mainHedayatController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('hedayatTahsilyReghbatTavanayi', angularAMD.route({
                    title: ' افزودن مقیاس ',
                    url: '/hedayatTahsilyReghbatTavanayi',
                    controller: "groupHedayatTahsilyReghbatController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/groupHedayatTahsily/hedayatTahsilyReghbat/groupHedayatTahsilyReghbat.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/groupHedayatTahsily/hedayatTahsilyReghbat/groupHedayatTahsilyReghbatController.js',
                    params: {
                        obj: {},
                    },
                }))

                .state('chooseHedayatTahsily', angularAMD.route({
                    title: 'اولویت بندی هدایت تحصیلی',
                    url: '/chooseHedayatTahsily',
                    controller: "chooseHedayatTahsilyController",
                    templateUrl: baseUrl + "register/hedayatTahsilyScores/groupHedayatTahsily/chooseHedayatTahsily.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/groupHedayatTahsily/chooseHedayatTahsilyController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('tarheShahedReport', angularAMD.route({
                    title: 'گزارش طرح شاهد',
                    url: '/tarheShahedReport',
                    controller: "tarheShahedReportController",
                    templateUrl: baseUrl + "report/shahed/tarheShahed/tarheShahedReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/shahed/tarheShahed/tarheShahedReportController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('evaluationMovement', angularAMD.route({
                    title: 'طرح پاک',
                    url: '/evaluationMovement',
                    controller: "evaluationMovementController",
                    templateUrl: baseUrl + "register/evaluationMovement/evaluationMovement.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/evaluationMovement/evaluationMovementController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('manegmentUserFinal', angularAMD.route({
                    title: ' ',
                    url: '/manegmentUserFinal',
                    controller: 'manegmentUserFinalController',
                    controllerUrl: baseUrl + 'final/security/manegmentUser/manegmentUserFinalController.js',
                    templateUrl: baseUrl + 'final/security/manegmentUser/manegmentUserFinal.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('manegmentDoreFinal', angularAMD.route({
                    title: ' ',
                    url: '/manegmentDoreFinal',
                    controller: 'manegmentDoreFinalController',
                    controllerUrl: baseUrl + 'final/base/manegmentDore/manegmentDoreFinalController.js',
                    templateUrl: baseUrl + 'final/base/manegmentDore/manegmentDoreFinal.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('mySSO', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/mySSO',
                    controller: 'mySSOController',
                    controllerUrl: baseUrl + 'security/mySSO/mySSOController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + "security/mySSO/mySSO.html?v=" + appVersion,
                        }
                    },
                    params: {
                        obj: getquery(),
                    },
                }))
                .state('sohaSSO', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/sohaSSO',
                    controller: 'sohaSSOController',
                    controllerUrl: baseUrl + 'security/sohaSSO/sohaSSOController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + "security/sohaSSO/sohaSSO.html?v=" + appVersion,
                        }
                    },
                    params: {
                        obj: getquery(),
                    },
                }))
                .state('shahedSpecialCassesCommission', angularAMD.route({
                    title: 'کمیسیون موارد خاص مدارس شاهد و ایثارگران',
                    url: '/shahedSpecialCassesCommission',
                    controller: 'shahedSpecialCassesCommission',
                    controllerUrl: baseUrl + 'register/shahedSpecialCassesCommission/shahedSpecialCassesCommissionController.js',
                    templateUrl: baseUrl + 'register/shahedSpecialCassesCommission/shahedSpecialCassesCommission.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('insuranceGeneral', angularAMD.route({
                    title: 'بیمه دانش آموزان',
                    url: '/insuranceGeneral',
                    controller: 'insuranceGeneralController',
                    controllerUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneralController.js',
                    templateUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneral.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('insuranceGeneralPersonel', angularAMD.route({
                    title: 'بیمه پرسنل',
                    url: '/insuranceGeneralPersonel',
                    controller: 'insuranceGeneralPersonelController',
                    controllerUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneralPersonelController.js',
                    templateUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneralPersonel.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('insuranceGeneralRegion', angularAMD.route({
                    title: 'بیمه دانش آموزی و پرسنل',
                    url: '/insuranceGeneralRegion',
                    controller: 'insuranceGeneralRegionController',
                    controllerUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneralRegionController.js',
                    templateUrl: baseUrl + 'register/insuranceGeneral/insuranceGeneralRegion.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('talfighiStudent', angularAMD.route({
                    title: 'دانش آموزان تلفیقی',
                    url: '/talfighiStudent',
                    controller: 'talfighiStudentController',
                    controllerUrl: baseUrl + 'register/talfighiStudent/talfighiStudentController.js',
                    templateUrl: baseUrl + 'register/talfighiStudent/talfighiStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('talfighiStudentShow', angularAMD.route({
                    title: 'نمایش دانش آموزان تلفیقی',
                    url: '/talfighiStudentShow',
                    controller: 'talfighiStudentShowController',
                    controllerUrl: baseUrl + 'register/talfighiStudent/talfighiStudentShowController.js',
                    templateUrl: baseUrl + 'register/talfighiStudent/talfighiStudentShow.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('supporting', angularAMD.route({
                    title: 'پشتیبانی',
                    url: '/supporting',
                    controller: 'supportingController',
                    controllerUrl: baseUrl + 'register/supporting/supportingController.js',
                    templateUrl: baseUrl + 'register/supporting/supporting.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('permissionGeneralSearch', angularAMD.route({
                    title: 'نمایش مجوز ',
                    url: '/permissionGeneralSearch',
                    controller: 'permissionGeneralSearchController',
                    controllerUrl: baseUrl + 'register/permission/permissionGeneral/permissionGeneralSearchController.js',
                    templateUrl: baseUrl + 'register/permission/permissionGeneral/permissionGeneralSearch.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('permissionGeneral', angularAMD.route({
                    title: 'نمایش مجوز ',
                    url: '/permissionGeneral',
                    controller: 'permissionGeneralController',
                    controllerUrl: baseUrl + 'register/permission/permissionGeneral/permissionGeneralController.js',
                    templateUrl: baseUrl + 'register/permission/permissionGeneral/permissionGeneral.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('permissionClassSearch', angularAMD.route({
                    title: ' مجوز ',
                    url: '/permissionClassSearch',
                    controller: 'permissionClassSearchController',
                    controllerUrl: baseUrl + 'register/permission/permissionClass/permissionClassSearchController.js',
                    templateUrl: baseUrl + 'register/permission/permissionClass/permissionClassSearch.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('permissionClass', angularAMD.route({
                    title: 'نمایش مجوز کلاس بندی',
                    url: '/permissionClass',
                    controller: 'permissionClassController',
                    controllerUrl: baseUrl + 'register/permission/permissionClass/permissionClassController.js',
                    templateUrl: baseUrl + 'register/permission/permissionClass/permissionClass.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('computeHedayatTahsilyRegion', angularAMD.route({
                    title: 'هدایت تحصیلی',
                    url: '/computeHedayatTahsilyRegion',
                    controller: 'computeHedayatTahsilyRegionController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/computeHedayatTahsilyRegion/computeHedayatTahsilyRegionController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScores/computeHedayatTahsilyRegion/computeHedayatTahsilyRegion.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('computeHedayatTahsily', angularAMD.route({
                    title: 'هدایت تحصیلی',
                    url: '/computeHedayatTahsily',
                    controller: 'computeHedayatTahsilyController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/computeHedayatTahsily/computeHedayatTahsilyController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScores/computeHedayatTahsily/computeHedayatTahsily.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('smartStudent', angularAMD.route({
                    title: 'نتایج تیزهوشان',
                    url: '/smartStudent',
                    controller: 'smartStudentController',
                    controllerUrl: baseUrl + 'register/smartStudent/smartStudentController.js',
                    templateUrl: baseUrl + 'register/smartStudent/smartStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('olympiad', angularAMD.route({
                    title: 'االمپیاد',
                    url: '/olympiad',
                    controller: 'olympiadController',
                    controllerUrl: baseUrl + 'register/olympiad/olympiadController.js',
                    templateUrl: baseUrl + 'register/olympiad/olympiad.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('changePasswordLogin', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/changePasswordLogin',
                    controller: 'changePasswordLoginController',
                    controllerUrl: baseUrl + 'security/changePasswordLogin/changePasswordLoginController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/changePasswordLogin/changePasswordLogin.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))
                .state('orgSchoolForShahedSearch', angularAMD.route({
                    title: 'ظرفیت برای شاهد',
                    url: '/orgSchoolForShahedSearch',
                    controller: 'orgSchoolForShahedSearchController',
                    controllerUrl: baseUrl + 'register/orgSchoolForShahed/orgSchoolForShahedSearchController.js',
                    templateUrl: baseUrl + 'register/orgSchoolForShahed/orgSchoolForShahedSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('orgSchoolForShahed', angularAMD.route({
                    title: 'ظرفیت برای شاهد',
                    url: '/orgSchoolForShahed',
                    controller: 'orgSchoolForShahedController',
                    controllerUrl: baseUrl + 'register/orgSchoolForShahed/orgSchoolForShahedController.js',
                    templateUrl: baseUrl + 'register/orgSchoolForShahed/orgSchoolForShahed.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerMobileManual', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/registerMobileManual',
                    controller: 'registerMobileManualController',
                    controllerUrl: baseUrl + 'security/registerMobileManual/registerMobileManualController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/registerMobileManual/registerMobileManual.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))
                .state('login2', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/login2',
                    controller: 'login2Controller',
                    controllerUrl: baseUrl + 'security/login2/login2Controller.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/login2/login2.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))
                .state('registerMobile', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/registerMobile',
                    controller: 'registerMobileController',
                    controllerUrl: baseUrl + 'security/registerMobile/registerMobileController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/registerMobile/registerMobile.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))


                .state('studentUnitSelection2', angularAMD.route({
                    title: 'ثبت نام اتوماتیک ',
                    url: '/studentUnitSelection2',
                    controller: 'studentUnitSelectionController',
                    controllerUrl: baseUrl + 'register/unitSelectionAuto/studentUnitSelectionController.js',
                    templateUrl: baseUrl + 'register/unitSelectionAuto/studentUnitSelection.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('personelMobile', angularAMD.route({
                    title: 'ثبت شماره موبایل پرسنل ',
                    url: '/personelMobile',
                    controller: 'personelMobileController',
                    controllerUrl: baseUrl + 'base/personelMobile/personelMobileController.js',
                    templateUrl: baseUrl + 'base/personelMobile/personelMobile.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('regionCategory', angularAMD.route({
                    title: ' محله بندی',
                    url: '/regionCategory',
                    controller: "regionCategoryController",
                    templateUrl: baseUrl + "register/region/regionCategory.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/region/regionCategoryController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('login', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/login',
                    controller: 'loginController',
                    controllerUrl: baseUrl + 'security/login/loginController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/login/login.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))
                .state('firstChangePassword', angularAMD.route({
                    title: ' ',
                    authorize: true,
                    url: '/changePasswordAndLogin',
                    controller: 'firstChangePasswordController',
                    controllerUrl: baseUrl + 'security/firstChangePassword/firstChangePasswordController.js',
                    views: {
                        'login': {
                            templateUrl: baseUrl + 'security/firstChangePassword/firstChangePassword.html?'
                        }
                    },
                    params: {
                        obj: null,
                    },
                }))
                .state('karnamehPoodemani', angularAMD.route({
                    title: 'کارنامه پودمانی ',
                    url: '/karnamehPoodemani',
                    controller: 'karnamehPoodemaniController',
                    controllerUrl: baseUrl + 'karnameh/karnamehMotevasetehTwo/karnamehPoodemaniController.js',
                    templateUrl: baseUrl + 'karnameh/karnamehMotevasetehTwo/karnamehPoodemani.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('changePassword', angularAMD.route({
                    title: 'تغییر کلمه عبور ',
                    url: '/changePassword',
                    controller: 'changePasswordController',
                    controllerUrl: baseUrl + 'security/changePassword/changePasswordController.js',
                    templateUrl: baseUrl + 'security/changePassword/changePassword.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('notification', angularAMD.route({
                    title: 'اطلاعیه ',
                    url: '/notification',
                    controller: 'notificationController',
                    controllerUrl: baseUrl + 'security/notification/notificationController.js',
                    templateUrl: baseUrl + 'security/notification/notification.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('hedayatPeriority', angularAMD.route({
                    title: 'امتیاز بندی مناطق ',
                    url: '/hedayatPeriority',
                    controller: 'hedayatPeriorityController',
                    controllerUrl: baseUrl + 'register/hedayatPeriority/hedayatPeriorityController.js',
                    templateUrl: baseUrl + 'register/hedayatPeriority/hedayatPeriority.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('kardaneshCourseStatus', angularAMD.route({
                    title: 'ایجاد درس کاردانش ',
                    url: '/kardaneshCourseStatus',
                    controller: 'kardaneshCourseStatusController',
                    controllerUrl: baseUrl + 'register/kardaneshCourseStatus/kardaneshCourseStatusController.js',
                    templateUrl: baseUrl + 'register/kardaneshCourseStatus/kardaneshCourseStatus.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('bazmandeAzTahsilSearch', angularAMD.route({
                    title: 'باز مانده از تحصیل ',
                    url: '/bazmandeAzTahsilSearch',
                    controller: 'bazmandeAzTahsilSearchController',
                    controllerUrl: baseUrl + 'report/bazmandeAzTahsil/bazmandeAzTahsilSearchController.js',
                    templateUrl: baseUrl + 'report/bazmandeAzTahsil/bazmandeAzTahsilSearch.html?',
                    params: {
                        obj: null,
                    },
                }))


                .state('etbaAllowed', angularAMD.route({
                    title: 'ثبت مشخصات اتباع ',
                    url: '/etbaAllowed',
                    controller: 'etbaAllowedController',
                    controllerUrl: baseUrl + 'register/etba/etbaAllowedController.js',
                    templateUrl: baseUrl + 'register/etba/etbaAllowed.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('jahesh', angularAMD.route({
                    title: ' ثبت مجوز جهش تحصیلی',
                    url: '/jahesh',
                    controller: 'jaheshController',
                    controllerUrl: baseUrl + 'register/jahesh/jaheshController.js',
                    templateUrl: baseUrl + 'register/jahesh/jahesh.html?',
                    params: {
                        obj: null,
                    },
                }))


                .state('classification', angularAMD.route({
                    title: ' کلاس بندی',
                    url: '/classification',
                    controller: 'classificationController',
                    controllerUrl: baseUrl + 'school/classification/classificationController.js',
                    templateUrl: baseUrl + 'school/classification/classification.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('classificationSearch', angularAMD.route({
                    title: ' کلاس بندی',
                    url: '/classificationSearch',
                    controller: 'classificationSearchController',
                    controllerUrl: baseUrl + 'school/classification/classificationSearchController.js',
                    templateUrl: baseUrl + 'school/classification/classificationSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('classCapacityForAdministration', angularAMD.route({//bahmanabadi
                    title: ' ظرفیت بندی کلاس',
                    url: '/classCapacityForAdministration',
                    controller: 'classCapacityForAdministrationController',
                    controllerUrl: baseUrl + 'register/classCapacity/classCapacityForAdministration/classCapacityForAdministrationController.js',
                    templateUrl: baseUrl + 'register/classCapacity/classCapacityForAdministration/classCapacityForAdministration.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('allocateClassCapacity', angularAMD.route({//bahmanabadi
                    title: ' تخصیص ظرفیت کلاس بندی',
                    url: '/allocateClassCapacity',
                    controller: 'allocateClassCapacityController',
                    controllerUrl: baseUrl + 'register/classCapacity/allocateClassCapacity/allocateClassCapacityController.js',
                    templateUrl: baseUrl + 'register/classCapacity/allocateClassCapacity/allocateClassCapacity.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('selectClassCapacityForProvince', angularAMD.route({//bahmanabadi
                    title: ' انتخاب الگوریتم ظرفیت-استان',
                    url: '/selectClassCapacityForProvince',
                    controller: 'selectClassCapacityForProvinceController',
                    controllerUrl: baseUrl + 'register/classCapacity/selectClassCapacityForProvince/selectClassCapacityForProvinceController.js',
                    templateUrl: baseUrl + 'register/classCapacity/selectClassCapacityForProvince/selectClassCapacityForProvince.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('schoolLocationCode', angularAMD.route({
                    title: 'تایید کد فضای مدرسه',
                    url: '/schoolLocationCode',
                    controller: 'schoolLocationCodeController',
                    controllerUrl: baseUrl + 'school/schoolLocationCode/schoolLocationCodeController.js',
                    templateUrl: baseUrl + 'school/schoolLocationCode/schoolLocationCode.html?',
                    params: {
                        obj: null,
                    },
                }))


                .state('estesnaeeEducational', angularAMD.route({
                    title: ' کارنامه استثنائئ',
                    url: '/estesnaeeEducational',
                    controller: 'estesnaeeEducationalController',
                    controllerUrl: baseUrl + 'karnameh/estesnaeeEducational/estesnaeeEducationalController.js',
                    templateUrl: baseUrl + 'karnameh/estesnaeeEducational/estesnaeeEducational.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('classCapacityForSchool', angularAMD.route({
                    title: ' ظرفیت بندی کلاس-مدرسه',
                    url: '/classCapacityForSchool',
                    controller: 'classCapacityForSchoolController',
                    controllerUrl: baseUrl + 'register/classCapacity/classCapacityForSchool/classCapacityForSchoolController.js',
                    templateUrl: baseUrl + 'register/classCapacity/classCapacityForSchool/classCapacityForSchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('searchStudentReportDetails', angularAMD.route({
                    title: 'گزارش جست و جوی دانش آموز',
                    url: '/searchStudentReportDetails',
                    controller: 'searchStudentReportDetailsController',
                    controllerUrl: baseUrl + 'report/searchStudentReport/searchStudentReportDetailsController.js',
                    templateUrl: baseUrl + 'report/searchStudentReport/searchStudentReportDetails.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerStudentJahesh', angularAMD.route({
                    title: 'ثبت درخواست جهش عادی',
                    url: '/registerStudentJahesh',
                    controller: 'registerStudentJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/registerStudentJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/registerStudentJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('showStudentForJahesh', angularAMD.route({
                    title: 'ثبت نام جهش عادی برای دانش آموزان با وضعیت استعلام قبول ',
                    url: '/showStudentForJahesh',
                    controller: 'showStudentForJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/showStudentForJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/showStudentForJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerStudentJaheshWithPermission', angularAMD.route({
                    title: 'ثبت جهش بر اساس رای کمیسیون خاص',
                    url: '/registerStudentJaheshWithPermission',
                    controller: 'registerStudentJaheshWithPermissionController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/registerStudentJaheshWithPermissionController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/registerStudentJaheshWithPermission.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreIndividualJahesh', angularAMD.route({
                    title: 'ثبت نمرات دانش آموزان جهش عادی',
                    url: '/scoreIndividualJahesh',
                    controller: 'scoreIndividualJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/scoreIndividualJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshNormal/scoreIndividualJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreIndividualJaheshPermission', angularAMD.route({
                    title: 'ثبت نمرات دانش آموزان جهش با رای کمیسیون',
                    url: '/scoreIndividualJaheshPermission',
                    controller: 'scoreIndividualJaheshPermissionController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/scoreIndividualJaheshPermissionController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/scoreIndividualJaheshPermission.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('showStudentPermissionForJahesh', angularAMD.route({
                    title: ' جهش بر اساس رای کمیسیون (اول به سوم ،چندپایه، باردوم ، پذیرش کلیه دروس پایه جهش ، پذیرش کلیه سوابق) با وضعیت استعلام قبول',
                    url: '/showStudentPermissionForJahesh',
                    controller: 'showStudentPermissionForJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/showStudentPermissionForJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPermission/showStudentPermissionForJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tosifiEducationalJahesh', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی',
                    url: '/tosifiEducationalJahesh',
                    controller: 'tosifiEducationalJaheshController',
                    controllerUrl: baseUrl + 'karnameh/tosifiEducationalJahesh/tosifiEducationalJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/tosifiEducationalJahesh/tosifiEducationalJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('showStudentFirstHighSchoolForJahesh', angularAMD.route({
                    title: 'مشاهده دانش آموزان ',
                    url: '/showStudentFirstHighSchoolForJahesh',
                    controller: 'showStudentFirstHighSchoolForJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/showStudentFirstHighSchoolForJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/showStudentFirstHighSchoolForJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('createRegisterStudentJaheshFirstHighSchool', angularAMD.route({
                    title: 'ثبت درخواست جهش متوسطه اول',
                    url: '/createRegisterStudentJaheshFirstHighSchool',
                    controller: 'createRegisterStudentJaheshFirstHighSchoolController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/createRegisterStudentJaheshFirstHighSchoolController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/createRegisterStudentJaheshFirstHighSchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreIndividualJaheshFirstHighSchool', angularAMD.route({
                    title: 'ثبت نمرات دانش آموزان جهش متوسطه اول',
                    url: '/scoreIndividualJaheshFirstHighSchool',
                    controller: 'scoreIndividualJaheshFirstHighSchoolController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/scoreIndividualJaheshFirstHighSchoolController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshFirstHighSchool/scoreIndividualJaheshFirstHighSchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('karnamehMotevasetehJahesh', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی (متوسطه اول)',
                    url: '/karnamehMotevasetehJahesh',
                    controller: 'karnamehMotevasetehJaheshController',
                    controllerUrl: baseUrl + 'karnameh/karnamehMotevasetehJahesh/karnamehMotevasetehJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/karnamehMotevasetehJahesh/karnamehMotevasetehJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('showStudentSecondHighSchoolForJahesh', angularAMD.route({
                    title: 'مشاهده دانش آموزان ',
                    url: '/showStudentSecondHighSchoolForJahesh',
                    controller: 'showStudentSecondHighSchoolForJaheshController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/showStudentSecondHighSchoolForJaheshController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/showStudentSecondHighSchoolForJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('createRegisterStudentJaheshSecondHighSchool', angularAMD.route({
                    title: 'ثبت درخواست جهش متوسطه دوم',
                    url: '/createRegisterStudentJaheshSecondHighSchool',
                    controller: 'createRegisterStudentJaheshSecondHighSchoolController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/createRegisterStudentJaheshSecondHighSchoolController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/createRegisterStudentJaheshSecondHighSchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreIndividualJaheshSecondHighSchool', angularAMD.route({
                    title: 'ثبت نمرات دانش آموزان جهش متوسطه دوم',
                    url: '/scoreIndividualJaheshSecondHighSchool',
                    controller: 'scoreIndividualJaheshSecondHighSchoolController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/scoreIndividualJaheshSecondHighSchoolController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshSecondHighSchool/scoreIndividualJaheshSecondHighSchool.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('karnamehMotevasetehTwoJahesh', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی (متوسطه دوم)',
                    url: '/karnamehMotevasetehTwoJahesh',
                    controller: 'karnamehMotevasetehTwoJaheshController',
                    controllerUrl: baseUrl + 'karnameh/karnamehMotevasetehTwoJahesh/karnamehMotevasetehTwoJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/karnamehMotevasetehTwoJahesh/karnamehMotevasetehTwoJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('createRegisterStudentJaheshBetweenDegrees', angularAMD.route({
                    title: ' ثبت درخواست جهش بین مقطعی',
                    url: '/createRegisterStudentJaheshBetweenDegrees',
                    controller: 'createRegisterStudentJaheshBetweenDegreesController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshBetweenDegress/createRegisterStudentJaheshBetweenDegreesController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshBetweenDegress/createRegisterStudentJaheshBetweenDegrees.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('karnamehBetweenDegressJahesh', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی (متوسطه دوم)',
                    url: '/karnamehBetweenDegressJahesh',
                    controller: 'karnamehBetweenDegressJaheshController',
                    controllerUrl: baseUrl + 'karnameh/karnamehBetweenDegressJahesh/karnamehBetweenDegressJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/karnamehBetweenDegressJahesh/karnamehBetweenDegressJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('hedayatTahsiliRegion', angularAMD.route({
                    title: ' نتایج هدایت تحصیلی',
                    url: '/hedayatTahsiliRegion',
                    controller: 'hedayatTahsiliRegionController',
                    controllerUrl: baseUrl + 'register/hedayatTahsiliForRegion/hedayatTahsiliRegionController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsiliForRegion/hedayatTahsiliRegion.html?',
                    params: {
                        obj: null,
                    },
                })).state('hedayatTahsiliRegionSearch', angularAMD.route({
                    title: ' نتایج هدایت تحصیلی',
                    url: '/hedayatTahsiliRegionSearch',
                    controller: 'hedayatTahsiliRegionSearchController',
                    controllerUrl: baseUrl + 'register/hedayatTahsiliForRegion/hedayatTahsiliRegionSearchController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsiliForRegion/hedayatTahsiliRegionSearch.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('hedayatTahsilyScores', angularAMD.route({
                    title: ' ویرایش اطلاعات هدایت تحصیلی',
                    url: '/hedayatTahsilyScores',
                    controller: 'hedayatTahsilyScoresController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/hedayatTahsilyScoresController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScores/hedayatTahsilyScores.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('hedayatTahsilyScoresFix', angularAMD.route({
                    title: ' اطلاعات هدایت تحصیلی',
                    url: '/hedayatTahsilyScoresFix',
                    controller: 'hedayatTahsilyScoresFixController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScoresFix/hedayatTahsilyScoresFixController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScoresFix/hedayatTahsilyScoresFix.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('hedayatTahsilyScoresMantagheConfirm', angularAMD.route({
                    title: 'تایید نمرات ارسالی پایه هفتم برای هدایت تحصیلی',
                    url: '/hedayatTahsilyScoresMantagheConfirm',
                    controller: 'hedayatTahsilyScoresMantagheConfirmController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScoresMantagheConfirm/hedayatTahsilyScoresMantagheConfirmController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScoresMantagheConfirm/hedayatTahsilyScoresMantagheConfirm.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('getKarnamehSetad', angularAMD.route({
                    title: ' کارنامه دانش آموزان',
                    url: '/getKarnamehSetad',
                    controller: 'getKarnamehSetadController',
                    controllerUrl: baseUrl + 'report/getKarnamehSetad/getKarnamehSetadController.js',
                    templateUrl: baseUrl + 'report/getKarnamehSetad/getKarnamehSetad.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('studentPCR', angularAMD.route({
                    title: 'استعلام واکسن و تست پی سی آر',
                    url: '/studentPCR',
                    controller: 'studentPCRController',
                    controllerUrl: baseUrl + 'base/studentPCR/studentPCRController.js',
                    templateUrl: baseUrl + 'base/studentPCR/studentPCR.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('personelPCR', angularAMD.route({
                    title: '(پرسنل)استعلام واکسن و تست پی سی آر',
                    url: '/personelPcr',
                    controller: 'personelPcrController',
                    controllerUrl: baseUrl + 'base/personelPcr/personelPcrController.js',
                    templateUrl: baseUrl + 'base/personelPcr/personelPcr.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerDormitoryStudentSearch', angularAMD.route({
                    title: 'نمایش دانش آموزان خوابگاهی ',
                    url: '/registerDormitoryStudentSearch',
                    controller: 'registerDormitoryStudentSearchController',
                    controllerUrl: baseUrl + 'register/registerDormitoryStudent/registerDormitoryStudentSearchController.js',
                    templateUrl: baseUrl + 'register/registerDormitoryStudent/registerDormitoryStudentSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerDormitoryStudent', angularAMD.route({
                    title: 'ثبت دانش آموزان خوابگاهی ',
                    url: '/registerDormitoryStudent',
                    controller: 'registerDormitoryStudentController',
                    controllerUrl: baseUrl + 'register/registerDormitoryStudent/registerDormitoryStudentController.js',
                    templateUrl: baseUrl + 'register/registerDormitoryStudent/registerDormitoryStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalReceived', angularAMD.route({
                    title: 'دریافت نمرات از فاینال',
                    url: '/finalReceived',
                    controller: 'finalReceivedController',
                    controllerUrl: baseUrl + 'serviceExternal/finalReceived/finalReceivedController.js',
                    templateUrl: baseUrl + 'serviceExternal/finalReceived/finalReceived.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('employee', angularAMD.route({
                    title: ' دریافت اطلاعات پرسنلی',
                    url: '/employee',
                    controller: 'employeeController',
                    controllerUrl: baseUrl + 'register/employee/employeeController.js',
                    templateUrl: baseUrl + 'register/employee/employee.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('registeServiceStudentSearch', angularAMD.route({
                    title: 'نمایش سرویس دانش آموزان  ',
                    url: '/registeServiceStudentSearch',
                    controller: 'registeServiceStudentSearchController',
                    controllerUrl: baseUrl + 'register/registeServiceStudent/registeServiceStudentSearchController.js',
                    templateUrl: baseUrl + 'register/registeServiceStudent/registeServiceStudentSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registeServiceStudent', angularAMD.route({
                    title: 'ثبت سرویس دانش  آموزان  ',
                    url: '/registeServiceStudent',
                    controller: 'registeServiceStudentController',
                    controllerUrl: baseUrl + 'register/registeServiceStudent/registeServiceStudentController.js',
                    templateUrl: baseUrl + 'register/registeServiceStudent/registeServiceStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('serviceStudentForRegion', angularAMD.route({
                    title: 'ثبت سرویس دانش آموزان(منطقه) ',
                    url: '/serviceStudentForRegion',
                    controller: 'serviceStudentForRegionController',
                    controllerUrl: baseUrl + 'register/serviceStudentForRegion/serviceStudentForRegionController.js',
                    templateUrl: baseUrl + 'register/serviceStudentForRegion/serviceStudentForRegion.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('schoolSearch', angularAMD.route({
                    title: 'ثبت سرویس دانش آموزان(منطقه) ',
                    url: '/schoolSearch',
                    controller: 'schoolSearchController',
                    controllerUrl: baseUrl + 'support/schoolFeature/schoolSearchController.js',
                    templateUrl: baseUrl + 'support/schoolFeature/schoolSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('studentRegisterSuport', angularAMD.route({
                    title: 'ثبت ',
                    url: '/regStudent',
                    controller: 'regStudentController',
                    controllerUrl: baseUrl + 'support/registerStudent/regStudentController.js',
                    templateUrl: baseUrl + 'support/registerStudent/regStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('historyStudentForKarnameh', angularAMD.route({
                    title: 'گزارش دانش اموزان ثبت نامی(محاسبه کارنامه)  ',
                    url: '/historyStudentForKarnameh',
                    controller: 'historyStudentForKarnamehController',
                    controllerUrl: baseUrl + 'register/historyStudentForKarnameh/historyStudentForKarnamehController.js',
                    templateUrl: baseUrl + 'register/historyStudentForKarnameh/historyStudentForKarnameh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('historyStudentForKarnamehByRegion', angularAMD.route({
                    title: 'گزارش دانش اموزان ثبت نامی(محاسبه کارنامه)  ',
                    url: '/historyStudentForKarnamehByRegion',
                    controller: 'historyStudentForKarnamehByRegionController',
                    controllerUrl: baseUrl + 'register/historyStudentForKarnameh/historyStudentForKarnamehByRegionController.js',
                    templateUrl: baseUrl + 'register/historyStudentForKarnameh/historyStudentForKarnamehByRegion.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('examOffice', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی تحصیلی',
                    url: '/examOffice',
                    controller: 'examOfficeController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/examOfficeController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/examOffice.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('motevasetehExamOffice', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی تحصیلی ',
                    url: '/motevasetehExamOffice',
                    controller: 'motevasetehExamOfficeController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/motevasetehAval/motevasetehExamOfficeController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/motevasetehAval/motevasetehExamOffice.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('motevasetehExamOfficeJahesh', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی تحصیلی ',
                    url: '/motevasetehExamOfficeJahesh',
                    controller: 'motevasetehExamOfficeJaheshController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/motevasetehAval/motevasetehExamOfficeJahesh/motevasetehExamOfficeJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/motevasetehAval/motevasetehExamOfficeJahesh/motevasetehExamOfficeJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tosifiOfficeExam', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی تحصیلی  ',
                    url: '/tosifiOfficeExam',
                    controller: 'tosifiOfficeExamController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/ebtedaee/tosifiOfficeExamController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/ebtedaee/tosifiOfficeExam.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tosifiOfficeExamJahesh', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی تحصیلی  ',
                    url: '/tosifiOfficeExamJahesh',
                    controller: 'tosifiOfficeExamJaheshController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/ebtedaee/tosifiOfficeExamJahesh/tosifiOfficeExamJaheshController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/ebtedaee/tosifiOfficeExamJahesh/tosifiOfficeExamJahesh.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('mainAllKarnamehSearch', angularAMD.route({
                    title: 'کارنامه گروهی  ',
                    url: '/mainAllKarnamehSearch',
                    controller: 'mainAllKarnamehSearchController',
                    controllerUrl: baseUrl + 'karnameh/mainAllKarnameh/mainAllKarnamehSearchController.js',
                    templateUrl: baseUrl + 'karnameh/mainAllKarnameh/mainAllKarnamehSearch.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('regiesterHistoryTransferStudent', angularAMD.route({
                    title: 'دریافت سوابق دانش آموزان منتقل شده(از مدرسه مقصد) ',
                    url: '/regiesterHistoryTransferStudent',
                    controller: 'regiesterHistoryTransferStudentController',
                    controllerUrl: baseUrl + 'register/regiesterHistoryTransferStudent/regiesterHistoryTransferStudentController.js',
                    templateUrl: baseUrl + 'register/regiesterHistoryTransferStudent/regiesterHistoryTransferStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('regiesterHistoryTransferStudentForRegion', angularAMD.route({
                    title: 'دریافت سوابق دانش آموزان منتقل شده(از مدرسه مقصد) منطقه ',
                    url: '/regiesterHistoryTransferStudentForRegion',
                    controller: 'regiesterHistoryTransferStudentForRegionController',
                    controllerUrl: baseUrl + 'register/regiesterHistoryTransferStudentForRegion/regiesterHistoryTransferStudentForRegionController.js',
                    templateUrl: baseUrl + 'register/regiesterHistoryTransferStudentForRegion/regiesterHistoryTransferStudentForRegion.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('evalutionMovmentRegionReport', angularAMD.route({
                    title: 'گزارش سواد حرکتی  منطقه ',
                    url: '/evalutionMovmentRegionReport',
                    controller: 'evalutionMovmentRegionReportController',
                    controllerUrl: baseUrl + 'report/evalutionMovmentReport/regionReport/evalutionMovmentRegionReportController.js',
                    templateUrl: baseUrl + 'report/evalutionMovmentReport/regionReport/evalutionMovmentRegionReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                //.state('evalutionMovmentSchoolReport', angularAMD.route({
                //    title: 'گزارش سواد حرکتی  مدرسه ',
                //    url: '/evalutionMovmentSchoolReport',
                //    controller: 'evalutionMovmentSchoolReportController',
                //    controllerUrl: baseUrl + 'report/evalutionMovmentReport/schoolReport/evalutionMovmentSchoolReportController.js',
                //    templateUrl: baseUrl + 'report/evalutionMovmentReport/schoolReport/evalutionMovmentSchoolReport.html?',
                //    params: {
                //        obj: null,
                //    },
                //}))
                .state('evalutionMovmentStateReport', angularAMD.route({
                    title: 'گزارش سواد حرکتی  استان ',
                    url: '/evalutionMovmentStateReport',
                    controller: 'evalutionMovmentStateReportController',
                    controllerUrl: baseUrl + 'report/evalutionMovmentReport/stateReport/evalutionMovmentStateReportController.js',
                    templateUrl: baseUrl + 'report/evalutionMovmentReport/stateReport/evalutionMovmentStateReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerPriorityShahedStudent', angularAMD.route({
                    title: 'درج اولویت های ثبت نام دانش آموزان شاهد و ایثارگران ',
                    url: '/registerPriorityShahedStudent',
                    controller: 'registerPriorityShahedStudentController',
                    controllerUrl: baseUrl + 'register/registerPriorityShahedEsargarnStudent/registerPriorityShahedStudentController.js',
                    templateUrl: baseUrl + 'register/registerPriorityShahedEsargarnStudent/registerPriorityShahedStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerShahedStudent', angularAMD.route({
                    title: 'درج اولویت های ثبت نام دانش آموزان شاهد',
                    url: '/registerShahedStudent',
                    controller: 'registerShahedStudentController',
                    controllerUrl: baseUrl + 'register/registerPriorityShahedEsargarnStudent/registerShahedStudent/registerShahedStudentController.js',
                    templateUrl: baseUrl + 'register/registerPriorityShahedEsargarnStudent/registerShahedStudent/registerShahedStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('insertPermissionEditHistorySearch', angularAMD.route({
                    title: 'ثبت مجوز برای اصلاح سوابق',
                    url: '/insertPermissionEditHistorySearch',
                    controller: 'insertPermissionEditHistorySearchController',
                    controllerUrl: baseUrl + 'businessError/insertPermissionEditHistory/insertPermissionEditHistorySearchController.js',
                    templateUrl: baseUrl + 'businessError/insertPermissionEditHistory/insertPermissionEditHistorySearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('insertPermissionEditHistory', angularAMD.route({
                    title: 'ثبت مجوز برای اصلاح سوابق  ',
                    url: '/insertPermissionEditHistory',
                    controller: 'insertPermissionEditHistoryController',
                    controllerUrl: baseUrl + 'businessError/insertPermissionEditHistory/insertPermissionEditHistoryController.js',
                    templateUrl: baseUrl + 'businessError/insertPermissionEditHistory/insertPermissionEditHistory.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('teachersAllocatedToCourseGroupRegionReport', angularAMD.route({
                    title: ' گزارش درس گروه های دارای معلم ',
                    url: '/teachersAllocatedToCourseGroupRegionReport',
                    controller: 'teachersAllocatedToCourseGroupRegionReportController',
                    controllerUrl: baseUrl + 'report/teachersAllocatedToCourseGroupReport/region/teachersAllocatedToCourseGroupRegionReportController.js',
                    templateUrl: baseUrl + 'report/teachersAllocatedToCourseGroupReport/region/teachersAllocatedToCourseGroupRegionReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('mainReport', angularAMD.route({
                    title: 'گزارشات ',
                    url: '/mainReport',
                    controller: 'mainReportController',
                    controllerUrl: baseUrl + 'report/mainReport/mainReportController.js',
                    templateUrl: baseUrl + 'report/mainReport/mainReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('comprehensiveStudentReport', angularAMD.route({
                    title: 'گزارش جامع ثبت نام دانش آموزان',
                    url: '/comprehensiveStudentReport',
                    controller: 'comprehensiveStudentReportController',
                    controllerUrl: baseUrl + 'report/comprehensiveStudentReport/comprehensiveStudentReportController.js',
                    templateUrl: baseUrl + 'report/comprehensiveStudentReport/comprehensiveStudentReport.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('isarStudentReport', angularAMD.route({
                    title: 'گزارش جامع فرزندان ایثارگران',
                    url: '/isarStudentReport',
                    controller: 'isarStudentReportController',
                    controllerUrl: baseUrl + 'report/isar/isarStudentReportController.js',
                    templateUrl: baseUrl + 'report/isar/isarStudentReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportRegisterStudentGeneral', angularAMD.route({
                    title: 'گزارش جامع پیش ثبت نام',
                    url: '/reportRegisterStudentGeneral',
                    controller: 'registerStudentGeneralController',
                    controllerUrl: baseUrl + 'report/registerStudentGeneral/registerStudentGeneralController.js',
                    templateUrl: baseUrl + 'report/registerStudentGeneral/registerStudentGeneral.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportChart', angularAMD.route({
                    title: 'نمودار',
                    url: '/reportChart',
                    controller: 'reportChartController',
                    controllerUrl: baseUrl + 'report/reportChart/reportChartController.js',
                    templateUrl: baseUrl + 'report/reportChart/reportChart.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('nationalityTypeStudentReport', angularAMD.route({
                    title: 'گزارش جامع اتباع',
                    url: '/nationalityTypeStudentReport',
                    controller: 'nationalityTypeStudentReportController',
                    controllerUrl: baseUrl + 'report/nationalityTypeStudentReport/nationalityTypeStudentReportController.js',
                    templateUrl: baseUrl + 'report/nationalityTypeStudentReport/nationalityTypeStudentReport.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('dropoutStudentReport', angularAMD.route({
                    title: 'گزارش دانش آموزان (ترک تحصیل )',
                    url: '/dropoutStudentReport',
                    controller: 'dropoutStudentReportController',
                    controllerUrl: baseUrl + 'report/dropoutStudentReport/dropoutStudentReportController.js',
                    templateUrl: baseUrl + 'report/dropoutStudentReport/dropoutStudentReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('motevasetehAvalRahDoor', angularAMD.route({
                    title: 'دفتر نتایج ارزشیابی متوسطه اول راه دور',
                    url: '/motevasetehAvalRahDoor',
                    controller: 'motevasetehAvalRahDoorController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/motevasetehAvalRahDoor/motevasetehAvalRahDoorController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/motevasetehAvalRahDoor/motevasetehAvalRahDoor.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('sampad', angularAMD.route({
                    title: 'نقل انتقال و تغییر رشته سمپاد',
                    url: '/sampad',
                    controller: 'sampadController',
                    controllerUrl: baseUrl + 'register/sampad/sampadController.js',
                    templateUrl: baseUrl + 'register/sampad/sampad.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('delegationAuthority', angularAMD.route({
                    title: 'تفویض اختیار ثبت نمرات معلمان',
                    url: '/delegationAuthority',
                    controller: 'delegationAuthorityController',
                    controllerUrl: baseUrl + 'scoreEntryStep/delegationAuthority/delegationAuthorityController.js',
                    templateUrl: baseUrl + 'scoreEntryStep/delegationAuthority/delegationAuthority.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreExpiration', angularAMD.route({
                    title: 'مدیریت زمانبندی ثبت نمرات',
                    url: '/scoreExpiration',
                    controller: 'scoreExpirationController',
                    controllerUrl: baseUrl + 'scoreEntryStep/scoreExpiration/scoreExpirationController.js',
                    templateUrl: baseUrl + 'scoreEntryStep/scoreExpiration/scoreExpiration.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('requestScoreExpiration', angularAMD.route({
                    title: 'درخواست زمانبندی ثبت نمرات',
                    url: '/requestScoreExpiration',
                    controller: 'requestScoreExpirationController',
                    controllerUrl: baseUrl + 'scoreEntryStep/requestScoreExpiration/requestScoreExpirationController.js',
                    templateUrl: baseUrl + 'scoreEntryStep/requestScoreExpiration/requestScoreExpiration.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('CloseScoreStudent', angularAMD.route({
                    title: 'بستن نمرات کلاس درس',
                    url: '/CloseScoreStudent',
                    controller: 'closeScoreController',
                    controllerUrl: baseUrl + 'scoreEntryStep/closeScore/closeScoreController.js',
                    templateUrl: baseUrl + 'scoreEntryStep/closeScore/closeScore.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reformation', angularAMD.route({
                    title: 'اعتراضات ارزشیابی',
                    url: '/reformation',
                    controller: 'reformationController',
                    controllerUrl: baseUrl + 'scoreEntryStep/reformation/reformationController.js',
                    templateUrl: baseUrl + 'scoreEntryStep/reformation/reformation.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('acceptModifyRegisteration', angularAMD.route({
                    title: 'تایید اصلاح مشخصات دانش آموز',
                    url: '/acceptModifyRegisteration',
                    controller: 'acceptModifyRegisterationController',
                    controllerUrl: baseUrl + 'base/acceptModifyRegisteration/acceptModifyRegisterationController.js',
                    templateUrl: baseUrl + 'base/acceptModifyRegisteration/acceptModifyRegisteration.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('studentAbsenceDay', angularAMD.route({
                    title: 'حضور غیاب دانش آموزان',
                    url: '/studentAbsenceDay',
                    controller: 'studentAbsenceDayController',
                    controllerUrl: baseUrl + 'base/studentAbsenceDay/studentAbsenceDayController.js',
                    templateUrl: baseUrl + 'base/studentAbsenceDay/studentAbsenceDay.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('examOfficeReport', angularAMD.route({
                    title: 'گزارشات دفتر نتایج ارزشیابی',
                    url: '/examOfficeReport',
                    controller: 'examOfficeReportController',
                    controllerUrl: baseUrl + 'karnameh/examOffice/examOfficeReport/examOfficeReportController.js',
                    templateUrl: baseUrl + 'karnameh/examOffice/examOfficeReport/examOfficeReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('pishDabestanCertificate', angularAMD.route({
                    title: 'گواهی نامه پایان دوره پیش دبستانی',
                    url: '/pishDabestanCertificate',
                    controller: 'pishDabestanCertificateController',
                    controllerUrl: baseUrl + 'report/pishDabestanCertificate/pishDabestanCertificateController.js',
                    templateUrl: baseUrl + 'report/pishDabestanCertificate/pishDabestanCertificate.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('elementaryShahedSchoolAdd', angularAMD.route({
                    title: 'نمایش پیش ثبت نام',
                    url: '/elementaryShahedSchoolAdd',
                    controller: "elementaryShahedSchoolController",
                    templateUrl: baseUrl + "register/registeration/elementarySchool/elementaryShahedSchool.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/registeration/elementarySchool/elementaryShahedSchoolController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('elementarySchoolAdd', angularAMD.route({
                    title: 'نمایش پیش ثبت نام',
                    url: '/elementarySchoolAdd',
                    controller: "elementarySchoolController",
                    templateUrl: baseUrl + "register/registeration/elementarySchool/elementarySchool.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/registeration/elementarySchool/elementarySchoolController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('elementarySchool', angularAMD.route({
                    title: 'نمایش پیش ثبت نام',
                    url: '/elementarySchool',
                    controller: "elementarySchoolSearchController",
                    templateUrl: baseUrl + "register/registeration/elementarySchool/elementarySchoolSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/registeration/elementarySchool/elementarySchoolSearchController.js',
                    params: {
                        obj: null,
                    },
                }))

                .state('nextGradeRegisteration', angularAMD.route({
                    title: 'نمایش  ثبت نام میان پایه',
                    url: '/nextGradeRegisteration',
                    controller: "nextGradeRegisterationController",
                    templateUrl: baseUrl + "register/nextGradeRegisteration/nextGradeRegisteration.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/nextGradeRegisteration/nextGradeRegisterationController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('SportsEquipment', angularAMD.route({
                    title: 'نهضت ملی فضاهای ورزشی',
                    url: '/SportsEquipment',
                    controller: "SportsEquipmentController",
                    templateUrl: baseUrl + "base/SportsEquipment/SportsEquipment.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/SportsEquipment/SportsEquipmentController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('SportsEquipmentSearch', angularAMD.route({
                    title: 'نمایش نهضت ملی فضاهای ورزشی',
                    url: '/SportsEquipmentSearch',
                    controller: "SportsEquipmentSearchController",
                    templateUrl: baseUrl + "base/SportsEquipment/SportsEquipmentSearch.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/SportsEquipment/SportsEquipmentSearchController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('preRegisterJaheshPrimarySchoolSearch', angularAMD.route({
                    title: ' نمایش پیش ثبت نام جهش',
                    url: '/preRegisterJaheshPrimarySchoolSearch',
                    controller: 'preRegisterJaheshPrimarySchoolSearchController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchool/preRegisterJaheshPrimarySchoolSearchController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchool/preRegisterJaheshPrimarySchoolSearch.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('preRegisterJaheshPrimarySchool', angularAMD.route({
                    title: 'پیش ثبت نام جهش',
                    url: '/preRegisterJaheshPrimarySchool',
                    controller: 'preRegisterJaheshPrimarySchoolController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchool/preRegisterJaheshPrimarySchoolController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchool/preRegisterJaheshPrimarySchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scoreClassTeacherApproval', angularAMD.route({
                    title: 'تایید نهایی  نمرات ',
                    url: '/scoreClassTeacherApproval',
                    controller: 'scoreClassTeacherController',
                    controllerUrl: baseUrl + 'scoreEntry/scoreClassTeacher/scoreClassTeacherController.js',
                    templateUrl: baseUrl + 'scoreEntry/scoreClassTeacher/scoreClassTeacher.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('scoreClassTosifiForTeacherApproval', angularAMD.route({
                    title: 'تایید نهایی  نمرات توصیفی',
                    url: '/scoreClassTosifiForTeacherApproval',
                    controller: 'scoreClassTosifiForTeacherController',
                    controllerUrl: baseUrl + 'scoreEntry/scoreClassTosifiForTeacher/scoreClassTosifiForTeacherController.js',
                    templateUrl: baseUrl + 'scoreEntry/scoreClassTosifiForTeacher/scoreClassTosifiForTeacher.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('incompleteTeacherGrades', angularAMD.route({
                    title: 'لیست نمرات ناقص ثبت شده توسط معلم',
                    url: '/incompleteTeacherGrades',
                    controller: 'incompleteTeacherGradesController',
                    controllerUrl: baseUrl + 'report/incompleteTeacherGrades/incompleteTeacherGradesController.js',
                    templateUrl: baseUrl + 'report/incompleteTeacherGrades/incompleteTeacherGrades.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('sportsEquipmentRegion', angularAMD.route({
                    title: 'نهضت ملی فضاهای ورزشی(منطقه)',
                    url: '/sportsEquipmentRegion',
                    controller: 'sportsEquipmentRegionController',
                    controllerUrl: baseUrl + 'report/sportsEquipmentReport/region/sportsEquipmentRegionController.js',
                    templateUrl: baseUrl + 'report/sportsEquipmentReport/region/sportsEquipmentRegion.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('sportsEquipmentState', angularAMD.route({
                    title: 'نهضت ملی فضاهای ورزشی(استان)',
                    url: '/sportsEquipmentState',
                    controller: 'sportsEquipmentStateController',
                    controllerUrl: baseUrl + 'report/sportsEquipmentReport/state/sportsEquipmentStateController.js',
                    templateUrl: baseUrl + 'report/sportsEquipmentReport/state/sportsEquipmentState.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('sportsEquipmentSetad', angularAMD.route({
                    title: 'نهضت ملی فضاهای ورزشی(ستاد)',
                    url: '/sportsEquipmentSetad',
                    controller: 'sportsEquipmentSetadController',
                    controllerUrl: baseUrl + 'report/sportsEquipmentReport/Setad/sportsEquipmentSetadController.js',
                    templateUrl: baseUrl + 'report/sportsEquipmentReport/Setad/sportsEquipmentSetad.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('insertPermissionSportEquipment', angularAMD.route({
                    title: 'ایجاد مدارس مشمول طرح نهضت ملی فضاهای ورزشی',
                    url: '/insertPermissionSportEquipment',
                    controller: 'insertPermissionSportEquipmentController',
                    controllerUrl: baseUrl + 'businessError/insertPermissionSportEquipment/insertPermissionSportEquipmentController.js',
                    templateUrl: baseUrl + 'businessError/insertPermissionSportEquipment/insertPermissionSportEquipment.html?',
                    params: {
                        obj: { key: true },
                    },
                }))

                .state('infoEditPersonel', angularAMD.route({
                    title: 'ویرایش فرم پرسنل  ',
                    url: '/infoEditPersonel',
                    controller: 'infoEditPersonelController',
                    controllerUrl: baseUrl + 'security/infoEditPersonel/infoEditPersonelController.js',
                    templateUrl: baseUrl + 'security/infoEditPersonel/infoEditPersonel.html?',
                    params: {
                        obj: {},
                    },
                }))

                .state('specialCourseScore', angularAMD.route({
                    title: 'ورود نمرات استثنایی ماقبل 98',
                    url: '/specialCourseScore',
                    controller: 'specialCourseScoreController',
                    controllerUrl: baseUrl + 'register/specialOld/specialCourseScoreController.js',
                    templateUrl: baseUrl + 'register/specialOld/specialCourseScore.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('hedayatTahsilyScoresResult', angularAMD.route({
                    title: 'مشاهده نتایج هدایت تحصیلی',
                    url: '/hedayatTahsilyScoresResult',
                    controller: 'hedayatTahsilyScoresResultController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScoresResult/hedayatTahsilyScoresResultController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScoresResult/hedayatTahsilyScoresResult.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerStudentJaheshSearch1399', angularAMD.route({
                    title: 'نمایش  دانش اموزان  جهشی جامانده  سال 1399',
                    url: '/registerStudentJaheshSearch1399',
                    controller: 'registerStudentJaheshSearch1399Controller',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/registerStudentJaheshSearch1399Controller.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/registerStudentJaheshSearch1399.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('createRegisterJahesh1399', angularAMD.route({
                    title: 'ثبت درخواست  دانش اموزان  جهشی جامانده  سال 1399',
                    url: '/createRegisterJahesh1399',
                    controller: 'createRegisterJahesh1399Controller',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Normal/createRegisterJahesh1399Controller.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Normal/createRegisterJahesh1399.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('showStudentForJahesh1399Search', angularAMD.route({
                    title: 'نمایش دانش اموزان  جهشی جامانده  سال 1399',
                    url: '/showStudentForJahesh1399Search',
                    controller: 'showStudentForJahesh1399SearchController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Normal/showStudentForJahesh1399SearchController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Normal/showStudentForJahesh1399Search.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('showStudentPermissionForJahesh1399', angularAMD.route({
                    title: 'ثبت درخواست  دانش اموزان  جهشی با رای کمیسیون جامانده  سال 1399',
                    url: '/showStudentPermissionForJahesh1399',
                    controller: 'showStudentPermissionForJahesh1399Controller',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Permission/showStudentPermissionForJahesh1399Controller.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/regiesterJahesh1399/regiesterJahesh1399Permission/showStudentPermissionForJahesh1399.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('payegahTarhehTamighEbtedayi', angularAMD.route({
                    title: 'افزودن پایگاه طرح تعمیق در دوره ی ابتدایی',
                    url: '/payegahTarhehTamighEbtedayi',
                    controller: 'payegahTarhehTamighEbtedayiController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/payegahTarhehTamighEbtedayiController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/payegahTarhehTamighEbtedayi.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('payegahTarhehTamighEbtedayiAdd', angularAMD.route({
                    title: 'افزودن پایگاه',
                    url: '/payegahTarhehTamighEbtedayiAdd',
                    controller: 'payegahTarhehTamighEbtedayiAddController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/payegahTarhehTamighEbtedayiAddController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/payegahTarhehTamighEbtedayiAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('addStudentTarhehTamighEbtedayi', angularAMD.route({
                    title: 'مدیریت دانش آموزان (ابتدایی) مدرسه (مبدا) در طرح تعمیق',
                    url: '/addStudentTarhehTamighEbtedayi',
                    controller: 'addStudentTarhehTamighEbtedayiController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTarhehTamighEbtedayiController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTarhehTamighEbtedayi.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('addStudentTarhehTamighEbtedayiAdd', angularAMD.route({
                    title: 'فرستادن دانش آموز (ابتدایی) به پایگاه',
                    url: '/addStudentTarhehTamighEbtedayiAdd',
                    controller: 'addStudentTarhehTamighEbtedayiAddController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTarhehTamighEbtedayiAddController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTarhehTamighEbtedayiAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('acceptStudentTarhehTamighEbtedayi', angularAMD.route({
                    title: 'مدیریت دانش آموزان (ابتدایی) مدرسه (مقصد) در طرح تعمیق',
                    url: '/acceptStudentTarhehTamighEbtedayi',
                    controller: 'acceptStudentTarhehTamighEbtedayiController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/acceptStudent/acceptStudentTarhehTamighEbtedayiController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/acceptStudent/acceptStudentTarhehTamighEbtedayi.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('payegahTTMotevaseteh', angularAMD.route({
                    title: 'افزودن پایگاه طرح تعمیق در دوره ی متوسطه',
                    url: '/payegahTTMotevaseteh',
                    controller: 'payegahTTMotevasetehController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/payegahTTMotevasetehController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/payegahTTMotevaseteh.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('payegahTTMotevasetehAdd', angularAMD.route({
                    title: 'افزودن پایگاه',
                    url: '/payegahTTMotevasetehAdd',
                    controller: 'payegahTTMotevasetehAddController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/payegahTTMotevasetehAddController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/payegahTTMotevasetehAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('addStudentTTMotevaseteh', angularAMD.route({
                    title: 'مدیریت دانش آموزان (متوسطه) مدرسه (مبدا) در طرح تعمیق',
                    url: '/addStudentTTMotevaseteh',
                    controller: 'addStudentTTMotevasetehController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTTMotevasetehController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTTMotevaseteh.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('addStudentTTMotevasetehAdd', angularAMD.route({
                    title: 'فرستادن دانش آموز (متوسطه) به پایگاه',
                    url: '/addStudentTTMotevasetehAdd',
                    controller: 'addStudentTTMotevasetehAddController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTTMotevasetehAddController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/addStudent/addStudentTTMotevasetehAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('acceptStudentTTMotevaseteh', angularAMD.route({
                    title: 'مدیریت دانش آموزان (متوسطه) مدرسه (مقصد) در طرح تعمیق',
                    url: '/acceptStudentTTMotevaseteh',
                    controller: 'acceptStudentTTMotevasetehController',
                    controllerUrl: baseUrl + 'register/tarhehTamigh/acceptStudent/acceptStudentTTMotevasetehController.js',
                    templateUrl: baseUrl + 'register/tarhehTamigh/acceptStudent/acceptStudentTTMotevaseteh.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('registrationPercentage', angularAMD.route({
                    title: 'درصد گیری ثبت نام 1401 استان ها در تمامی پایه ها نسبت به سال گذشته',
                    url: '/registrationPercentage',
                    controller: 'registrationPercentageController',
                    controllerUrl: baseUrl + 'report/registrationPercentage/registrationPercentageController.js',
                    templateUrl: baseUrl + 'report/registrationPercentage/registrationPercentage.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('kardaaneshMajorsMojavvezMng', angularAMD.route({
                    title: 'ثبت مجوز رشته های فنی  حرفه ای و کاردانش',
                    url: '/kardaaneshMajorsMojavvezMng',
                    controller: "kardaaneshMajorsMojavvezMngController",
                    templateUrl: baseUrl + "register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvez/kardaaneshMajorsMojavvezMng.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvez/kardaaneshMajorsMojavvezMngController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('kardaaneshMajorsMojavvezAdd', angularAMD.route({
                    title: '+ثبت مجوز رشته های فنی  حرفه ای و کاردانش',
                    url: '/kardaaneshMajorsMojavvezAdd',
                    controller: "kardaaneshMajorsMojavvezAddController",
                    templateUrl: baseUrl + "register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvez/kardaaneshMajorsMojavvezAdd.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvez/kardaaneshMajorsMojavvezAddController.js',
                    params: {
                        obj: null,
                    },
                }))

                .state('kardaaneshMajorsMojavvezAdultMng', angularAMD.route({
                    title: 'ثبت مجوز رشته های فنی  حرفه ای و کاردانش -شیوه نیمسالی واحدی',
                    url: '/kardaaneshMajorsMojavvezAdultMng',
                    controller: "kardaaneshMajorsMojavvezAdultMngController",
                    templateUrl: baseUrl + "register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvezAdult/kardaaneshMajorsMojavvezAdultMng.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvezAdult/kardaaneshMajorsMojavvezAdultMngController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('kardaaneshMajorsMojavvezAdultAdd', angularAMD.route({
                    title: 'ثبت مجوز رشته های فنی  حرفه ای و کاردانش -شیوه نیمسالی واحدی',
                    url: '/kardaaneshMajorsMojavvezAdultAdd',
                    controller: "kardaaneshMajorsMojavvezAdultAddController",
                    templateUrl: baseUrl + "register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvezAdult/kardaaneshMajorsMojavvezAdultAdd.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/kardaaneshMajorsMojavvezMng/kardaaneshMajorsMojavvezAdult/kardaaneshMajorsMojavvezAdultAddController.js',
                    params: {
                        obj: null,
                    },
                }))
                .state('liberationOfSportsEducationalSearch', angularAMD.route({
                    title: 'طرح خرازی',
                    url: '/liberationOfSportsEducationalSearch',
                    controller: 'liberationOfSportsEducationalSearchController',
                    controllerUrl: baseUrl + 'base/liberationOfSportsEducational/school/liberationOfSportsEducationalSearchController.js',
                    templateUrl: baseUrl + 'base/liberationOfSportsEducational/school/liberationOfSportsEducationalSearch.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('liberationOfSportsEducational', angularAMD.route({
                    title: 'طرح خرازی ایجاد دانش اموز',
                    url: '/liberationOfSportsEducational',
                    controller: 'liberationOfSportsEducationalController',
                    controllerUrl: baseUrl + 'base/liberationOfSportsEducational/school/liberationOfSportsEducationalController.js',
                    templateUrl: baseUrl + 'base/liberationOfSportsEducational/school/liberationOfSportsEducational.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('sportTraning', angularAMD.route({
                    title: 'طرح خرازی ایجاد دانش اموز',
                    url: '/sportTraning',
                    controller: 'sportTraningController',
                    controllerUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/sportTraningController.js',
                    templateUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/sportTraning.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('requestFor6Signature', angularAMD.route({
                    title: 'درخواست فرم 6 امضایی',
                    url: '/requestFor6Signature',
                    controller: 'requestFor6SignatureController',
                    controllerUrl: baseUrl + 'register/requestFor6Signature/requestFor6SignatureController.js',
                    templateUrl: baseUrl + 'register/requestFor6Signature/requestFor6Signature.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('requestShowFor6Signature', angularAMD.route({
                    title: 'نمایش درخواست های فرم 6 امضایی',
                    url: '/requestShowFor6Signature',
                    controller: 'requestShowFor6SignatureController',
                    controllerUrl: baseUrl + 'register/requestShowFor6Signature/requestShowFor6SignatureController.js',
                    templateUrl: baseUrl + 'register/requestShowFor6Signature/requestShowFor6Signature.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('report6Signature', angularAMD.route({
                    title: 'گزارش فرم 6 امضایی',
                    url: '/report6Signature',
                    controller: 'report6SignatureController',
                    controllerUrl: baseUrl + 'report/report6Signature/report6SignatureController.js',
                    templateUrl: baseUrl + 'report/report6Signature/report6Signature.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('registerStudent', angularAMD.route({
                    title: 'ثبت نام دانش آموزان  در مجتمع آموزشی ',
                    url: '/registerStudent',
                    controller: 'registerStudentController',
                    controllerUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/registerStudentController.js',
                    templateUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/registerStudent.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('presentListStudent', angularAMD.route({
                    title: 'لیست حضور دانش آموزان ',
                    url: '/presentListStudent',
                    controller: 'presentListStudentController',
                    controllerUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/presentListStudentController.js',
                    templateUrl: baseUrl + 'base/liberationOfSportsEducational/sportTraning/presentListStudent.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('preRegisterJaheshPrimarySchoolEstessnaeeSearch', angularAMD.route({
                    title: 'نمایش دانش اموزان پیش ثبت نام ',
                    url: '/preRegisterJaheshPrimarySchoolEstessnaeeSearch',
                    controller: 'preRegisterJaheshPrimarySchoolEstessnaeeSearchController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchoolEstessnaee/preRegisterJaheshPrimarySchoolEstessnaeeSearchController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchoolEstessnaee/preRegisterJaheshPrimarySchoolEstessnaeeSearch.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('registerStudentJaheshPrimarySchoolESSearch', angularAMD.route({
                    title: 'نمایش دانش اموزان  ',
                    url: '/registerStudentJaheshPrimarySchoolESSearch',
                    controller: 'registerStudentJaheshPrimarySchoolESSearchController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/registerStudentJaheshPrimarySchoolESSearchController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/registerStudentJaheshPrimarySchoolESSearch.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('preRegisterJaheshPrimarySchoolEstessnaee', angularAMD.route({
                    title: 'ثبت درخواست پیش ثبت نام جهش  ',
                    url: '/preRegisterJaheshPrimarySchoolEstessnaee',
                    controller: 'preRegisterJaheshPrimarySchoolEstessnaeeController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchoolEstessnaee/preRegisterJaheshPrimarySchoolEstessnaeeController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/preRegisterJaheshPrimarySchoolEstessnaee/preRegisterJaheshPrimarySchoolEstessnaee.html?',
                    params: {
                        obj: { key: true },
                    },
                }))

                .state('showStudentForJaheshEstesnaee', angularAMD.route({
                    title: 'ثبت نام جهش عادی برای دانش آموزان با وضعیت استعلام قبول   ',
                    url: '/showStudentForJaheshEstesnaee',
                    controller: 'showStudentForJaheshEstesnaeeController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/showStudentForJaheshEstesnaeeController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/showStudentForJaheshEstesnaee.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('registerStudentJaheshEstesnaee', angularAMD.route({
                    title: 'ثبت درخواست جهش عادی  ',
                    url: '/registerStudentJaheshEstesnaee',
                    controller: 'registerStudentJaheshEstesnaeeController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/registerStudentJaheshEstesnaeeController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/registerStudentJaheshEstesnaee.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('scoreIndividualJaheshEstesnaee', angularAMD.route({
                    title: 'ثبت درخواست جهش عادی  ',
                    url: '/scoreIndividualJaheshEstesnaee',
                    controller: 'scoreIndividualJaheshEstesnaeeController',
                    controllerUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/scoreIndividualJaheshEstesnaeeController.js',
                    templateUrl: baseUrl + 'register/registerStudentJahesh/registerStudentJaheshPrimarySchoolEstesnaee/scoreIndividualJaheshEstesnaee.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('tosifiEducationalJaheshSearchEstesnaee', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی',
                    url: '/tosifiEducationalJaheshSearchEstesnaee',
                    controller: 'tosifiEducationalJaheshSearchEstesnaeeController',
                    controllerUrl: baseUrl + 'karnameh/tosifiEducationalJaheshEstesnaee/tosifiEducationalJaheshSearchEstesnaeeController.js',
                    templateUrl: baseUrl + 'karnameh/tosifiEducationalJaheshEstesnaee/tosifiEducationalJaheshSearchEstesnaee.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tosifiEducationalJaheshEstesnaee', angularAMD.route({
                    title: ' کارنامه دانش آموزان جهشی',
                    url: '/tosifiEducationalJaheshEstesnaee',
                    controller: 'tosifiEducationalJaheshEstesnaeeController',
                    controllerUrl: baseUrl + 'karnameh/tosifiEducationalJaheshEstesnaee/tosifiEducationalJaheshEstesnaeeController.js',
                    templateUrl: baseUrl + 'karnameh/tosifiEducationalJaheshEstesnaee/tosifiEducationalJaheshEstesnaee.html?',
                    params: {
                        obj: null,
                    },
                }))

                .state('nirooKharidKhedmat', angularAMD.route({
                    title: 'نیروهای خرید خدمت',
                    url: '/nirooKharidKhedmat',
                    controller: 'nirooKharidKhedmatController',
                    controllerUrl: baseUrl + 'register/nirooKharidKhedmat/nirooKharidKhedmatController.js',
                    templateUrl: baseUrl + 'register/nirooKharidKhedmat/nirooKharidKhedmat.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('nirooKharidKhedmatAdd', angularAMD.route({
                    title: 'ثبت نیروهای خرید خدمت',
                    url: '/nirooKharidKhedmatAdd',
                    controller: 'nirooKharidKhedmatAddController',
                    controllerUrl: baseUrl + 'register/nirooKharidKhedmat/nirooKharidKhedmatAddController.js',
                    templateUrl: baseUrl + 'register/nirooKharidKhedmat/nirooKharidKhedmatAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('boroonSepari', angularAMD.route({
                    title: 'برونسپاری',
                    url: '/boroonSepari',
                    controller: 'boroonSepariController',
                    controllerUrl: baseUrl + 'register/boroonSepari/boroonSepariController.js',
                    templateUrl: baseUrl + 'register/boroonSepari/boroonSepari.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('boroonSepariAdd', angularAMD.route({
                    title: 'افزودن برونسپاری',
                    url: '/boroonSepariAdd',
                    controller: 'boroonSepariAddController',
                    controllerUrl: baseUrl + 'register/boroonSepari/boroonSepariAddController.js',
                    templateUrl: baseUrl + 'register/boroonSepari/boroonSepariAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('festival', angularAMD.route({
                    title: 'جشنواره',
                    url: '/festival',
                    controller: 'festivalController',
                    controllerUrl: baseUrl + 'register/festivaal/creation/festivalController.js',
                    templateUrl: baseUrl + 'register/festivaal/creation/festival.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('festivalAdd', angularAMD.route({
                    title: 'افزودن جشنواره',
                    url: '/festivalAdd',
                    controller: 'festivalAddController',
                    controllerUrl: baseUrl + 'register/festivaal/creation/festivalAddController.js',
                    templateUrl: baseUrl + 'register/festivaal/creation/festivalAdd.html?',
                    params: {
                        obj: { key: true },
                    },
                }))

                .state('missingEducation', angularAMD.route({
                    title: 'طرح شهيد محمودوند (بازماندگان از تحصيل)',
                    url: '/missingEducation',
                    controller: 'missingEducationController',
                    controllerUrl: baseUrl + 'register/missingEducation/missingEducation/missingEducationController.js',
                    templateUrl: baseUrl + 'register/missingEducation/missingEducation/missingEducation.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('missingEducationReport', angularAMD.route({
                    title: 'گزارش  پیگیری بازماندگان از تحصيل',
                    url: '/missingEducationReport',
                    controller: 'missingEducationReportController',
                    controllerUrl: baseUrl + 'report/missingEducation/missingEducationReport/missingEducationReportController.js',
                    templateUrl: baseUrl + 'report/missingEducation/missingEducationReport/missingEducationReport.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('personelTracking', angularAMD.route({
                    title: ' پیگیری دانش آموزان بازمانده از تحصیل',
                    url: '/personelTracking',
                    controller: 'personelTrackingController',
                    controllerUrl: baseUrl + 'register/missingEducation/personelTracking/personelTrackingController.js',
                    templateUrl: baseUrl + 'register/missingEducation/personelTracking/personelTracking.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('defineMajor', angularAMD.route({
                    title: 'ثبت رشته برای جشنواره ی مسابقات ورزشی',
                    url: '/defineMajor',
                    controller: 'defineMajorController',
                    controllerUrl: baseUrl + 'festivals/sportCompetition/defineMajor/defineMajorController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetition/defineMajor/defineMajor.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('schoolSetMajor', angularAMD.route({
                    title: 'مسابقات ورزش دانش آموزان کشور- مدرسه ای (صد مسابقه در صد روز)',
                    url: '/schoolSetMajor',
                    controller: 'schoolSetMajorController',
                    controllerUrl: baseUrl + 'festivals/sportCompetition/schoolSetMajor/schoolSetMajorController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetition/schoolSetMajor/schoolSetMajor.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('regionSetMajor', angularAMD.route({
                    title: 'مسابقات ورزش دانش آموزان کشور- منطقه ای (صد مسابقه در صد روز)',
                    url: '/regionSetMajor',
                    controller: 'regionSetMajorController',
                    controllerUrl: baseUrl + 'festivals/sportCompetition/regionSetMajor/regionSetMajorController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetition/regionSetMajor/regionSetMajor.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('stateSetMajor', angularAMD.route({
                    title: 'مسابقات ورزش دانش آموزان کشور- استانی (صد مسابقه در صد روز)',
                    url: '/stateSetMajor',
                    controller: 'stateSetMajorController',
                    controllerUrl: baseUrl + 'festivals/sportCompetition/stateSetMajor/stateSetMajorController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetition/stateSetMajor/stateSetMajor.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('setadSetMajor', angularAMD.route({
                    title: 'مسابقات ورزش دانش آموزان کشور- ستادی (صد مسابقه در صد روز)',
                    url: '/setadSetMajor',
                    controller: 'setadSetMajorController',
                    controllerUrl: baseUrl + 'festivals/sportCompetition/setadSetMajor/setadSetMajorController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetition/setadSetMajor/setadSetMajor.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('schoolSetMajorPersonel', angularAMD.route({
                    title: 'ثبت تیم های فرهنگیان برای جشنواره ی مسابقات ورزشی در سطح مدرسه',
                    url: '/schoolSetMajorPersonel',
                    controller: 'schoolSetMajorPersonelController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionPersonel/schoolSetMajorPersonel/schoolSetMajorPersonelController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionPersonel/schoolSetMajorPersonel/schoolSetMajorPersonel.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('regionSetMajorPersonel', angularAMD.route({
                    title: 'ثبت تیم های فرهنگیان برای جشنواره ی مسابقات ورزشی در سطح منطقه',
                    url: '/regionSetMajorPersonel',
                    controller: 'regionSetMajorPersonelController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionPersonel/regionSetMajorPersonel/regionSetMajorPersonelController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionPersonel/regionSetMajorPersonel/regionSetMajorPersonel.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('stateSetMajorPersonel', angularAMD.route({
                    title: 'ثبت تیم های فرهنگیان برای جشنواره ی مسابقات ورزشی در سطح استان',
                    url: '/stateSetMajorPersonel',
                    controller: 'stateSetMajorPersonelController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionPersonel/stateSetMajorPersonel/stateSetMajorPersonelController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionPersonel/stateSetMajorPersonel/stateSetMajorPersonel.html?',
                    params: {
                        obj: { key: true },
                    },
                }))
                .state('setadSetMajorPersonel', angularAMD.route({
                    title: 'ثبت تیم های فرهنگیان برای جشنواره مسابقات ورزشی در سطح ستاد',
                    url: '/setadSetMajorPersonel',
                    controller: 'setadSetMajorPersonelController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionPersonel/setadSetMajorPersonel/setadSetMajorPersonelController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionPersonel/setadSetMajorPersonel/setadSetMajorPersonel.html?',
                    params: {
                        obj: { key: true },
                    },
                }))

                .state('updateCapacity', angularAMD.route({
                    title: 'ظرفیت بندی مدارس سمپاد',
                    url: '/SampadCapacity',
                    controller: 'updateCapacityController',
                    controllerUrl: baseUrl + 'sampad/updateCapacity/updateCapacityController.js',
                    templateUrl: baseUrl + 'sampad/updateCapacity/updateCapacity.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('definitionExamSearch', angularAMD.route({
                    title: 'نمایش تنظیمات آزمون',
                    url: '/definitionSearch',
                    controller: 'definitionSearchController',
                    controllerUrl: baseUrl + 'register/mgmExam/definition/definitionSearchController.js',
                    templateUrl: baseUrl + 'register/mgmExam/definition/definitionSearch.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('definitionExam', angularAMD.route({
                    title: 'تنظیمات آزمون ',
                    url: '/definition',
                    controller: 'definitionController',
                    controllerUrl: baseUrl + 'register/mgmExam/definition/definitionController.js',
                    templateUrl: baseUrl + 'register/mgmExam/definition/definition.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('scheduleExam', angularAMD.route({
                    title: 'تنظیمات زمانبندی آزمون ',
                    url: '/scheduleExam',
                    controller: 'scheduleExamController',
                    controllerUrl: baseUrl + 'register/mgmExam/schedule/scheduleExamController.js',
                    templateUrl: baseUrl + 'register/mgmExam/schedule/scheduleExam.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportExam1', angularAMD.route({
                    title: 'گزارش ثبت نام آزمون ها',
                    url: '/reportExam1',
                    controller: 'reportController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/report.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportOlympiadDetails', angularAMD.route({
                    title: ' گزارش تفصیلی آزمون ها المپیاد',
                    url: '/reportOlympiadDetails',
                    controller: 'reportOlympiadDetailsController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportOlympiadDetailsController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/reportOlympiadDetails.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('polarization', angularAMD.route({
                    title: 'قطب بندی',
                    url: '/polarization',
                    controller: 'polarizationController',
                    controllerUrl: baseUrl + 'register/mgmExam/polarization/polarizationController.js',
                    templateUrl: baseUrl + 'register/mgmExam/polarization/polarization.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('zoning', angularAMD.route({
                    title: 'حوزه آزمون',
                    url: '/zoning',
                    controller: 'zoningController',
                    controllerUrl: baseUrl + 'register/mgmExam/zoning/zoningController.js',
                    templateUrl: baseUrl + 'register/mgmExam/zoning/zoning.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('zoningDefinition', angularAMD.route({
                    title: 'تعریف حوزه آزمون',
                    url: '/zoningDefinition',
                    controller: 'zoningDefinitionController',
                    controllerUrl: baseUrl + 'register/mgmExam/zoning/zoningDefinitionController.js',
                    templateUrl: baseUrl + 'register/mgmExam/zoning/zoningDefinition.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportOlympiadStatistics', angularAMD.route({
                    title: ' گزارش آماری آزمون ها المپیاد',
                    url: '/reportOlympiadStatistics',
                    controller: 'reportOlympiadStatisticsController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportOlympiadStatisticsController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/reportOlympiadStatistics.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('setZoning', angularAMD.route({
                    title: 'حوزه بندی',
                    url: '/setZoning',
                    controller: 'setZoningController',
                    controllerUrl: baseUrl + 'register/mgmExam/polarization/setZoningController.js',
                    templateUrl: baseUrl + 'register/mgmExam/polarization/setZoning.html?',
                    params: {
                        obj: null,
                    },
                }))
                ////////////////////////////////////////////////////////////////////////////////// Final - Start //////////////////////////////////////////////////////////////////////////
                .state('event', angularAMD.route({
                    title: 'اطلاعیه ها',
                    url: '/event',
                    controller: 'eventController',
                    controllerUrl: baseUrl + 'final/register/event/eventController.js',
                    templateUrl: baseUrl + 'final/register/event/event.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalExamSchedule', angularAMD.route({
                    title: 'برنامه امتحانی',
                    url: '/finalExamSchedule',
                    controller: 'finalExamScheduleController',
                    controllerUrl: baseUrl + 'final/register/finalExamSchedule/finalExamScheduleController.js',
                    templateUrl: baseUrl + 'final/register/finalExamSchedule/finalExamSchedule.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('studentDetail', angularAMD.route({
                    title: 'مشخصات دانش آموزان',
                    url: '/studentDetail',
                    controller: 'studentDetailController',
                    controllerUrl: baseUrl + 'final/register/studentDetail/studentDetailController.js',
                    templateUrl: baseUrl + 'final/register/studentDetail/studentDetail.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalNotifications', angularAMD.route({
                    title: 'اطلاعیه و اخبار فاینال',
                    url: '/finalNotifications',
                    controller: 'finalNotificationsController',
                    controllerUrl: baseUrl + 'final/register/finalNotifications/finalNotificationsController.js',
                    templateUrl: baseUrl + 'final/register/finalNotifications/finalNotifications.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalHoze', angularAMD.route({
                    title: 'حوزه بندی',
                    url: '/finalHoze',
                    controller: 'finalHozeController',
                    controllerUrl: baseUrl + 'final/register/finalHoze/finalHozeController.js',
                    templateUrl: baseUrl + 'final/register/finalHoze/finalHoze.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('schoolToHoze', angularAMD.route({
                    title: 'تخصیص مدرسه به حوزه',
                    url: '/schoolToHoze',
                    controller: 'schoolToHozeController',
                    controllerUrl: baseUrl + 'final/register/schoolToHoze/schoolToHozeController.js',
                    templateUrl: baseUrl + 'final/register/schoolToHoze/schoolToHoze.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('areaManagers', angularAMD.route({
                    title: 'مدیریت مسئولین منطقه',
                    url: '/areaManagers',
                    controller: 'areaManagersController',
                    controllerUrl: baseUrl + 'final/register/areaManagers/areaManagersController.js',
                    templateUrl: baseUrl + 'final/register/areaManagers/areaManagers.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalRequests', angularAMD.route({
                    title: 'درخواست های فاینال',
                    url: '/finalRequests',
                    controller: 'finalRequestsController',
                    controllerUrl: baseUrl + 'final/register/finalRequests/finalRequestsController.js',
                    templateUrl: baseUrl + 'final/register/finalRequests/finalRequests.html?',
                    params: {
                        obj: null,
                    },
                }))
                ////////////////////////////////////////////////////////////////////////////////// Final - End //////////////////////////////////////////////////////////////////////////
                .state('suppoerStudentInfo', angularAMD.route({
                    title: 'اصلاحات دانش آموزی',
                    url: '/studentInfo',
                    controller: 'studentInfoController',
                    controllerUrl: baseUrl + 'support/studentInfo/studentInfoController.js',
                    templateUrl: baseUrl + 'support/studentInfo/studentInfo.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('adultsOutSchool', angularAMD.route({
                    title: 'بزرگسالان (بیرون از مدرسه)',
                    url: '/adultsOutSchool',
                    controller: 'adultsOutSchoolController',
                    controllerUrl: baseUrl + 'register/adultsOutSchool/adultsOutSchoolController.js',
                    templateUrl: baseUrl + 'register/adultsOutSchool/adultsOutSchool.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('adultsOutSchoolAdd', angularAMD.route({
                    title: 'فرستادن درس های دانش آموز',
                    url: '/adultsOutSchoolAdd',
                    controller: 'adultsOutSchoolAddController',
                    controllerUrl: baseUrl + 'register/adultsOutSchool/adultsOutSchoolAddController.js',
                    templateUrl: baseUrl + 'register/adultsOutSchool/adultsOutSchoolAdd.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('secretariatAndEducationalGroup', angularAMD.route({
                    title: 'دبیرخانه و گروه های آموزشی',
                    url: '/secretariatAndEducationalGroup',
                    controller: 'secretariatAndEducationalGroupController',
                    controllerUrl: baseUrl + 'register/secretariatAndEducationalGroup/secretariatAndEducationalGroupController.js',
                    templateUrl: baseUrl + 'register/secretariatAndEducationalGroup/secretariatAndEducationalGroup.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('pnlMngStudentInfo', angularAMD.route({
                    title: 'بررسی درخواست ها ',
                    url: '/pnlMngStudentInfo',
                    controller: 'pnlMngStudentInfoController',
                    controllerUrl: baseUrl + 'support/studentInfo/pnlMngStudentInfoController.js',
                    templateUrl: baseUrl + 'support/studentInfo/pnlMngStudentInfo.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('sportCompetitionReport', angularAMD.route({
                    title: 'گزارشات مسابقات ورزش دانش آموزان کشور (صدمسابقه در صد روز)',
                    url: '/sportCompetitionReport',
                    controller: 'sportCompetitionReportController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionReport/sportCompetitionReportController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionReport/sportCompetitionReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('sportCompetitionPersonelReport', angularAMD.route({
                    title: 'گزارش جشنواره ورزشی فرهنگیان',
                    url: '/sportCompetitionPersonelReport',
                    controller: 'sportCompetitionPersonelReportController',
                    controllerUrl: baseUrl + 'festivals/sportCompetitionPersonelReport/sportCompetitionPersonelReportController.js',
                    templateUrl: baseUrl + 'festivals/sportCompetitionPersonelReport/sportCompetitionPersonelReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('registerTarmim', angularAMD.route({
                    title: 'ثبت نام طرح ترمیم/ایجاد سابقه',
                    url: '/registerTarmim',
                    controller: 'registerTarmimController',
                    controllerUrl: baseUrl + 'tarmim/register/registerTarmimController.js',
                    templateUrl: baseUrl + 'tarmim/register/registerTarmim.html?',
                    params: {
                        obj: null,
                    },
                }))
                //.state('registerTarmimStudent', angularAMD.route({
                //    title: 'ثبت نام دانش آموز فارغ التحصیل',
                //    url: '/registerTarmimStudent',
                //    controller: 'registerController',
                //    controllerUrl: baseUrl + 'tarmim/student/registerController.js',
                //    templateUrl: baseUrl + 'tarmim/student/register.html?',
                //    params: {
                //        obj: null,
                //    },
                //}))
                .state('autoRegisterTarmimStudent', angularAMD.route({
                    title: 'دریافت کد سوابق تحصیلی مشغول به تحصیلان',
                    url: '/autoRegisterTarmimStudent',
                    controller: 'autoRegisterController',
                    controllerUrl: baseUrl + 'tarmim/student/autoRegisterController.js',
                    templateUrl: baseUrl + 'tarmim/student/autoRegister.html?',
                    params: {
                        obj: null,
                    },
                }))
                //.state('defineTarmimHistory', angularAMD.route({
                //    title: 'ثبت درخواست جدید',
                //    url: '/defineTarmimHistory',
                //    controller: 'defineController',
                //    controllerUrl: baseUrl + 'tarmim/history/defineController.js',
                //    templateUrl: baseUrl + 'tarmim/history/define.html?',
                //    params: {
                //        obj: null,
                //    },
                //}))
                .state('searchTarmimHistory', angularAMD.route({
                    title: 'درخواست های ثبت شده',
                    url: '/searchTarmimHistory',
                    controller: 'searchController',
                    controllerUrl: baseUrl + 'tarmim/history/searchController.js',
                    templateUrl: baseUrl + 'tarmim/history/search.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('printTarmimHistory', angularAMD.route({
                    title: 'چاپ انتخاب واحد',
                    url: '/printTarmimHistory',
                    controller: 'printController',
                    controllerUrl: baseUrl + 'tarmim/history/printController.js',
                    templateUrl: baseUrl + 'tarmim/history/print.html?',
                    params: {
                        obj: null,
                    },
                }))
                //.state('searchTarmimStudent', angularAMD.route({
                //    title: 'دانش آموزان ثبت شده',
                //    url: '/searchTarmimStudent',
                //    controller: 'searchController',
                //    controllerUrl: baseUrl + 'tarmim/student/searchController.js',
                //    templateUrl: baseUrl + 'tarmim/student/search.html?',
                //    params: {
                //        obj: null,
                //    },
                //}))
                .state('defineTarmimConverterCourse', angularAMD.route({
                    title: 'فهرست دروس جایگزین',
                    url: '/defineTarmimConverterCourse',
                    controller: 'defineController',
                    controllerUrl: baseUrl + 'tarmim/converter/defineController.js',
                    templateUrl: baseUrl + 'tarmim/converter/define.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('searchTarmimConverterCourse', angularAMD.route({
                    title: 'فهرست دروس جایگزین طرح ایجاد و ترمیم سابقه',
                    url: '/searchTarmimConverterCourse',
                    controller: 'searchController',
                    controllerUrl: baseUrl + 'tarmim/converter/searchController.js',
                    templateUrl: baseUrl + 'tarmim/converter/search.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('finalTarmim', angularAMD.route({
                    title: 'ارسال به فاینال',
                    url: '/finalTarmim',
                    controller: 'tarmimCourseScoreController',
                    controllerUrl: baseUrl + 'tarmim/final/tarmimCourseScoreController.js',
                    templateUrl: baseUrl + 'tarmim/final/tarmimCourseScore.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('educationalMonitoring', angularAMD.route({
                    title: 'پایش تحصیلی',
                    url: '/educationalMonitoring',
                    controller: 'educationalMonitoringController',
                    controllerUrl: baseUrl + 'report/educationalMonitoring/educationalMonitoringController.js',
                    templateUrl: baseUrl + 'report/educationalMonitoring/educationalMonitoring.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportUnAss', angularAMD.route({
                    title: 'گزارش ثبت نام آزمون ها',
                    url: '/reportUnAss',
                    controller: 'reportUnAssZoningController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportUnAssZoningController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/reportUnAssZoning.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportZoningStudent', angularAMD.route({
                    title: 'گزارش آمار حوزه بندی',
                    url: '/reportZoningStudent',
                    controller: 'reportZoningStudentController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportZoningStudentController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/reportZoningStudent.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('reportAllAmmar', angularAMD.route({
                    title: 'گزارش آمار قطب بندی',
                    url: '/reportAllAmmar',
                    controller: 'reportAllAmmarController',
                    controllerUrl: baseUrl + 'register/mgmExam/reports/reportAllAmmarController.js',
                    templateUrl: baseUrl + 'register/mgmExam/reports/reportAllAmmar.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('olympiadCards', angularAMD.route({
                    title: 'چاپ اطلاعات آزمون',
                    url: '/olympiadCards',
                    controller: 'olympiadCardsController',
                    controllerUrl: baseUrl + 'register/olympiadCards/olympiadCardsController.js',
                    templateUrl: baseUrl + 'register/olympiadCards/olympiadCards.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tarhShahab', angularAMD.route({
                    title: 'طرح شهاب',
                    url: '/tarhShahab',
                    controller: 'tarhShahabController',
                    controllerUrl: baseUrl + 'scoreEntry/tarhShahab/tarhShahabController.js',
                    templateUrl: baseUrl + 'scoreEntry/tarhShahab/tarhShahab.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('nemonehCapacity', angularAMD.route({
                    title: 'ظرفیت بندی مدارس نمونه دولتی',
                    url: '/nemonehCapacity',
                    controller: 'nemonehCapacityController',
                    controllerUrl: baseUrl + 'sampad/nemonehCapacity/nemonehCapacityController.js',
                    templateUrl: baseUrl + 'sampad/nemonehCapacity/nemonehCapacity.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('nemonehRegisterReport', angularAMD.route({
                    title: 'گزارش ثبت نام آزمون نمونه دولتی',
                    url: '/nemonehRegisterReport',
                    controller: 'nemonehRegisterReportController',
                    controllerUrl: baseUrl + 'sampad/nemonehRegisterReport/nemonehRegisterReportController.js',
                    templateUrl: baseUrl + 'sampad/nemonehRegisterReport/nemonehRegisterReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tarhShahabResult', angularAMD.route({
                    title: 'کارنامه طرح شهاب',
                    url: '/tarhShahabResult',
                    controller: 'tarhShahabResultController',
                    controllerUrl: baseUrl + 'scoreEntry/tarhShahabResult/tarhShahabResultController.js',
                    templateUrl: baseUrl + 'scoreEntry/tarhShahabResult/tarhShahabResult.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('tarhShahabReport', angularAMD.route({
                    title: 'گزارش طرح شهاب',
                    url: '/tarhShahabReport',
                    controller: 'tarhShahabReportController',
                    controllerUrl: baseUrl + 'scoreEntry/tarhShahabReport/tarhShahabReportController.js',
                    templateUrl: baseUrl + 'scoreEntry/tarhShahabReport/tarhShahabReport.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('getNemonBarg', angularAMD.route({
                    title: 'نمون برگ هدایت تحصیلی',
                    url: '/getNemonBarg',
                    controller: 'getNemonBargController',
                    controllerUrl: baseUrl + 'register/hedayatTahsilyScores/getNemonBarg/getNemonBargController.js',
                    templateUrl: baseUrl + 'register/hedayatTahsilyScores/getNemonBarg/getNemonBarg.html?',
                    params: {
                        obj: null,
                    },
                }))
                .state('nemonehReg', angularAMD.route({
                    title: 'پیش ثبت نام نمونه',
                    url: '/nemonehReg',
                    controller: "nemonehController",
                    templateUrl: baseUrl + "cartableRegister/nemoneh/nemoneh.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/nemoneh/nemonehController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('registrationSchedule', angularAMD.route({
                    title: 'زمانبندی ثبت نام',
                    url: '/registrationSchedule',
                    controller: "registrationScheduleController",
                    templateUrl: baseUrl + "register/registrationSchedule/registrationSchedule.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/registrationSchedule/registrationScheduleController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('registrationRequestReport', angularAMD.route({
                    title: 'گزارش ثبت نام',
                    url: '/registrationRequestReport',
                    controller: "registrationRequestReportController",
                    templateUrl: baseUrl + "report/registrationRequestReport/registrationRequestReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/registrationRequestReport/registrationRequestReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('getAcceptedNemoneh', angularAMD.route({
                    title: 'گزارش قبول شدگان مدارس نمونه',
                    url: '/GetAcceptedNemoneh',
                    controller: "GetAcceptedNemonehController",
                    templateUrl: baseUrl + "register/GetAcceptedNemoneh/GetAcceptedNemoneh.html",
                    controllerUrl: baseUrl + 'register/GetAcceptedNemoneh/GetAcceptedNemonehController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('hedayatTahsiliReport', angularAMD.route({
                    title: 'گزارش هدایت تحصیلی',
                    url: '/hedayatTahsiliReport',
                    controller: "hedayatTahsiliReportController",
                    templateUrl: baseUrl + "report/hedayatTahsiliReport/hedayatTahsiliReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/hedayatTahsiliReport/hedayatTahsiliReportController.js',
                    params: {
                        obj: {},
                    },
                })).state('sixSignatureRequest', angularAMD.route({
                    title: 'درخواست فرم شش امضا',
                    url: '/sixSignatureRequest',
                    controller: "sixSignatureRequestController",
                    templateUrl: baseUrl + "register/sixSignatureRequest/sixSignatureRequest.html",
                    controllerUrl: baseUrl + 'register/sixSignatureRequest/sixSignatureRequestController.js',
                    params: {
                        obj: {},
                    },
                })).state('registerNemoneh', angularAMD.route({
                    title: 'ثبت نام مدارس نمونه',
                    url: '/registerNemoneh',
                    controller: "registerNemonehController",
                    templateUrl: baseUrl + "cartableRegister/registerNemoneh/registerNemoneh.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'cartableRegister/registerNemoneh/registerNemonehController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commissionCapacity', angularAMD.route({
                    title: 'ظرفیت کمیسیون',
                    url: '/commissionCapacity',
                    controller: "commissionCapacityController",
                    templateUrl: baseUrl + "register/commissionCapacity/commissionCapacity.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/commissionCapacity/commissionCapacityController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commission', angularAMD.route({
                    title: 'کمیسیون/مجوز',
                    url: '/commission',
                    controller: "commissionController",
                    templateUrl: baseUrl + "register/commission/commission.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/commission/commissionController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('nemonehProtests', angularAMD.route({
                    title: 'اعتراضات مدارس نمونه',
                    url: '/nemonehProtests',
                    controller: "getNemonehProtestsController",
                    templateUrl: baseUrl + "register/getNemonehProtests/getNemonehProtests.html",
                    controllerUrl: baseUrl + 'register/getNemonehProtests/getNemonehProtestsController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('preRegistrationSSO', angularAMD.route({
                    title: 'پیش ثبت نام',
                    url: '/preRegistrationSSO',
                    controller: "preRegistrationSSOController",
                    templateUrl: baseUrl + "preRegistrationSSO/preRegistrationSSO.html",
                    controllerUrl: baseUrl + 'preRegistrationSSO/preRegistrationSSOController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('reportMinScore', angularAMD.route({
                    title: 'گزارش نمون برگ',
                    url: '/reportMinScore',
                    controller: "reportMinScoreController",
                    templateUrl: baseUrl + "/report/reghbatTavanayiReport/reportMinScore/reportMinScore.html?v=" + appVersion,
                    controllerUrl: baseUrl + '/report/reghbatTavanayiReport/reportMinScore/reportMinScoreController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('kebarSegharRequest', angularAMD.route({
                    title: 'ثبت درخواست کبر/صغر سن برای ثبت نام',
                    url: '/kebarSegharRequest',
                    controller: "kebarSegharRequestController",
                    templateUrl: baseUrl + "/businessError/kebarSegharChangeRequest/kebarSegharRequest.html?v=" + appVersion,
                    controllerUrl: baseUrl + '/businessError/kebarSegharChangeRequest/kebarSegharRequestController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('commissionRange', angularAMD.route({
                    title: 'محدوده کمیسیون',
                    url: '/commissionRange',
                    controller: "commissionRangeController",
                    templateUrl: baseUrl + "register/commissionRange/commissionRange.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/commissionRange/commissionRangeController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('registerationRequest', angularAMD.route({
                    title: 'درخواست ثبت نام',
                    url: '/registerationRequest',
                    controller: "registerationRequestController",
                    templateUrl: baseUrl + "register/registerationRequest/registerationRequest.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/registerationRequest/registerationRequestController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('appLog', angularAMD.route({
                    title: 'لاگ سامانه',
                    url: '/appLog',
                    controller: "appLogController",
                    templateUrl: baseUrl + "logger/appLog/appLog.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'logger/appLog/appLogController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('taeenSath', angularAMD.route({
                    title: 'تعیین سطح',
                    url: '/taeenSath',
                    controller: "taeenSathController",
                    templateUrl: baseUrl + "register/taeenSath/taeenSath.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/taeenSath/taeenSathController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('inquiryBonyadShahid', angularAMD.route({
                    title: 'استعلام بنیاد شهید',
                    url: '/inquiryBonyadShahid',
                    controller: "inquiryBonyadShahidController",
                    templateUrl: baseUrl + "inquiryServices/bonyadShahid/inquiryBonyadShahid.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'inquiryServices/bonyadShahid/inquiryBonyadShahidController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('inquiryRazmandegan', angularAMD.route({
                    title: 'استعلام بنیاد شهید',
                    url: '/inquiryRazmandegan',
                    controller: "inquiryRazmandeganController",
                    templateUrl: baseUrl + "inquiryServices/razmandegan/inquiryRazmandegan.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'inquiryServices/razmandegan/inquiryRazmandeganController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('fillHonarestanNemoneh', angularAMD.route({
                    title: 'کمیسیون خاص هنرستان نمونه دولتی',
                    url: '/fillHonarestanNemoneh',
                    controller: "fillHonarestanNemonehController",
                    templateUrl: baseUrl + "register/fillHonarestanNemoneh/fillHonarestanNemoneh.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'register/fillHonarestanNemoneh/fillHonarestanNemonehController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('tarheShahedStudentReport', angularAMD.route({
                    title: 'گزارش طرح شاهد (به تفکیک دانش آموز درس نمره)',
                    url: '/tarheShahedStudentReport',
                    controller: "tarheShahedStudentReportController",
                    templateUrl: baseUrl + "report/shahed/tarheShahedStudentReport/tarheShahedStudentReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/shahed/tarheShahedStudentReport/tarheShahedStudentReportController.js',
                    params: {
                        obj: {},
                    },
                }))
                .state('lastUpdate', angularAMD.route({
                    title: 'آخرین تغییرات',
                    url: '/lastUpdate',
                    controller: "lastUpdateController",
                    templateUrl: baseUrl + "base/lastUpdate/lastUpdate.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'base/lastUpdate/lastUpdateController.js',
                    params: {
                        obj: {},
                    },
                })).state('tarheShahedSchoolReport', angularAMD.route({
                    title: 'گزارش طرح شاهد (به تفکیک مدرسه درس نمره)',
                    url: '/tarheShahedSchoolReport',
                    controller: "tarheShahedSchoolReportController",
                    templateUrl: baseUrl + "report/shahed/tarheShahedSchoolReport/tarheShahedSchoolReport.html?v=" + appVersion,
                    controllerUrl: baseUrl + 'report/shahed/tarheShahedSchoolReport/tarheShahedSchoolReportController.js',
                    params: {
                        obj: {},
                    },
                }));
        //.state('scoreIndividualTosifi', angularAMD.route({
        //    title: 'ثبت نتايج ارزشيابي انفرادي  ',
        //    url: '/scoreIndividualTosifi',
        //    controller: 'scoreIndividualTosifiController',
        //    controllerUrl: baseUrl + 'scoreEntry/scoreIndividualTosifi/scoreIndividualTosifiController.js',
        //    templateUrl: baseUrl + 'scoreEntry/scoreIndividualTosifi/scoreIndividualTosifi.html?',
        //    params: {
        //        obj: { key: true },
        //    },
        //}))
        //.state('scoreIndividual', angularAMD.route({
        //    title: 'ورود نتايج انفرادی',
        //    url: '/scoreIndividual',
        //    controller: 'scoreIndividualController',
        //    controllerUrl: baseUrl + 'scoreEntry/scoreIndividual/scoreIndividualController.js',
        //    templateUrl: baseUrl + 'scoreEntry/scoreIndividual/scoreIndividual.html?',
        //    params: {
        //        obj: { key: true },
        //    },
        //}))
        routeResolverProvider.route.appVersion = appVersion;
        routeResolverProvider.route.stateProviderRefrence = $stateProvider;
    }]);

    app.run(function ($browser, $rootScope, $state, $stateParams, $location, $anchorScroll, dataService) {

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState.name != 'mySSO') {
                if (!toState.views && toState.name && ['home', 'login'].indexOf(toState.name) == -1 && !fromState.name) {
                    event.preventDefault();
                    $state.go("home");
                    return;
                }


                if (toState.url !== '/address' &&
                    toState.url !== '/home' &&
                    toState.url !== '/login' &&
                    toState.url !== '/changePasswordAndLogin' &&
                    toState.url !== '/registerMobileManual' &&
                    toState.url !== '/changePasswordLogin' &&
                    toState.url !== '/firstChangePassword') {
                    dataService.get("/api/user/checkvalidationtoaccesssida", {}).then(function (res) {
                        if (!res) {
                            event.preventDefault();
                            $state.go("registryAddress");
                            return;
                        }
                    });
                }

                $rootScope.panelDescFrom = "";
                if (toState.title) {
                    $(".card-title").text(toState.title);
                }
                if (!toState.authorize) {
                    var tokenServer = sessionStorage.getItem("token");
                    if (!tokenServer) {
                        event.preventDefault();
                        $rootScope.islogin = false;
                        $state.go("login");
                    }
                    else {

                        var usercontext = sessionStorage.getItem("user-context");
                        if (usercontext) {
                            $rootScope.userContext = JSON.parse(usercontext);
                            if (!$rootScope.islogin) {
                                $rootScope.islogin = true;
                            }
                            if (!$rootScope.menuItems || $rootScope.menuItems.length == 0) {
                                $rootScope.getMenu();
                            }
                        }
                        else {
                            event.preventDefault();
                            $rootScope.islogin = false;
                            $state.go("login");
                        }
                    }
                }
            }
            else {
                $rootScope.islogin = false;
            }
        });
    });

    var indexController = function ($sce, $scope, $rootScope, routeResolver, messageService, dataService, $state, roleService) {
        var finalDate = "1400/10/02";
        $rootScope.finalDate = finalDate;


        var countRowMenu = 0;
        $rootScope.getMenu = function () {
            dataService.get("/api/MenuPage/GetMenu", {}).then(function (res) {
                countRowMenu = 0;
                routeResolver.route.resolveMenu(res.item2);
                $rootScope.menuItems = res.item1;
            });
        }

        $scope.getInfoUserLogin = function () {
            var value = roleService.compute();
            return $sce.trustAsHtml(value);
        }

        $scope.setapiRightMenu = function (res) {
            if (!$scope.apiRightMenu && countRowMenu < 50) {
                setTimeout(function () {
                    countRowMenu++;
                    $scope.setapiRightMenu(res);
                }, 100);
            }
            else {
                $scope.apiRightMenu.setData(res);
            }

        }

        $scope.printMaster = function () {
            var form = $('.print-panel');
            if (form && form.length > 0) {
                var scopeFrom = angular.element(form).scope();
                scopeFrom.printPanel();
            }
        }

        $scope.redirectPage = function (item) {
            dataService.post("api/IrTextBook/GetUrlLogin").then(function (res) {
                let anchor = document.createElement('a');
                anchor.href = res.redirectUrl;
                anchor.target = "_blank";
                document.body.appendChild(anchor);
                if (res.hasError == false) {
                    messageService.success(res.message, "پیغام");
                }
                else {
                    messageService.error(res.message, "پیغام");
                    return;
                }
                anchor.click();
                document.body.removeChild(anchor);

            });
        }

        $scope.getDoc = function () {
            var param = location.hash.replace('#/', '').replace(new RegExp('/', 'g'), "_");
            var req = new XMLHttpRequest();
            req.open("GET", "/Sida/DocumentationFile/" + param + ".pdf", true);
            req.responseType = "blob";
            req.onload = function (event) {
                var blob = req.response;
                if (blob.size == 0) {
                    messageService.error("برای این فرم مستندات تهیه نشده است");
                    return;
                }
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = param + ".pdf";
                link.click();
            };
            req.send();
        }
        if (fristPage == "mySSO") {
            $rootScope.islogin = false;
            $state.go("mySSO", { obj: objUrl });
        }
        $scope.redirectPageToParvareshi = function (item) {
            dataService.get("api/LoginSSO/CreateToken").then(function (res) {
                let anchor = document.createElement('a');
                anchor.href = 'https://parvareshi.medu.ir/loginsida/' + res;
                anchor.target = "_blank";
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);

            });
        }
    };

    indexController.$inject = ['$sce', '$scope', '$rootScope', 'routeResolver', 'messageService', 'dataService', '$state', 'roleService'];
    app.controller("indexController", indexController);
    app.constant('webAccess', 'https://sida.medu.ir/');
    app.bootstrap = function () {
        angularAMD.bootstrap(app);
    };

    return app;
});

function getquery() {
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for (var i = 0, result = {}; i < qs.length; i++) {
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}
