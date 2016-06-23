(function () {
    'use strict';

    app.factory('msgService',
        ['$rootScope', 'ngDialog', 'toastr',
            function ($rootScope, ngDialog, toastr) {

                var generateConfirmParams = function (title, content, okFn, cancelFn) {
                    var scope = $rootScope.$new();
                    scope.title = title;
                    scope.content = content;
                    scope.ok = okFn;
                    scope.cancel = cancelFn;

                    return scope;
                };

                return {
                    success: function (title, content) {
                        toastr.success(content, title);
                    },
                    warning: function (title, content) {
                        toastr.warning(content, title);
                    },
                    info: function (title, content) {
                        toastr.info(content, title);
                    },
                    error: function (title, content) {
                        toastr.error(content, title);
                    },

                    confirmOkCancel: function (title, content, okFn, cancelFn) {
                        var scope = generateConfirmParams(title, content, okFn, cancelFn);
                        return ngDialog.open({
                            template: '../tpl/confirm-ok-cancel.html',
                            scope: scope
                        });
                    },
                    confirmOk: function (title, content, okFn) {
                        var scope = generateConfirmParams(title, content, okFn);
                        ngDialog.open({
                            template: '../tpl/confirm-ok.html',
                            scope: scope
                        });
                    }
                };
        }]);
})();