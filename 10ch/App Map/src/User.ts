import * as faker from 'faker'
import { Mappable } from './index'

export class User implements Mappable {
    name: string
    location: {
        lat: number
        lng: number
    }
    color: string = 'red'

    constructor() {
        this.name = faker.name.findName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    public markerContent(): string {
        return `<div>
                    <h1>User Name: <h3>${this.name}</h3></h1>
                </div>
                `
    }
}
