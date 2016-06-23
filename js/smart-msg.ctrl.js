(function () {
    'use strict';

    app.controller('AppCtrl', ['toastr', 'ngDialog', '$rootScope', 'msgService',
        function(toastr, ngDialog, $rootScope, msgService) {
        var appCtrl = this;

        var generateConfirmParams = function (title, content, okFn, cancelFn) {
            var scope = $rootScope.$new();
            scope.title = title;
            scope.content = content;
            angular.extend(scope, confirmConfig);
            scope.ok = okFn;
            scope.cancel = cancelFn;

            return scope;
        };

        appCtrl.success = function () {
            msgService.success('success', 'bbb');
        };

        appCtrl.warning = function () {
            msgService.warning('warning', 'bbb');
        };

        appCtrl.info = function () {
            msgService.info('info', 'bbb');
        };

        appCtrl.error = function () {
            msgService.error('error', 'bbb');
        };

        appCtrl.confirmOkCancel = function () {
            console.log('confirm');
            var title = 'ok&cancel';
            var content = 'bbb';
            var okFn = function () {
                console.log('ok button click');
            };
            var cancelFn = function () {
                console.log('cancel button click');
            };
            msgService.confirmOkCancel(title, content, okFn, cancelFn);
        };

        appCtrl.confirmOk= function () {
            console.log('confirm');
            var title = 'ok&cancel';
            var content = 'bbb';
            var okFn = function () {
                console.log('ok button click');
            };
            msgService.confirmOk(title, content, okFn);
        };
    }]);
})();
