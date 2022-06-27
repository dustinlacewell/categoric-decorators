import { Constructable } from "./types";
export declare type MemberMeta<T> = {
    target: Constructable;
    name: string;
    data?: T;
};
export declare type CategoricMemberMeta<T> = {
    target: Constructable;
    members: Record<string, MemberMeta<T>>;
};
export declare type CategoricMemberMetas<T> = Map<Constructable, CategoricMemberMeta<T>>;
export declare const createMemberCategoric: <T>() => readonly [(data?: T | undefined) => (target: Constructable, name: string) => void, <T_1 = undefined>() => CategoricMemberMetas<T_1>, () => CategoricMemberMeta<undefined>[]];
//# sourceMappingURL=createMemberCategoric.d.ts.map