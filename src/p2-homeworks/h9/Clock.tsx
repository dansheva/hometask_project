import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date? `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`: '' // fix with date
    const stringDate = date? `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`: '' // fix with date

    return (
        <div>
            <div style={{height: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                <div style={{cursor: 'pointer'}}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start} style={{marginRight: '5px'}}>Start</SuperButton>
            <SuperButton onClick={stop}>Stop</SuperButton>

        </div>
    )
}

export default Clock
