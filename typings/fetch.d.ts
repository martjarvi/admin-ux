declare module 'fetch' {
	export interface Headers {
		constructor(headers:any);

		append(name:string, value:string);
		delete(name:string);
		get(name:string):string;
		getAll(name:string):any;
		has(name):boolean;
		set(name:string, value:string);
		forEach(callback:Function, thisArg:any);
	}

	export class Body {
		blob():Blob | Promise<Blob>;

		json():any | Promise<any>;

		text():string | Promise<string>;
	}

	export class Request {
		url:string;
		credentials:any;
		headers:Headers
		method:string;
		mode:any;
		referrer:any;
	}

	export class Response {
		type:string;
		status:number;
		ok:boolean;
		statusText:string;
		headers:Headers;
		url:string;

		json():any | Promise<any>;

		text():string | Promise<string>;
	}

	export function fetch(input?, init?):Promise<any>;
}
