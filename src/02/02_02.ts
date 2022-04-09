export type StreetType = {
    title: string
}

export type AdressType2 = {
    number?: number
    street: StreetType
}

export type HouseType = {
    builtAt: number
    repaired: boolean
    address: AdressType2
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AdressType2
}

export type CityType = {
    title: string,
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}