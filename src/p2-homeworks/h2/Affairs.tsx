import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id) }
        />
    ))

    const setAll = () => props.setFilter("all")// need to fix
    const setHigh = () => props.setFilter("high")
    const setMiddle = () => props.setFilter("middle")
    const setLow = () => props.setFilter("low")

    return (
        <div className={s.affairs}>
            <div className={s.affairs_container}>
                {mappedAffairs}
            </div>
            <div className={s.buttons}>
                <button className={s.all_button} onClick={setAll}>All</button>
                <button className={s.low_button} onClick={setLow}>Low</button>
                <button className={s.middle_button} onClick={setMiddle}>Middle</button>
                <button className={s.high_button} onClick={setHigh}>High</button>
            </div>
        </div>
    )
}

export default Affairs
