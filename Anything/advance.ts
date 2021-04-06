// Инвариантность       Нужен конкретно T.
// Ковариантность       Нужен <:T.
// Контрвариантность    Нужен >:T.
// Бивариантность       Устроит либо <:T, либо >:T.

let a1 = { x: 3 } // {x: number}
let b1: { x: 3 } // {x: 3}
let c1 = { x: 3 } as const // {readonly x: 3}

type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}

type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
type FriendKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'

type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1]
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
        o: O,
        k1: K1,
        k2: K2
    ): O[K1][K2]
    <
        O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1],
        K3 extends keyof O[K1][K2]
    >(
        o: O,
        k1: K1,
        k2: K2,
        k3: K3
    ): O[K1][K2][K3]
}

let get: Get = (object: any, ...keys: string[]) => {
    let result = object
    keys.forEach((k) => (result = result[k]))
    return result
}

const tuple = <T extends unknown[]>(...ts: T): T => ts

type IsString<T> = T extends string ? true : false
type AS = IsString<string> // true
type BS = IsString<number> // false
