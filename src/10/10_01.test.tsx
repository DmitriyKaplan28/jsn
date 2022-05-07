import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



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

test ('Other House', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        books:['css', 'html', 'js', 'react'],
    }

    const userCopy= moveUserToOtherHouse(user, 34)


    expect(userCopy).not.toBe(user)
    expect(userCopy.books).toBe(user.books)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).not.toBe(user.address)
    expect(userCopy.address.house).toBe(34)
})

test ('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        books:['css', 'html', 'js', 'react'],
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])


    expect(userCopy).not.toBe(user)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
    expect(user.books.length).toBe(4)

})

test ('change one book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        books:['css', 'html', 'js', 'react'],
    }

    const userCopy = updateBook (user,'js', 'ts',)


    expect(userCopy).not.toBe(user)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test ('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        books:['css', 'html', 'js', 'react'],
    }

    const userCopy = removeBook (user,'js')


    expect(userCopy).not.toBe(user)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
})

test ('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Inc'}]
    }

    const userCopy = addCompany (user, {id:3, title: 'google'})


    expect(userCopy).not.toBe(user)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('google')
})

test ('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dmitriy',
        hair: 28,
        address: {city:'SPb', house: 32},
        laptop: { title: 'ZenBook'},
        companies: [{id: 1, title: 'Eпam'}, {id: 2, title: 'Inc'}]
    }

    const userCopy = updateCompany (user, 1, 'Epam')


    expect(userCopy).not.toBe(user)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.companies[0].title).toBe('Epam')
})

test ('update company 2', () => {

let companies ={
        'Dmitriy': [{id: 1, title: 'Egam'}, {id: 2, title: 'Inc'}],
        'name2': [{id: 2, title: 'Inc'}],
}


    const copy = updateCompany2 (companies, 'Dmitriy', 1,'Epam')


    expect(copy['Dmitriy']).not.toBe(companies['Dmitriy'])
    expect(copy['name2']).toBe(companies['name2'])
    expect(copy['Dmitriy'][0].title).toBe('Epam')
})