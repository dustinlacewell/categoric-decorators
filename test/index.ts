
import "./enemies"

import { locateEnemies } from "./decorators"


const main = () => {
    console.log(`Locating enemies...`)
    const enemies = locateEnemies()
    console.log(enemies)

    for (const { target, data } of Object.values(enemies)) {
        console.log(`
            ${target.name}: 
            name: ${data.name}
            maxHealth: ${data.maxHealth}
        `)
    }
}

main()