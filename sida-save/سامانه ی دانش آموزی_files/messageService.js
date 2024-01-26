define(['angularAMD'], function (app) {
    app.service('messageService', ['$rootScope', function ($rootScope) {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-left',
            showDuration: '300',
            hideDuration: '1000',
            timeOut: '5000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
        };
        return {
            success: function (msg, title) {
                toastr.success(msg, title);
            },
            info: function (msg, title) {
                toastr.info(msg, title);
            },
            infoMessage: function (messages) {
                toastr.info(messages, "نمایش خطا");
            },
            warning: function (msg, title) {
                toastr.warning(msg, title);
            }
            ,
            error: function (msg, title) {
                toastr.error(msg, title);
            },
            warningMessage: function (messages) {
                toastr.error(messages, "نمایش خطا");
            }
        }
    }]);
});