declare var $;
declare var _;
declare var moment;
declare var numeral;
declare var swal: Swal;
interface Window {
    _;
    marked;
    moment;
    numeral;
}
interface Swal {
    (...rest);
    showInputError(...rest);
}
