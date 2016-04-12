define(["require", "exports", "lodash", "marked", "moment", "numeral", "jquery", "lodash", "marked", "moment", "numeral", "bootstrap", "sweetalert", "bootstrap-notify", "libs/phonelib", "libs/countries", "libs/currencies", "ladda/dist/ladda.jquery.min", "sweetalert/dist/sweetalert.css!"], function (require, exports, ld, md, mm, nm) {
    "use strict";
    function configure(aurelia) {
        window._ = ld;
        window.marked = md;
        window.moment = mm;
        window.numeral = nm;
        aurelia.use
            .globalResources('src/utils')
            .standardConfiguration()
            .developmentLogging();
        aurelia.start()
            .then(function (a) {
            return a.setRoot('src/app.js');
        })
            .then(function () {
            var splash = window.document.querySelector('.ux-splash');
            splash.classList.add('animate');
            setTimeout(function () {
                splash.parentElement.removeChild(splash);
            }, 1000);
        })
            .catch(function (e) {
            window.console.log(e);
        });
    }
    exports.configure = configure;
});
