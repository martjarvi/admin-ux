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
        loadDefauts();
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

function loadDefauts() {
    $.notifyDefaults({
        offset: { x: 10, y: 10 },
        title: 'Admin UX',
        url_target: '_self',
        mouse_over: 'pause',
        timer: 100,
        showProgressbar: true,
        animate: {
            enter: 'animated slideInRight',
            exit: 'animated slideOutRight'
        },
        template: '<div data-notify="container" class="toast alert alert-dismissible alert-{0}" role="alert">' +
      		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button>' +
        '<div class="toast-row">' +
        '<div class="col-icon"><span data-notify="icon"></span></div>' +
        '<div class="col-body">' +
      		'<h6 class="text-strong" data-notify="title"><span data-notify="title">{1}</span></h6>' +
      		'<span data-notify="message">{2}</span>' +
        '</div>' +
        '</div>' +
        '<div class="progress-bar" data-notify="progressbar">' +
        '<progress class="progress progress-striped progress-{0}" role="progressbar" value="0" max="100"></progress>' +
        '</div>' +
      		'<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
