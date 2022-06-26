# Categoric Decorators

Decorate things. Find them at runtime.

This is a simple library that lets you create your own decorators. You can use these decorators to tag classes or class members such that you can find them all at runtime.

```ts
// decorators/enemy.ts
import { createCategoricDecorator } from "categoric-decorators"

export const [ enemy, locateEnemies ] = createClassCategoric()
```

```ts
// enemies/SnakeEnemy.ts
@enemy()
class SnakeEnemy extends Enemy {
    // ...
}
```

```ts
// enemies/SpiderEnemy.ts
@enemy()
class SpiderEnemy extends Enemy {
    // ...
}
```

Now at runtime you could use `locateEnemies()` to get a collection containing `SnakeEnemy` and `SpiderEnemy` classes.


# Installation

```
npm i categoric-decorators
```

# Class Decorators

To create a class category, use `createClassCategoric()`:

```ts
export const [ foo, locateFoos ] = createClassCategoric()
```

This creates a `@foo()` decorator which can be used on any class.

Calling `locateFoos()` will return an object mapping from class name => metadata.

The metadata looks like this:

```ts
type CategoricClassMeta<T> = {
    data?: T
    target: Constructable
}
```

[Click here](#metadata) to find out more about metadata.

# Member Decorators

To create a member category, use `createMemberCategoric()`:

```ts
export const [ bar, locateBars ] = createMemberCategoric()
```

This creates a `@bar()` decorator which can be used on class fields and methods.

Calling `locateBars()` will return an object mapping from class name => metadata.

The metadata looks like this:

```ts
export type MemberMeta<T> = {
    target: Constructable
    name: string
    data?: T
}

export type CategoricMemberMeta<T> = {
    target: Constructable
    members: Record<string, MemberMeta<T>>
}
```

[Click here](#metadata) to find out more about metadata.


# Metadata

You may have noticed the `data?: T` fields on the metadata returned by this library.

This is actually metadata that you can supply to the decorators you create.

For example, if we define some enemy metadata:

```ts
export type EnemyMetadata {
    name: string,
    maxHealth: number
}
```

Then we can create our enemy decorator with type information:

```ts
const export [ enemy, locateEnemies ] = createClassCategoric<EnemyMetadata>()
```

Now we can provide this metadata to the `@enemy()` decorator:

```ts
@enemy({
    name: "snek",
    maxHealth: 25,
})
class SnakeEnemy extends Enemy {
    // ...
}
```

This information will appear as the `data: EnemyMetadata` field on the metadata returned by your locator functions:

```ts
const enemyClasses = locateEnemies()
const { data } = enemyClasses['SnakeEnemy']
const { name, maxHealth } = data // "snek", 25
```
