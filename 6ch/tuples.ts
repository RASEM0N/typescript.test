type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
pepsi[1] = false
const [color, carbonated, sugar]: Drink = pepsi

const numbersA: Array<[string, number, Array<boolean>]> = [
    ['a', 1448, [true, true, false]],
    ['b', 228, [false, false, false]],
    ['c', 69, [true, true, true]],
]
