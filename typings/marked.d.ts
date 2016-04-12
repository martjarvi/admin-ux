
declare module marked {
    interface MarkedStatic {
        (text: string, opts?: any): string;
    }
}

declare var marked: marked.MarkedStatic;

declare module "marked" {

    export = marked;

}
