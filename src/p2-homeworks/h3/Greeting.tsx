import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = `${s.input} ${error === true ? s.error : s.input_no_error}`// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button className={s.button} onClick={addUser}>Add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
