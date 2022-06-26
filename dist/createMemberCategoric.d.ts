import { Constructable } from "./types";
export declare type MemberMeta<T> = {
    target: Constructable;
    name: string;
    data?: T;
};
export declare type CategoricMemberMeta<T> = {
    members: Record<string, MemberMeta<T>>;
};
export declare type CategoricMemberMetas<T> = Record<string, CategoricMemberMeta<T>>;
export declare const createMemberCategoric: <T>() => readonly [(data?: T | undefined) => (target: any, name: string) => void, <T_1 = undefined>() => CategoricMemberMetas<T_1>, () => CategoricMemberMeta<undefined>[]];
//# sourceMappingURL=createMemberCategoric.d.ts.map