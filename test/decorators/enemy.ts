import { createClassCategoric } from "../../src";


export type EnemyMetadata = {
    name: string
    maxHealth: number
}

export const [ enemy, locateEnemies ] = createClassCategoric<EnemyMetadata>();