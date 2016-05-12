export class BootstrapCards {
    lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla, quam sit amet commodo efficitur, felis justo sodales arcu, at vulputate nunc mi quis risus. Vestibulum sit amet maximus nunc, in sagittis nunc. Nunc sit amet quam non dui imperdiet malesuada. Pellentesque ante orci, dapibus placerat nibh id, tempor fermentum neque. Nullam urna mauris, bibendum eget elementum id, interdum sit amet dui. Duis ullamcorper ligula id tincidunt facilisis. Quisque eu fringilla felis. Praesent lacinia tincidunt posuere. Nunc venenatis ligula dui, eu congue quam vehicula gravida. Mauris imperdiet purus et neque cursus, non semper massa hendrerit. Quisque volutpat neque nisi, mattis semper purus dapibus non. Fusce fermentum metus et libero vulputate, sit amet faucibus neque congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie enim. Proin aliquet vitae dui id lobortis. Morbi magna orci, lacinia at nulla ut, dignissim gravida ante.";
    lipsum2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla, quam sit amet commodo efficitur, felis justo sodales arcu, at vulputate nunc mi quis risus. Vestibulum sit amet maximus nunc, in sagittis nunc. Nunc sit amet quam non dui imperdiet malesuada.";
    lipsum3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla, quam sit amet commodo efficitur, felis justo sodales arcu, at vulputate nunc mi quis risus.";

    __payCard;
    _ccLogos;
    ccnum1 = "4444 3333 2222 1111";
    cctypes = {
        visa: /^4/,
        union: /^62/,
        amex: /^(34|37)/,
        jcb: /^(35[2-8])/,
        disc: /^(6011|64[4-9]|65)/,
        diners: /^(309|30[0-5]|36|38|39)/,
        master: /^(2(22[0-1]|[3-6]|7[0-1]|72[0-1]))|(5[1-5])/
    };

    checkNumber(evt) {
        if (evt.ctrlKey || evt.altKey || evt.metaKey || evt.charCode === 0) return true;
        return /[0-9]/.test(String.fromCharCode(evt.charCode));
    }

    ccnumChange() {
        let c = this.ccnum1.replace(/\s/g, '').replace(/\d{4,4}/g, function(t) {
            return t + ' ';
        });
        this.ccnum1 = c.replace(/\s$/, '');
        this.__payCard.className = 'ux-pay-card';
        this._ccLogos.className = 'cc-logos';
        if (this.cctypes.visa.test(this.ccnum1)) {
            this.__payCard.classList.add('visa');
            this._ccLogos.classList.add('visa');
        }
        else if (this.cctypes.amex.test(this.ccnum1)) {
            this.__payCard.classList.add('amex');
            this._ccLogos.classList.add('amex');
        }
        else if (this.cctypes.jcb.test(this.ccnum1)) {
            this.__payCard.classList.add('jcb');
            this._ccLogos.classList.add('jcb');
        }
        else if (this.cctypes.disc.test(this.ccnum1)) {
            this.__payCard.classList.add('disc');
            this._ccLogos.classList.add('discover');
        }
        else if (this.cctypes.diners.test(this.ccnum1)) {
            this.__payCard.classList.add('diners');
            this._ccLogos.classList.add('diners');
        }
        else if (this.cctypes.union.test(this.ccnum1)) {
            this.__payCard.classList.add('union');
            this._ccLogos.classList.add('unionpay');
        }
        else if (this.cctypes.master.test(this.ccnum1)) {
            this.__payCard.classList.add('master');
            this._ccLogos.classList.add('mastercard');
        }
    }
}
