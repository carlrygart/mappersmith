export declare const validKeys: (entry: Record<string, unknown>) => string[];
declare type Primitive = string | number | boolean;
export declare const buildRecursive: (key: string, value: Primitive | Primitive[] | Record<string, Primitive>, suffix?: string) => string;
export declare const toQueryString: (entry: string | Record<string, Primitive>) => string;
/**
 * Gives time in miliseconds, but with sub-milisecond precision for Browser
 * and Nodejs
 */
export declare const performanceNow: () => number;
/**
 * borrowed from: {@link https://gist.github.com/monsur/706839}
 * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
 * headers according to the format described here:
 * {@link http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method}
 * This method parses that string into a user-friendly key/value pair object.
 */
export declare const parseResponseHeaders: (headerStr: string) => Record<string, unknown>;
export declare const lowerCaseObjectKeys: (obj: Record<string, unknown>) => Record<string, unknown>;
export declare const assign: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
export declare const isPlainObject: (value: unknown) => value is Record<string, unknown>;
export declare const btoa: (input: string) => string;
export {};
