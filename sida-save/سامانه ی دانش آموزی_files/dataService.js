define(['angularAMD'], function (app) {
    app.service('dataService', ['blockUI', '$state', '$http', '$q', 'messageService', '$rootScope', function (blockUI, $state, $http, $q, messageService, $rootScope) {
        var timeinterval = null;
        var xhrProto = XMLHttpRequest.prototype,
            origOpen = xhrProto.open;

        xhrProto.open = function (method, url) {
            this._url = url;
            return origOpen.apply(this, arguments);
        };

        (function (send) {
            XMLHttpRequest.prototype.send = function (data) {
                if (this._url && this._url.indexOf("api") !== -1) {
                    let tokenServer = sessionStorage.getItem("token");
                    if (tokenServer) {
                        this.setRequestHeader("Authorization", "Bearer " + tokenServer);
                    }
                    this.withCredentials = false;
                    this.orgOnload = this.onload;
                    this.onload = function () {
                        if (this.status == 401) {
                            window.location.href = "/";
                            return;
                        }
                        if (this.orgOnload)
                            this.orgOnload.call(null, arguments);
                    }
                }
                send.call(this, data);
            };

        })(XMLHttpRequest.prototype.send);
        return {
            post: function (url, data) {
                blockUI.start();
                var then = this;
                var deferred = $q.defer();
                $http.post(url, data).success(function (response, status, headers) {
                    var result = then.processResponse(response, deferred);
                    
                    if (response.resultCode != 0 && url.indexOf('api/Login/') > -1 || $(".captcha-image").length>0) {
                        $rootScope.$broadcast('callRegenarateCaptchaMethod');
                    }
                    deferred.resolve(result);
                })
                return deferred.promise;
            },
            getValue: function (url, filterInfo) {
                blockUI.start();
                var deferred = $q.defer();
                var then = this;
                var response = angular.fromJson($.ajax({ type: "GET", url: url, data: filterInfo, async: false }).responseText);
                var result = then.processResponse(response, deferred);
                blockUI.stop();
                return result;
            },
            updateEntity: function (url, entity, isPopup) {
                blockUI.start();
                var deferred = $q.defer();
                var then = this;
                $http.post(url, entity).success(function (response) {
                    var result = then.processResponse(response, deferred);
                    deferred.resolve(result);
                    if (angular.isDefined(isPopup) && isPopup == false) {
                        $rootScope.panelShowDialog = false;
                    }
                    else {
                        $rootScope.panelShowDialog = true;
                    }
                });
                return deferred.promise;
            },
            deleteEntity: function (url, id) {
                blockUI.start();
                var deferred = $q.defer();
                var then = this;
                $http.delete(url , id).success(function (response) {
                    var result = then.processResponse(response, deferred);
                    deferred.resolve(result);
                });
                return deferred.promise;
            },
            addEntity: function (url, entity, isPopup) {
                blockUI.start();
                var deferred = $q.defer();
                var then = this;
                $http.post(url, entity).success(function (response) {
                    var result = then.processResponse(response, deferred);
                    deferred.resolve(result);
                    if (angular.isDefined(isPopup) && isPopup == false) {
                        $rootScope.panelShowDialog = false;
                    }
                    else {
                        $rootScope.panelShowDialog = true;
                    }
                });
                return deferred.promise;
            },
            getById: function (url, id) {
                
                blockUI.start();
                var deferred = $q.defer();
                var then = this;
                $http.get(url + id).success(function (response) {
                    var result = then.processResponse(response, deferred);
                    deferred.resolve(result);
                });
                return deferred.promise;
            },
            get: function (url, data, noblockUI) {
                if (!noblockUI) {
                    blockUI.start();
                }
                var then = this;
                var deferred = $q.defer();
                $http({ Method: 'GET', url: url, params: data }).success(function (response) {
                    var result = then.processResponse(response, deferred);
                    deferred.resolve(result);
                });
                return deferred.promise;
            },
            callBackDataParameters: function (setMethod, listApi) {
                var fn = function (res) {
                    return res;
                };
                var promises = [];
                for (var i = 0; i < listApi.length; i++) {
                    promises.push(this.get(listApi[i].url,listApi[i].parameters).then(fn))
                }
                return $q.all(promises).then(function (data) {
                    return setMethod(data);
                });
            },
           
            callBackData: function (setMethod, listApi) {
                var fn = function (res) {
                    return res;
                };
                var promises = [];
                for (var i = 0; i < listApi.length; i++) {
                    promises.push(this.get(listApi[i], {} ).then(fn))
                }
                return $q.all(promises).then(function (data) {
                    return setMethod(data);
                });
            },
            getCount: function (result) {
                if (result.resultCode === 0)
                    return result["data"].count;
                else
                    return 0;
            },
            processResponse: function (result, deferred, status) {
                if (result.resultCode === 0) {
                    if (angular.isUndefined(result.data) || result.data == null) {
                        blockUI.stop();
                        return null;
                    }
                   
                    else if (result["data"].data) {
                        blockUI.stop();
                        return result["data"].data;
                    }
                    else if (result["data"].records) {
                        blockUI.stop();
                        return result["data"].records;
                    }
                    else {
                        blockUI.stop();
                        return result["data"];
                    }


                }
                else if (result.resultCode === 1) {
                    var failures = $("<ul></ul>")
                    for (var i = 0; i < result.failures.length; i++) {
                        failures.append('<li>' + result.failures[i] + '</li>');
                    }
                    messageService.warningMessage(failures);
                    if (deferred && !status)
                        deferred.reject(result)
                    blockUI.stop();
                }
                else if (result.resultCode === 2) {
                    messageService.warning(result.message);
                    if (deferred && !status)
                        deferred.reject(result)
                    blockUI.stop();
                }
                else if (result.resultCode === 3) {
                    $state.go('default');
                    if (deferred && !status)
                        deferred.reject(result)
                    blockUI.stop();
                }
                else if (result.resultCode === 4) {
                    $state.go('error', { message: result.message, stackTrace: result.stackTrace });
                    if (deferred && !status)
                        deferred.reject(result)
                    blockUI.stop();
                }
            },

        }
    }])
});

