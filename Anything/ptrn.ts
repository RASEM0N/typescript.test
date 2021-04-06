class FinalClass {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
        return new FinalClass(messages)
    }
}

// ошибка т.к. нельзя класс не может расширяться
// class NotFinalClass extends FinalClass{}
// только если так
FinalClass.create(['Я енотик'])

// ---------- ФАБРИКА ----------

interface Shoe {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}
class Boot implements Shoe {
    purpose = 'woodcutting'
}
class Sneaker implements Shoe {
    purpose = 'walking'
}

const createShoe = (type: 'balletFlat' | 'boot' | 'sneaker'): Shoe => {
    switch (type) {
        case 'balletFlat':
            return new BalletFlat()
        case 'boot':
            return new Boot()
        case 'sneaker':
            return new Sneaker()
    }
}
createShoe('balletFlat')
// ---------- СТОИТЕЛЬ ----------
class RequestBuilder {
    private url: string | null = null
    private data: object | null = null
    private method: 'get' | 'post' | null = null

    setURL(url: string): this {
        this.url = url
        return this
    }
    setData(data: object): this {
        this.data = data
        return this
    }
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    send(): void {
        console.log(`URL: ${this.url}`)
        console.log(`DATA: ${this.data}`)
        console.log(`METHOD: ${this.method}`)
    }
}

new RequestBuilder()
    .setURL('дойки.ру')
    .setMethod('post')
    .setData(['a', 'ох'])
    .send()

// ---------- ОБЪЕКТ-КОМПАНЬОН ----------

interface Currency {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

const Currency = {
    DEFAULT: 'USD',
    from: (value: number, unit = Currency.DEFAULT): Currency => ({
        value,
        unit,
    }),
}

let amountDue: Currency = {
    unit: 'JPY',
    value: 83733.1,
}
let otherAmountDue = Currency.from(1_253.21, 'EUR')
