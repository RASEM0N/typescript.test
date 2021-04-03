const add = (a: number, b: number): number => {
    return a + b
}
const subtract = (a: number, b: number): number => a - b

function divide(a: number, b: number): number {
    return a / b
}
const multiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => console.log(message)
const error = (error: string): never => {
    throw new Error(error)
}
{
    type Weather = {
        date: Date
        weather: string
    }

    const forecast = {
        date: new Date(),
        weather: 'sunny',
    }

    const logWeather = (forecast: Weather): void => {
        console.log(forecast.date, forecast.weather)
    }
    logWeather(forecast)

    const logWeatherYet = ({ date, weather }: Weather): void => {
        console.log(date, weather)
    }
    logWeatherYet(forecast)
}
