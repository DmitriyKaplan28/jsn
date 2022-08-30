export {}

const increaseAge = (u: UserType) => {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test.skip('reference type test', () => {

    let user = {
        name: 'Dmitriy',
        age: 28,
        address: {
            title: 'SPb'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(29)

    const superman = user;

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {

    let users = [
        {
            name: 'Dmitriy',
            age: 28
        },
        {
            name: 'Dmitriy',
            age: 28
        }
    ]

    const admins = users;

    admins.push({name: '1b', age: 10})


    expect(users[2]).toEqual({name: '1b', age: 10})
})

test.skip('value type  test', () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 101


    //expect(users[2]).toEqual({name: '1b', age: 10})
})

test('reference type test', () => {

    const address = {
        title: 'SPb'
    }

    let user = {
        name: 'Dmitriy',
        age: 28,
        address: address
    }

    const user2: UserType = {
        name: 'Oksana',
        age: 30,
        address: address
    }

    address.title = 'Kanary';

    expect(user.address.title).toBe('Kanary')
    expect(user.address).toBe(user2.address)
})

test('reference type array test', () => {

    const address = {
        title: 'SPb'
    }

    let user = {
        name: 'Dmitriy',
        age: 28,
        address: address
    }

    // let addr = user.address

    const user2: UserType = {
        name: 'Oksana',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: '3', age: 3, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dima'

    expect(users[0].name).toBe('Dima')
    expect(user.name).toBe('Dima')
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})