import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value));
    }


    return (
        <div>
            <h1>Homework 6</h1>
            <div>
                <SuperEditableSpan
                    className={s.span}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={s.btns}>
                <SuperButton className={s.save_btn} onClick={save}>Save</SuperButton>
                <SuperButton onClick={restore}>Restore</SuperButton>
            </div>
        </div>
    )
}

export default HW6
