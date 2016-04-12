define(["require", "exports"], function (require, exports) {
    "use strict";
    var BootstrapUI = (function () {
        function BootstrapUI() {
            this.progress = 0;
        }
        BootstrapUI.prototype.attached = function () {
            var _this = this;
            $('.ladda-button')
                .ladda('bind', { timeout: 2000 });
            $('.ladda-prog-button')
                .ladda('bind', {
                timeout: 5000, callback: function (ld) {
                    var x = 0;
                    var i = setInterval(function () { return ld.setProgress((x += 10) / 100); }, 500);
                    setTimeout(function () { return clearInterval(i); }, 5000);
                }
            });
            setInterval(function () {
                if (_this.progress == 100)
                    _this.progress = 0;
                else
                    _this.progress += 10;
            }, 1000);
        };
        return BootstrapUI;
    }());
    exports.BootstrapUI = BootstrapUI;
});
