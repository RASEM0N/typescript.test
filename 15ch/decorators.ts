@classDecorator
class Boat {
    color: string = 'red'

    get FormattedColor(): string {
        return `This boats color is ${this.color}`
    }

    @testDecorator
    // @logError('Я енотик полоскнул, поласкаю свой песюн')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish')
        } else {
            console.log('nothing')
        }
    }
}

function parameterDecorator(target: any, key: string, idx: number) {
    console.log(key, idx)
}

function classDecorator(constructor: Function) {
    console.log(constructor)
}

{
    // function testDecorator(target: any, key: string): void {
    //     console.log(target)
    //     console.log(key)
    // }
    //
    // testDecorator(Boat, 'pilot')
}

{
    // desc = Object.getOwnPropertyDescriptor(...)
    // пример: Object.getOwnPropertyDescriptor(Boat, 'pilot')
    // Структруа дескриптора, его можно менять
    // через Object.defineProperty(...)
    // пример: Object.defineProperty(Boat, 'make', { writable: true})
    // Get и Set только у гетера и сетера
    // interface PropertyDescriptor {
    //   configurable?: boolean;
    //   enumerable?: boolean;
    //   value?: any;
    //   writable?: boolean;
    //   get?(): any;
    //   set?(v: any): void;
    // }
    // function logError(
    //     target: any,
    //     key: string,
    //     desc: PropertyDescriptor
    // ): void {
    //     console.log('Target: ' + target)
    //     console.log('Key: ' + key)
    //     console.log(desc)
    // }
}

{
    // стрелочная не может быть
    // т.к. зависит от контекста, хотя тута не видно, но да
    function logError(errorMessage: string = 'Oops, boat was sunk'): Function {
        return (target: any, key: string, desc: PropertyDescriptor): void => {
            const method = desc.value

            console.log(desc.value)

            desc.value = function () {
                try {
                    method()
                } catch (e) {
                    console.log(errorMessage)
                }
            }
        }
    }
}

{
    function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
        console.log(desc)
        console.log('Декаратор')
        desc.value()
    }
}
