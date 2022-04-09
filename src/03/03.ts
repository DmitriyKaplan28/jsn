import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a:number, b:number) => {
    return a + b
}

export const addSkill = (student:StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student:StudentType) {
    student.isActive = true;
}

export const studentCIty = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building:GovernmentBuildingsType, budget: number) => {
  building.budget+=budget;
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired= true;
}
export const toFireStaff = (buildings: GovernmentBuildingsType, stuffCount: number) => {
    buildings.staffCount-= stuffCount
}
export const toHireStaff = (buildings: GovernmentBuildingsType, stuffCount: number) => {
    buildings.staffCount+= stuffCount
}