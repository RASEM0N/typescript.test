// Абстрактный класс — это класс,
// у которого не реализован один или
// больше методов (некоторые языки требуют
// такие методы помечать специальными
// ключевыми словами).

// Интерфейс — это абстрактный класс,
// у которого ни один метод не реализован,
// все они публичные и нет переменных класса.

// Абстрактный класс — это «заготовка» класса
// Интерфейс же — это своего рода контракт

interface User {
    name: string
}
interface User {
    age: number
}

// Происходит слияние User => { name: string, age: number}
let user__: User = {
    name: 'Bob',
    age: 30,
}

// ---- ----

type State<M> = {
    [key: string]: M
}

interface Database<M> {
    state: State<M>
    get(key: string): M | null
    set(key: string, value: M): void
}

class StringDatabase implements Database<number> {
    public state: State<number>
    get = (key: string): number | null =>
        key in this.state ? this.state[key] : null

    set = (key: string, value: number): void => {
        this.state[key] = value
    }

    // justData to Database
    static from = (state: State<number>): StringDatabase => {
        let db = new StringDatabase()
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                db.set(key, state[key])
            }
        }
        return db
    }
}

// ---- ----
// @serializable
// class APIPayload {
//     getValue(): Payload {
//         // ...
//     }
// }

// Одно и тоже

// let APIPayload = serializable(
//     class APIPayload {
//         getValue(): Payload {
//             // ...
//         }
//     }
// )

// ---- ----
