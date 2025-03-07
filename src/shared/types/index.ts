/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

export type s = string;
export type n = number;
export type b = boolean;

export type f1<T1, R> = (p1: T1) => R;
export type f1o1<T1, R> = (p1?: T1) => R;

export type f2<T1, T2, R> = (p1: T1, p2: T2) => R;
export type f2o1<T1, T2, R> = (p1: T1, p2?: T2) => R;
export type f2o2<T1, T2, R> = (p1?: T1, p2?: T2) => R;

export type f3<T1, T2, T3, R> = (p1: T1, p2: T2, p: T3) => R;
export type f3o1<T1, T2, T3, R> = (p1: T1, p2: T2, p?: T3) => R;
export type f3o2<T1, T2, T3, R> = (p1: T1, p2?: T2, p?: T3) => R;
export type f3o3<T1, T2, T3, R> = (p1?: T1, p2?: T2, p?: T3) => R;

export interface IObj<T> {
 [k: s]: T;
}

export interface IObjNest<T> {
 [k: s]: IObj<T>;
}

export interface ITag<T> {
 tagName: s;
 attrs: IObj<T>;
}

export type tagsNum = ITag<s> & { id: n };

export interface Links {
 self: IObj<s> | IObj<s[]>;
 collection: IObj<s>[];
 about: IObj<s>[];
 "wp:post_type": IObj<s>[];
 curies: IObj<s>[];
}

export interface CatIt {
 id: s;
 count: s;
 description: s;
 link: s;
 name: s;
 slug: s;
 taxonomy: s;
 parent: n;
 meta: any[];
 acf: any[];
 _links: Links;
}

export type Entities = CatIt[];
