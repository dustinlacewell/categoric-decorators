import { Constructable } from "./types"
import { v4 } from "uuid"


export type MemberMeta<T> = {
    target: Constructable
    name: string
    data?: T
}

export type CategoricMemberMeta<T> = {
    target: Constructable
    members: Record<string, MemberMeta<T>>
}

export type CategoricMemberMetas<T> = 
    Map<Constructable, CategoricMemberMeta<T>>

export const createMemberCategoric = <T>() => {
    const metadataKey = `categorics:${v4()}`

    const decorator = (data?: T) =>
        (target: Constructable, name: string) => {
            // get metas for category
            const metas: CategoricMemberMetas<T> = Reflect.getMetadata(metadataKey, Reflect) || new Map<Constructable, CategoricMemberMeta<T>>()
            // get meta for target
            let meta: Partial<CategoricMemberMeta<T>> = metas.get(target) || {}

            if (meta === undefined) {
                meta = {
                    target,
                    members: {
                        [name]: {
                            target,
                            name,
                            data: data as T
                        }
                    }
                }
            } else {
                // get members for target
                const members: Record<string, MemberMeta<T>> = meta.members || {}
                // create member metadata
                const member: Partial<MemberMeta<T>> = members[name] || {}
                member.target = target
                member.name = name
                member.data = data
                // store member metadata
                members[name] = member as MemberMeta<T>
                // store members for target
                meta.members = members
                meta.target = target
            }

            // store meta for target
            metas.set(target, meta as CategoricMemberMeta<T>)
            // store metas for category
            Reflect.defineMetadata(metadataKey, metas, Reflect)
        }
        
    const locator = <T = undefined>(): CategoricMemberMetas<T> => {
        return Reflect.getMetadata(metadataKey, Reflect) || {}
    }

    return [ decorator, locator, () => Object.values(locator()) ] as const
}