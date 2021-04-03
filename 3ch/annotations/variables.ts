// --- Primitive types ---
const alV: any = 12
const apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true
let character: symbol = Symbol('b')

let nothingMuch: null = null
let nothing: undefined = undefined
let nothingVal: number = null
let nothingVal1: number = undefined

// build in objects
let now: Date = new Date()

// --- Array types ---
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: Array<number> = [1, 2, 3]
let colorsGeneric: Array<string> | number[] = ['red', 'green', 'blue']
let numberGeneric: Array<string> | number[] = [1, 2, 3, 4, 5, 6]

// --- Classes types ---
class Car {}
let car: Car = new Car()

// --- Object literal types ---
type Posit = { x: number; y: number }
let point: Posit = {
    x: 10,
    y: 20,
}

{
    type Cat = { name: string; purrs: boolean }
    type Dog = { name: string; barks: boolean; wags: boolean }
    type CatOrDogOrBoth = Cat | Dog
    type CatAndDog = Cat & Dog

    // a Cat
    let a: CatOrDogOrBoth = {
        name: 'Bonkers',
        purrs: true,
    }

    // a Dog:
    a = {
        name: 'Bonkers',
        wags: true,
        barks: true,
    }

    let b: CatAndDog = {
        name: 'Domino',
        barks: true,
        wags: true,
        purrs: true,
    }
}

// --- Function types ---
const logNumber: (i: number, m: string, k: number) => void = (i, m) => {
    i = i + 12
    m = m + 'string'
    console.log(i, m)
}

// When to use annotations
// 1) Function that returns the 'any' type
{
    const json = '{"x": 10, "y": 20}'
    // не точного type т.к. ф-ия JSON.parse(...) возвращает any
    const cord: Posit = JSON.parse(json)
    cord.y = 123
    console.log(cord)
}

// 2) When we declare a variable on the line
// and initialize it later
{
    let words: string[] = ['red', 'green', 'blue']
    let foundWord: boolean
    for (let i: number = 0; i < words.length; i++) {
        if (words[i] === 'green') foundWord = true
    }
}

// 3) Variable whose type cannot be infered correctly

let numbers: Array<number> = [-12, -1, 12]
let numberAboutZero: boolean | number = false
for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboutZero = numbers[i]
    }
}
