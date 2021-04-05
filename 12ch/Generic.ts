// --- Class Generic ---
class ArrayOfNumber {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}
class ArrayOfString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index]
    }
}

// Через Generic
// generic - это можно сказать аргумент, но вместо значения
// мы принимает тип данных
class ArrayOfAnything<T> {
    constructor(public collection: Array<T>) {}

    get(index: number): T {
        return this.collection[index]
    }
}
{
    new ArrayOfAnything<string>(['a', 'b', 'c', 'd'])
    const elements: ArrayOfAnything<Element> = new ArrayOfAnything<Element>([
        document.querySelector('body'),
        document.querySelector('div'),
    ])
}

// --- Function Generic ---
function printAnything<T>(array: Array<T>): void {
    array.forEach((item) => {
        console.log(item)
    })
}
{
    printAnything<[string, number]>([
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ])
}

// -- расщиряем Т до реализация интерфейсса HouseOrCar --
interface HouseOrCar {
    print(): void
}
class YCar {
    print() {
        console.log('Im a car')
    }
}
class YHouse {
    print() {
        console.log('Im a house')
    }
}

// без extends HouseOrCar будет ошибка
// т.к. точно не ясно, есть ли метод print()
// у элемента массива
// У всех T типов должно реализован интерфейс HouseOrCar
function printHouseOrCars<T extends HouseOrCar>(array: Array<T>): void {
    array.forEach((item) => {
        item.print()
    })
}
{
    // не подойдет т.к. тута не реализован интерфейс HouseOrCar
    // ну он и сможет :)
    // printHouseOrCars([1,2,3,4,5])

    // можно и без HouseOrCar
    printHouseOrCars<HouseOrCar>([new YCar(), new YHouse()])
}
