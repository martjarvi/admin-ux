define(["require", "exports"], function (require, exports) {
    "use strict";
    var MarkdownValueConverter = (function () {
        function MarkdownValueConverter() {
        }
        MarkdownValueConverter.prototype.toView = function (value) {
            return marked(value || '');
        };
        return MarkdownValueConverter;
    }());
    exports.MarkdownValueConverter = MarkdownValueConverter;
    var FromNowValueConverter = (function () {
        function FromNowValueConverter() {
        }
        FromNowValueConverter.prototype.toView = function (dt) {
            var x;
            return dt === null || !(x = moment(dt)).isValid() ? '' : x.fromNow(false);
        };
        return FromNowValueConverter;
    }());
    exports.FromNowValueConverter = FromNowValueConverter;
});
