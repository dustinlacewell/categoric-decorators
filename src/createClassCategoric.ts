import { Constructable } from "./types"
import { v4 } from "uuid"


export type CategoricClassMeta<T> = {
    data?: T
    target: Constructable
}

export type CategoricClassMetas<T> = Record<string, CategoricClassMeta<T>>

export const createClassCategoric = <T>() => {
    const metadataKey = `categorics:${v4()}`

    const decorator = (data?: T) =>
        (target: any) => {
            // get metas for category
            const metas: CategoricClassMetas<T> = Reflect.getMetadata(metadataKey, Reflect) || {}
            // get meta for target
            const meta: Partial<CategoricClassMeta<T>> = metas[target.name] || {}
            // set metadata
            meta.target = target
            meta.data = data
            // store meta for target
            metas[target] = meta as CategoricClassMeta<T>
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect)
        }
        
    const locator = <T = undefined>(): CategoricClassMetas<T> => {
        return Reflect.getMetadata(metadataKey, Reflect) || {}
    }

    return [ decorator, locator, () => Object.values(locator()) ] as const
}