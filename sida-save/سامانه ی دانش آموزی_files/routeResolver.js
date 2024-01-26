define(["angularAMD"], function (angularAMD) {
    var services = angular.module("routeResolverServices", []);
    var pagetitle = '';
    services.provider("routeResolver", function () {
        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
        }();

        this.route = function (routeConfig) {
            var baseUrl = "Sida/App/views/";
            var stateProviderRefrence = undefined;
            var appVersion =  undefined;
            var routes = {};
            var register = function (action) {
                if (action && !routes[action]) {
                    routes[action]=true;
                    return true;
                }
                return false;
            };
            var resolveMenu = function (items) {
                var appVersion = this.appVersion;
                var stateProviderRefrence = this.stateProviderRefrence;
                items.forEach(function (item) {
                   
                    if (item.body && register(item.name)) {
                        item.body.templateUrl = baseUrl + item.body.templateUrl + "?v=" + appVersion;
                        item.body.controllerUrl = baseUrl + item.body.controllerUrl;
                        if (!item.body.params) {
                            item.body.params = {
                                obj: null
                            }
                        }
                       
                        stateProviderRefrence.state(item.name, angularAMD.route(item.body));
                    }
                });
                if (register("karnamehMotevasetehTwo")) {
                    stateProviderRefrence.state("karnamehMotevasetehTwo", angularAMD.route({
                        title: ' کارنامه تحصیلی - متوسطه دوم ',
                        url: '/karnamehMotevasetehTwo',
                        controller: "karnamehMotevasetehTwoController",
                        templateUrl: baseUrl + "karnameh/karnamehMotevasetehTwo/karnamehMotevasetehTwo.html?v=" + appVersion,
                        controllerUrl: baseUrl + 'karnameh/karnamehMotevasetehTwo/karnamehMotevasetehTwoController.js',
                        params: {
                            obj: null,
                        },
                    }));
                }

            };

            return {
                resolveMenu: resolveMenu,
                register: register,
                routes: routes
            };

        }(this.routeConfig);

    });

})
