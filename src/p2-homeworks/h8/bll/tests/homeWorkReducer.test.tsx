import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'up'})

    expect(newState.length).toBe(6)
    expect(newState === initialState).toBe(false)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'down'})

    expect(newState.length).toBe(6)
    expect(newState === initialState).toBe(false)
    expect(newState[5].name).toBe('Александр')
    expect(newState[4].name).toBe('Виктор')
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})

    expect(newState.length).toBe(4)
    expect(newState === initialState).toBe(false)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
})