let infinity: number = Infinity
let bigInt: bigint = 1234n
let asText: 'text' = 'text'
const jsSymbol: unique symbol = Symbol('a')
let a: {
    b: number
    c?: string
    [key: number]: boolean
} = { b: 1, 228: true }
let user: Readonly<{
    firstName: string
}> = {
    firstName: 'Bob',
}

// error
// user.firstName = 12

// У типов есть {} = Object, который включает все кроме:
// null и undefined,
// и object, который просто включает:
// {}, [], function(){}, new String() и т.д. кроме "простых" типов

type A = readonly string[] // readonly string[]
type B = ReadonlyArray<string> // readonly string[]
type C = Readonly<string[]> // readonly string[]

// void - ничего явно, ф-ия не имеет оператора return (yield другое)
// never - происходит RIP от ошибки или как-то по-другому
// null - просто нема значения
// undefined - просто не присвоенно значение

// --- ENUM ---
enum Language {
    Russian, // = 1
    English, // = 2
    Spanish, // = 3
    Ukraine = 228, // = 228
    Belarusian, // = 229
}

let NumberLanguage: Language = Language['Russian']
let SecondLanguage: Language = Language.English

// --- ---

function F(): number {
    return Array.from(arguments).reduce((total, n) => total + n, 0)
}

function F1(a: number, b: number): number {
    return a + b
}

// Метод apply привязывает значение к this
// внутри функции (в этом примере мы привязываем к this null)
// и вторым аргументом объединяет параметры функции.
add.apply(null, [10, 20]) // вычисляется как 30
// Метод call делает то же самое, но применяет все аргументы
// по порядку вместо объединения
add.call(null, 10, 20) // вычисляется как 30
// Это просто хуета
add.bind(null, 10, 20)() // вычисляется как 30

// -- ДЕГЕНЕРАТОРЫ ---
function* F3(): IterableIterator<number> {
    let a: number = 0
    let b: number = 1
    while (true) {
        yield a
        a = b
        b = a + b
    }
}

let fibonacciGenerator: IterableIterator<number> = F3()

// --- ---
type Log = { (message: string, userId?: number): string }
// type Log = (message: string, userId?: number) => string

let log: Log = (message, userId) => `Message: ${message}`

// type Filter = <T>(array: Array<T>, f: (item: T) => boolean) => Array<T>
// const filter: Filter = (array, callback) => array.filter(callback)

type Filter<T> = (array: Array<T>, f: (item: T) => boolean) => Array<T>
type NumberFilter = Filter<number>
const filter: NumberFilter = (array, callback) => array.filter(callback)
filter([1, 2, 3, 4, 5], (item) => item > 0)

const map = <T, U>(array: Array<T>, f: (item: T) => U): Array<U> => {
    const resultArray = []
    array.forEach((item: T) => {
        resultArray.push(f(item))
    })
    return resultArray
}

map<number, string>([1, 2, 3, 4, 5], (item) => `[${item}]`)
