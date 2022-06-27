export declare type EnemyMetadata = {
    name: string;
    maxHealth: number;
};
export declare const enemy: (data: EnemyMetadata) => (target: import("../../src").Constructable) => void, locateEnemies: () => import("../../src").CategoricClassMetas<EnemyMetadata>;
//# sourceMappingURL=enemy.d.ts.map