
export type UserType = {
    [key:string] : {id: number, name: string}
}

let users:UserType

beforeEach (() => {users = {
        '101': { id:101, name:'a',},
        '1212': { id:1212, name:'b',},
        '3232312': { id:3232312, name:'c',},
        '1': { id:1, name:'d',},
    }
}
)


test(" should select corresponding user from obj", () => {
   users['1'].name = 'qwe'

    expect(users['1'].name).toBe('qwe');

})

test(" should delete corresponding user from obj", () => {
  delete users['1']

    expect(users['1']).toBeUndefined()

})