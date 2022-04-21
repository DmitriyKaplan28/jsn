import React from 'react'

export const usersArray = ['a', 'b', 'c', 'd']

type UserType = {
[key:string] : {id: number, name: string}
}

export const usersObj = {
    '0': 'a',
    '1':'b',
    '2': 'c',
    '3': 'd'
}
export const users:UserType = {
    '101': { id:101, name:'a',},
    '1212': { id:1212, name:'b',},
    '3232312': { id:3232312, name:'c',},
    '1': { id:1, name:'d',},
}