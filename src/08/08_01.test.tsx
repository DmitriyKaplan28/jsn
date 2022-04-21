import {users, usersObj} from "./08_01";

beforeEach( () = > {

})


test(" should select corresponding user from obj", () => {
    expect(usersObj[0]).toBe('a');
    expect(usersObj[0]).toBe('b');
    expect(usersObj[0]).toBe('c');
    expect(usersObj[0]).toBe('d');
})