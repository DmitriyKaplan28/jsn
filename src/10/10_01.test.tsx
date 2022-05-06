import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10_01";



test ('reference type test', () => {
    let user: UserType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
    }

    const awesomeUser= makeHairStyle(user, 2)

    expect(user.hair).toBe(28)
    expect(awesomeUser.hair).toBe(14)
    expect(awesomeUser.address).toBe(user.address)
})
test ('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'}
    }

    const movedUser= moveUser(user, 'Moscow')


    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.address.city).toBe('Moscow')
    expect(movedUser.laptop).toBe(user.laptop)
})
test ('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'}
    }

    const userWithMacbook= upgradeUserLaptop(user, 'Macbook')


    expect(userWithMacbook).not.toBe(user)
    expect(userWithMacbook.laptop).not.toBe(user.laptop)
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(userWithMacbook.address).toBe(user.address)
})