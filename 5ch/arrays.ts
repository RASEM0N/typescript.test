const carMakers: Array<string> = ['ford', 'toyota', 'chevy']
const dates: Array<Date> = [new Date(), new Date()]

const carsByMakers: Array<Array<string | number>> = [
    ['f150', 1],
    ['corrolla', 213],
    ['camarro'],
]

const arrayN: (string | number)[] = [1, 2, 3, 4]

// Help with interference with extracting values
const oneCar = carMakers[0] // string
const myCar = carMakers.pop() // string

// Prevent incompatible values
carMakers.push('volvo')

carMakers.map((car: string, idx: number): string => {
    return `[${idx}]${car}`
})

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10']
importantDates.push('2030-10-10')
importantDates.push(new Date())
