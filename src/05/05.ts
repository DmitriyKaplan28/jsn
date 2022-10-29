import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrey", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]
let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

export const messages = people.map(man => 'Hello ${man.name.split(" ")[0]}. Welcome')

export const getStreetsTitles =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreets = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}