import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css";

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {

    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    const finalPeople = people.map((p) => (
        <div key={p._id} className={s.affair}>
            <div>
                <span>{`${p.name}, ${p.age}`}</span>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
    const checkEighteen = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK", payload: 18}))

    return (
        <div>
            <h1>Homework 8</h1>
            <div className={s.container}>
                <div className={s.affairs}>
                    <div className={s.affairs_container}>
                        {finalPeople}
                    </div>
                    <div className={s.buttons}>
                        <SuperButton onClick={sortUp}>Sort up</SuperButton>
                        <SuperButton onClick={sortDown}>Sort down</SuperButton>
                        <SuperButton onClick={checkEighteen}>Check 18</SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW8
