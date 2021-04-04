interface Vehicle {
    name: string
    year: Date
    broken: boolean
}

interface Reportable {
    summary?(message?: string): string
}

interface VehicleAndReportable extends Vehicle, Reportable {}
// type VehicleAndReportable = Vehicle & Reportable

const oldCivil = {
    name: 'civil',
    year: new Date(),
    broken: true,
    summary(message?: string): string {
        return `Name: ${this.name} ${message}`
    },
    justNumber: 69,
}
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(message?: string): string {
        return `My drink has ${this.sugar} grams of sugar`
    },
}

const printVehicle = (vehicle: VehicleAndReportable): void => {
    vehicle.summary()
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}
printVehicle(oldCivil)

const printSummary = (item: Reportable): void => {
    item.summary()
}
printSummary(oldCivil)
printSummary(drink)
