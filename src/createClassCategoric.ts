import { Constructable, Constructor } from "./types"
import { v4 } from "uuid"
import { stringify } from "querystring"


export type CategoricClassMeta<T = undefined> = {
    target: Constructable
    data: T
}

export type CategoricClassMetas<T> = 
    Map<Constructable, CategoricClassMeta<T>>


export const createClassCategoric = <
    T = undefined, 
    D = T extends undefined
        ? () => (target: Constructable) => void
        : (data: T) => (target: Constructable) => void
>() => {
    const metadataKey = `categorics:${v4()}`

    const decorator = ((data?: T) =>
        (target: Constructable) => {
            // get metas for category
            const metas: CategoricClassMetas<T> = Reflect.getMetadata(metadataKey, Reflect) || new Map<Constructable, CategoricClassMetas<T>>()
            // get meta for target
            let meta = metas.get(target)

            if (meta === undefined) {
                meta = {
                    target, 
                    data: data as T
                }
            } else {
                // set metadata
                meta.target = target
                meta.data = data as T
            }

            // store meta for target
            metas.set(target, meta)
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect)
        }) as unknown as D
        
    const locator = (): CategoricClassMetas<T> => {
        return (Reflect.getMetadata(metadataKey, Reflect) || new Map<Constructable, CategoricClassMetas<T>>) as CategoricClassMetas<T>
    }

    return [ decorator, locator, () => Array.from(locator().values()) ] as const
}