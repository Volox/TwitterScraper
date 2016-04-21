// Generated by typings
// Source: https://raw.githubusercontent.com/Volox/typed-cheerio/master/index.d.ts
declare module '~twitter-scraper~cheerio/index' {

namespace cheerio {

  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // JQuery http://api.jquery.com
  export interface Cheerio {
    // Array like
    [index: number]: Element;
    length: number;

    // Attributes
    attr(name: string): string;
    attr(name: string, value: any): Cheerio;
    // Properties
    prop(name: string): string;
    prop(name: string, value: any): Cheerio;

    // Data
    data(): any;
    data(name: string): any;
    data(name: string, value: any): any;

    val(): string;
    val(value: string): Cheerio;

    removeAttr(name: string): Cheerio;

    has(selector: string): Cheerio;
    has(element: Element): Cheerio;

    hasClass(className: string): boolean;
    addClass(classNames: string): Cheerio;

    removeClass(): Cheerio;
    removeClass(className: string): Cheerio;
    removeClass(func: (index: number, className: string) => string): Cheerio;

    toggleClass(className: string): Cheerio;
    toggleClass(className: string, toggleSwitch: boolean): Cheerio;
    toggleClass(toggleSwitch?: boolean): Cheerio;
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Cheerio;

    is(selector: string): boolean;
    is(element: Element): boolean;
    is(element: Element[]): boolean;
    is(selection: Cheerio): boolean;
    is(func: (index: number, element: Element) => boolean): boolean;

    // Form
    serializeArray(): {name: string, value: string}[];

    // Traversing
    find(selector: string): Cheerio;
    find(element: Cheerio): Cheerio;
    find(element: Element): Cheerio;

    parent(selector?: string): Cheerio;
    parents(selector?: string): Cheerio;
    parentsUntil(selector?: string, filter?: string): Cheerio;
    parentsUntil(element: Element, filter?: string): Cheerio;
    parentsUntil(element: Cheerio, filter?: string): Cheerio;

    closest(): Cheerio;
    closest(selector: string): Cheerio;

    next(selector?: string): Cheerio;
    nextAll(selector?: string): Cheerio;

    nextUntil(selector?: string, filter?: string): Cheerio;
    nextUntil(element: Element, filter?: string): Cheerio;
    nextUntil(element: Cheerio, filter?: string): Cheerio;

    prev(selector?: string): Cheerio;
    prevAll(): Cheerio;
    prevAll(selector: string): Cheerio;

    prevUntil(selector?: string, filter?: string): Cheerio;
    prevUntil(element: Element, filter?: string): Cheerio;
    prevUntil(element: Cheerio, filter?: string): Cheerio;

    slice(start: number, end?: number): Cheerio;

    siblings(selector?: string): Cheerio;

    children(selector?: string): Cheerio;

    contents(): Cheerio;

    each(func: (index: number, element: Element) => any): Cheerio;
    map(func: (index: number, element: Element) => any): Cheerio;

    filter(selector: string): Cheerio;
    filter(selection: Cheerio): Cheerio;
    filter(element: Element): Cheerio;
    filter(elements: Element[]): Cheerio;
    filter(func: (index: number, element: Element) => boolean): Cheerio;

    not(selector: string): Cheerio;
    not(selection: Cheerio): Cheerio;
    not(element: Element): Cheerio;
    not(func: (index: number, element: Element) => boolean): Cheerio;

    has(selector: string): Cheerio;
    has(element: Element): Cheerio;

    first(): Cheerio;
    last(): Cheerio;

    eq(index: number): Cheerio;

    get(): string[];
    get(): Element[];
    get(index: number): Element;

    index(): number;
    index(selector: string): number;
    index(selection: Cheerio): number;

    end(): Cheerio;

    add(selectorOrHtml: string): Cheerio;
    add(selector: string, context: Document): Cheerio;
    add(element: Element): Cheerio;
    add(elements: Element[]): Cheerio;
    add(selection: Cheerio): Cheerio;

    addBack():Cheerio;
    addBack(filter: string):Cheerio;


    // Manipulation
    append(content: string, ...contents: any[]): Cheerio;
    append(content: Document, ...contents: any[]): Cheerio;
    append(content: Document[], ...contents: any[]): Cheerio;
    append(content: Cheerio, ...contents: any[]): Cheerio;

    appendTo( target: string ): Cheerio;

    prepend(content: string, ...contents: any[]): Cheerio;
    prepend(content: Document, ...contents: any[]): Cheerio;
    prepend(content: Document[], ...contents: any[]): Cheerio;
    prepend(content: Cheerio, ...contents: any[]): Cheerio;

    prependTo( target: string ): Cheerio;

    after(content: string, ...contents: any[]): Cheerio;
    after(content: Document, ...contents: any[]): Cheerio;
    after(content: Document[], ...contents: any[]): Cheerio;
    after(content: Cheerio, ...contents: any[]): Cheerio;

    insertAfter(content: string): Cheerio;
    insertAfter(content: Document): Cheerio;
    insertAfter(content: Cheerio): Cheerio;

    before(content: string, ...contents: any[]): Cheerio;
    before(content: Document, ...contents: any[]): Cheerio;
    before(content: Document[], ...contents: any[]): Cheerio;
    before(content: Cheerio, ...contents: any[]): Cheerio;

    insertBefore(content: string): Cheerio;
    insertBefore(content: Document): Cheerio;
    insertBefore(content: Cheerio): Cheerio;

    remove(selector?: string): Cheerio;

    replaceWith(content: string): Cheerio;
    replaceWith(content: Element): Cheerio;
    replaceWith(content: Element[]): Cheerio;
    replaceWith(content: Cheerio): Cheerio;
    replaceWith(content: () => Cheerio): Cheerio;

    empty(): Cheerio;

    html(): string;
    html(html: string): Cheerio;

    text(): string;
    text(text: string): Cheerio;

    wrap(content: string): Cheerio;
    wrap(content: Document): Cheerio;
    wrap(content: Cheerio): Cheerio;

    css(propertyName: string): string;
    css(propertyNames: string[]): string[];
    css(propertyName: string, value: string): Cheerio;
    css(propertyName: string, value: number): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => string): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => number): Cheerio;
    css(properties: Object): Cheerio;

    // Rendering

    // Miscellaneous

    clone(): Cheerio;

    // Not Documented

    toArray(): Element[];
  }

  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
  // DomHandler https://github.com/fb55/DomHandler
  export interface Options {
    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
  }

  export interface Selector {
    (selector: string): Cheerio;
    (selector: string, context: string): Cheerio;
    (selector: string, context: Element): Cheerio;
    (selector: string, context: Element[]): Cheerio;
    (selector: string, context: Cheerio): Cheerio;
    (selector: string, context: string, root: string): Cheerio;
    (selector: string, context: Element, root: string): Cheerio;
    (selector: string, context: Element[], root: string): Cheerio;
    (selector: string, context: Cheerio, root: string): Cheerio;
    (selector: any): Cheerio;
  }

  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // JQuery http://api.jquery.com
  export interface Static extends Selector {
    xml(): string;
    root(): Cheerio;
    contains(container: Element, contained: Element): boolean;
    parseHTML(data: string, context?: Document, keepScripts?: boolean): Document[];

    html(options?: Options): string;
    html(selector: string, options?: Options): string;
    html(element: Cheerio, options?: Options): string;
    html(element: Element, options?: Options): string;
  }

  // Document References
  // Node Console
  export interface Element {
    tagName: string;
    type: string;
    name: string;
    attribs: Object;
    children: Element[];
    childNodes: Element[];
    lastChild: Element;
    next: Element;
    nextSibling: Element;
    prev: Element;
    previousSibling: Element;
    parent: Element;
    parentNode: Element;
    nodeValue: string;
  }

  export interface API extends Selector {
    (html: string, options?: Options): Static;
  }

  export function load(html: string, options?: Options): Static;
}

function cheerio(selector: string, context: string ): cheerio.Cheerio;
function cheerio(selector: string, context: string, root: string): cheerio.Cheerio;

export = cheerio
}
declare module '~twitter-scraper~cheerio' {
import main = require('~twitter-scraper~cheerio/index');
export = main;
}

// Generated by typings
// Source: lib/types.d.ts
declare module '~twitter-scraper/lib/types' {
import cheerio = require('~twitter-scraper~cheerio');
export interface MaxPosition {
    session: string;
    fixed: string;
    last: string;
}
export interface PageResponse {
    html: string;
    cheerio?: cheerio.Static;
    last?: string;
}
export interface Tweet {
    id: string;
    text: string;
    timestamp: number;
}
}
declare module 'twitter-scraper/lib/types' {
export * from '~twitter-scraper/lib/types';
}

// Generated by typings
// Source: lib/index.d.ts
declare module 'twitter-scraper' {
import { Readable } from 'stream';
import cheerio = require('~twitter-scraper~cheerio');
import { Tweet, PageResponse, MaxPosition } from '~twitter-scraper/lib/types';
export function scrape(query: string, callback?: Function): Promise<Tweet[]>;
export class Scraper extends Readable {
    protected query: string;
    protected total: number;
    protected session: string;
    protected fixed: string;
    protected lastTweet: Tweet;
    constructor(query: string);
    _read(): void;
    toString(): string;
    protected getMaxPosition(last: string): string;
    protected parseMaxPosition(maxPosition: string): MaxPosition;
    protected getTwitterUrl(query: string, maxPosition?: string): string;
    protected getPage(url: string): Promise<PageResponse>;
    protected getSession(query: string): Promise<MaxPosition>;
    protected parsePage($: cheerio.Static): Tweet[];
    protected getTweetIds($: cheerio.Static): Tweet[];
    protected sendTweet(tweet: Tweet): void;
    protected sendTweets(tweets: Tweet[]): void;
    protected loop(last?: string): Promise<string>;
    start(last?: string, fixed?: string): Promise<number>;
}
}
