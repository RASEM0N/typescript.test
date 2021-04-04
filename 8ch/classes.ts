class Vehicle {
    // private, public ...
    // в конструторе - это укороченная запись
    // this.x = x с модификатором доступа ...
    constructor(private x: number, private y: number) {}

    public drive(): void {}

    public honk(): void {}

    protected bonk(message: string): void {
        console.log('superclass action')
    }
}

const vehicle = new Vehicle(10, 15)
vehicle.drive()
vehicle.honk()

class CarA extends Vehicle {
    static staticMethod(): void {}
    static readonly COUNT: number = 1488
    static count: number = 228

    constructor(public x1: number, public y1: number, public z: number) {
        // x и y приватные
        // в конструкторе дочернего класса, нельзя написать (public x: number ...
        // т.к. this.x и this.y уже есть, но они нам не доступны
        // или если только (x, y, public ...)
        super(x1, y1)
    }

    private nothingAction(message: string, number: number): void {
        // super.bonk()
        // CarA.staticMethod()
        this.bonk(message)
    }

    public action(): void {
        this.nothingAction('message', 69)
    }
}

const carA = new CarA(10, 15, 0)
carA.honk()
carA.drive()
carA.action()

// статическая дребядень
CarA.staticMethod()
// CarA.COUNT - нельзя изменять, только считывать CONSTANTA
const carStaticCountConst = CarA.COUNT
CarA.count = CarA.COUNT + 1
