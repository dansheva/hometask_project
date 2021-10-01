import React from 'react'
import s from './Affair.module.css'
import {AffairPriorityType, AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: () => void // need to fix any
}

const selectDotColor = (priority: AffairPriorityType) => {
    switch (priority) {
        case "high":
            return '#ed182a'
        case "middle":
            return '#ecda26'
        case "low":
            return '#78ed18'
        default:
            return '#78ed18'
    }
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }// need to fix

    const dotStyle = {
        height: '6px',
        width: '6px',
        borderRadius: '3px',
        backgroundColor: selectDotColor(props.affair.priority),
        display: 'inline-block',
        marginBottom: '6px',
        marginLeft: '2px'
    }

    return (
        <div className={s.affair}>
            <div>
                <span>{props.affair.name}</span>
                <div style={dotStyle}></div>
            </div>
            <button className={s.button} onClick={deleteCallback}>
                <svg viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>
            </button>
        </div>
    )
}

export default Affair
