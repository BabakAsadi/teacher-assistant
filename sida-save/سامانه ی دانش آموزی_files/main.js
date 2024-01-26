var version = sessionStorage.getItem("verApp");
version = version == null ? 2 : version;
require.config({
    baseUrl: 'App',
    urlArgs: "v=" + version,
    waitSeconds: 300,
    paths: {
        'app': '/Sida/App/app',
        'angularAMD': '/Sida/Scripts/Core/angularAMD.min',
    },
    deps: ['app']
});

require(['app',
    '/Sida/App/directives/captchaImage.js',
    '/Sida/App/directives/buttonValidetion.js',
    '/Sida/App/services/messageService.js',
    '/Sida/App/services/dataService.js',
    '/Sida/App/directives/textNumeric.js',
    '/Sida/App/directives/textPersian.js',
    '/Sida/App/directives/focusControl.js',
    '/Sida/App/directives/panelRightMenuMain.js',
    '/Sida/App/directives/panelNavbar.js',
    '/Sida/App/directives/gridView.js',
    '/Sida/App/directives/textbox.js',
    '/Sida/App/directives/textboxPopover.js',
    '/Sida/App/directives/combobox.js',
    '/Sida/App/directives/actionGrid.js',
    '/Sida/App/directives/confirmDelete.js',
    '/Sida/App/services/routeResolver.js',
    '/Sida/App/services/roleService.js',
    '/Sida/App/directives/inputThousandSeparator.js',
    '/Sida/App/directives/fileUploadNew.js'
], function (app) {

    app.bootstrap();

        // document.addEventListener('contextmenu', event => event.preventDefault());
        //$(document).keydown(function (event) {
        //    if (event.keyCode == 123) { // Prevent F12
        //        return false;
        //    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        //        return false;
        //    }
        //});

    //window.addEventListener("unload", function (e) {
    //    $.get('/api/Login/LogOut');
    //});
   
    //$(document).on('copy paste cut', '.no-copy-pase', function (e) {
    //    e.preventDefault(); 
    //    return false;
    //});
    $(document).on('copy paste cut', '.table', function (e) {
        e.preventDefault();
        return false;
    });
    $(document).on("keypress", ".form-enter", function (e) {
        if (e.keyCode == 13) {
            $(this).find(".action-button-enter").click();
        }
    })
});