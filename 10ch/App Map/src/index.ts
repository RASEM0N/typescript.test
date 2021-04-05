import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

export interface Mappable {
    location: {
        lat: number
        lng: number
    }
    markerContent(): string
    color: string
}

const map = document.getElementById('map')
const user = new User()
const company = new Company()

const customMap: CustomMap = new CustomMap(map)

customMap.addMaker(user)
customMap.addMaker(company)
