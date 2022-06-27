export type Constructable = { constructor: any };
export type Constructor = { new(...args: any[]): {} };
// export type Constructable<T = unknown> = { constructor: new (...args: any[]) => T }