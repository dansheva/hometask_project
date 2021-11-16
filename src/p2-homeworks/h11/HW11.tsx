import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChange1 = (value: number) => {
        setValue1(value)
    }
    const onChange2 = ([value1, value2]: number[]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <h1>homeworks 11</h1>

            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChange1}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    values={[value1, value2]}
                    onChangeRange={onChange2}
                />
                <span>{value2}</span>
            </div>

        </div>
    )
}

export default HW11
