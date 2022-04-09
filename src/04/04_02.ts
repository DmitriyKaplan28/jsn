import {CityType, GovernmentBuildingsType} from "../02/02_02";

export const housesToDestroy = (city:CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !==street)
}

export const stuffGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
  return buildings.filter(b => b.staffCount > number)
}