export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        address: {...u.address, city: title},
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house: house},
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title},
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books.concat(newBooks)],
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b),
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToDelete: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToDelete)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, company: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, company]
    }
}

export function updateCompany(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: title} : c)
    }
}

export function updateCompany2(companies: { [key: string]: Array<{ id: number, title: string }> },
                               userName: string,
                               companyId: number,
                               newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy;
}
