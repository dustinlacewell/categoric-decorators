import { Constructable } from "./types";
export declare type CategoricClassMeta<T = undefined> = {
    target: Constructable;
    data: T;
};
export declare type CategoricClassMetas<T> = Map<Constructable, CategoricClassMeta<T>>;
export declare const createClassCategoric: <T = undefined, D = T extends undefined ? () => (target: Constructable) => void : (data: T) => (target: Constructable) => void>() => readonly [D, () => CategoricClassMetas<T>, () => CategoricClassMeta<T>[]];
//# sourceMappingURL=createClassCategoric.d.ts.map