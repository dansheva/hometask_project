import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser = {_id: v1(), name: name}
        const updatedUsers = [...users];
        updatedUsers.push(newUser);
        setUsers(updatedUsers); // need to fix
    }

    return (
        <div>
            <h2>Homework 3</h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
