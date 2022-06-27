import { enemy } from "../decorators";


@enemy({
    name: "snek",
    maxHealth: 25
})
export class SnakeEnemy {
    // ...
}