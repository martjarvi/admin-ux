import "jquery";
import "lodash";
import "marked";
import "moment";
import "numeral";
import "bootstrap";
import "sweetalert";
import "bootstrap-notify";
import "libs/phonelib";
import "libs/countries";
import "libs/currencies";
import "ladda/dist/ladda.jquery.min";
import "sweetalert/dist/sweetalert.css!";

import * as ld from "lodash";
import * as md from "marked";
import * as mm from "moment";
import * as nm from "numeral";

export function configure(aurelia) {
    window._ = ld;
    window.marked = md;
    window.moment = mm;
    window.numeral = nm;

    aurelia.use
        .globalResources('src/utils')
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
        .then(a=> {
        return a.setRoot('src/app.js');
			 })
        .then(() => {
        var splash = window.document.querySelector('.ux-splash');
        splash.classList.add('animate');
        setTimeout(() => {
            splash.parentElement.removeChild(splash);
        }, 1000);
    })
        .catch(
        e=> {
            window.console.log(e);
        });
}
