import "jquery";
import "lodash";
import "bootstrap";
import "libs/ladda/js/ladda.jquery";

import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";
import * as md from "libs/marked/marked.min";

export function configure(aurelia) {
  window._ = ld.default;
  window.moment = mm.default;
  window.numeral = nm.default;
  window.marked = md.default;

  aurelia.use
		 .globalResources('src/utils')
		 .standardConfiguration()
		 .developmentLogging();

  aurelia.start()
		 .then(a=> {
			   return a.setRoot('src/app.js');
			 })
		 .then(()=> {
		   var splash = window.document.querySelector('.ux-splash');
		   splash.classList.add('animate');
		   setTimeout(()=> {
			 splash.parentElement.removeChild(splash);
		   }, 1000);
		 })
		 .catch(
			 e=> {
			   window.console.log(e);
			 });
}
