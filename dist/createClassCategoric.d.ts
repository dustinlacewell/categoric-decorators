import { Constructable } from "./types";
export declare type CategoricClassMeta<T> = {
    data?: T;
    target: Constructable;
};
export declare type CategoricClassMetas<T> = Record<string, CategoricClassMeta<T>>;
export declare const createClassCategoric: <T>() => readonly [(data?: T | undefined) => (target: any) => void, <T_1 = undefined>() => CategoricClassMetas<T_1>, () => CategoricClassMeta<undefined>[]];
//# sourceMappingURL=createClassCategoric.d.ts.map