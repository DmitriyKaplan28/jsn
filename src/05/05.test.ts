import {getStreets, getStreetsTitles, ManType} from "./05";
import {CityType} from "../02/02_02";
/*import { CityType} from "./02_02";
import {housesToDestroy, stuffGreaterThen} from "./04_02";*/

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrey Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test.skip('Greetings', () => {
    const messages = people.map(man => 'Hello ${man.name.split(" ")[0]}. Welcome')

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrey. Welcome');
    expect(messages[1]).toBe('Hello Alexander. Welcome');
    expect(messages[2]).toBe('Hello Dmitry. Welcome');
})



let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id:1, builtAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
            }
        },
            {
                id:2, builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id:3, builtAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 200,
            address: {
                street: {title: "Central Str"}
            }
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {title: "South Str"}
                }}],
        citizensNumber: 1000000
    }
})

test('list of streets of a government buildings', () => {
    let streets = getStreetsTitles(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Str");
    expect(streets[1]).toBe("South Str");
})
test('list of streets', () => {
    let streets2 = getStreets(city.houses);

    expect(streets2.length).toBe(3);
    expect(streets2[0]).toBe("White street");
    expect(streets2[1]).toBe("Happy street");
    expect(streets2[1]).toBe("Happy street");
})