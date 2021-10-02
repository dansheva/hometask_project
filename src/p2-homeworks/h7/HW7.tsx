import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

export type arrType = typeof arr

const arr = ['x', 'y', 'z'];

export function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <h1>Homework 7</h1>

            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

        </div>
    )
}

export default HW7
