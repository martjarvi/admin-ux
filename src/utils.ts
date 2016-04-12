export class MarkdownValueConverter {
    toView(value: string) {
        return marked(value || '');
    }
}
export class FromNowValueConverter {
    toView(dt: string) {
        var x;
        return dt === null || !(x = moment(dt)).isValid() ? '' : x.fromNow(false);
    }
}
