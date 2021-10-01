import React, {useState} from 'react'
import s from './HW2.module.css'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'// need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]



// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') {
        return affairs
    } else return affairs.filter(a => filter === a.priority);
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number):void => setAffairs(deleteAffair(affairs, _id)) // need to fix any


    return (
        <div>
            <h2>Homework 2</h2>
            <div className={s.affairs_container}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
