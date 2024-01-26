define(['angularAMD'], function (app) {
    app.directive('fileUploadNew', ['messageService', function (messageService) {
        return {
            restrict: 'E',
            scope: {
                img: "@",
                selected: "&",
                title: "@",
                haspdf: "@"
            },
            template: '<input style="width: 100%;" name="files" type="file" />',
            link: function ($scope, $elem, $attrs) {
                if (!$scope.title) {
                    $scope.title = "انتخاب کنید...";
                }
                $scope.safeApply = function (fn) {
                    var phase = this.$root.$$phase;
                    if (phase === '$apply' || phase === '$digest')
                        this.$eval(fn);
                    else
                        this.$apply(fn);
                };

                $scope.image = {};

                $scope.onSelect = function (e) {
                    $scope.getFileInfo(e);
                }

                $scope.readMultipleFiles = function (file) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#' + $scope.img).attr({ src: e.target.result });
                        //var ss = e.target.result.replace('data:image/jpeg;base64,', '');
                        //var binaryString = atob(ss);
                        //var bytes = new Uint8Array(binaryString.length);
                        //for (var i = 0; i < binaryString.length; i++) {
                        //    bytes[i] = binaryString.charCodeAt(i);
                        //}
                        //bytes.buffer;

                        $scope.image.file = file;
                        //$scope.image.fileData = bytes.buffer; 
                        $scope.image.fileSpace = e.target.result;
                        $scope.image.fileName = file.name;
                        $scope.image.fileSize = file.size;
                        $scope.image.mimeType = file.rawFile.type;
                        $scope.image.extensionType = file.extension;
                        $scope.selected({ img: $scope.image });
                    }

                    reader.readAsDataURL(file.rawFile);
                }

                $scope.getFileInfo = function (e) {
                    $.each(e.files, function (index, value) {
                        var ok = null;
                        if ($scope.haspdf) {
                            ok = value.extension == ".jpg"
                                || value.extension == ".JPEG"
                                || value.extension == ".PNG"
                                || value.extension == ".png"
                                || value.extension == ".JPG"
                                || value.extension == ".jpeg"
                                || value.extension == ".pdf"
                                || value.extension == ".PDF";
                        }
                        else {
                            ok = value.extension == ".jpg"
                                || value.extension == ".JPEG"
                                || value.extension == ".PNG"
                                || value.extension == ".png"
                                || value.extension == ".JPG"
                                || value.extension == ".jpeg";
                        }

                        if (!ok) {
                            e.preventDefault();
                            if ($scope.haspdf) {
                                messageService.error("فقط تصویر با فرمت (png,jpeg,jpg,pdf)  قابل قبول است.");
                            }
                            else {
                                messageService.error("فقط تصویر با فرمت (png,jpeg,jpg)  قابل قبول است.");
                            }
                        }
                        else if ($attrs.size) {
                            var costumeSize = parseInt($attrs.size) * 1024;
                            if (value.size > costumeSize) {
                                e.preventDefault();
                                messageService.error("حداکثر سایز مجاز برای تصویر " + $attrs.size + "KB میباشد.");
                            }
                            else {
                                $scope.readMultipleFiles(value);
                            }
                        }
                        else if (value.size > 102400) {
                            e.preventDefault();
                            messageService.error("حداکثر سایز مجاز برای تصویر 100KB میباشد.");
                        }
                        else {
                            $scope.readMultipleFiles(value);
                        }
                    });
                }

                $($elem).kendoUpload({
                    localization: { remove: "حذف", select: $scope.title },
                    select: $scope.onSelect,
                });
            }
        };
    }]);
});
