import React from 'react'
import s from "./Message.module.css"

type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: propsType) {
    return (
        <div className={s.message_fullwidth}>
            <div className={s.avatar_container}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <svg className={s.message_tail_container} viewBox="0 0 11 20" width="11" height="20">
                <svg className={s.message_tail} viewBox="0 0 11 20"><g transform="translate(9 -14)" fill="inherit" fill-rule="evenodd"><path d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z" transform="matrix(1 0 0 -1 0 49)" id="corner-fill" fill="inherit"></path></g></svg>
            </svg>
            <div className={s.message_container}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message_time}>
                    <div className={s.message}>
                        {props.message}
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
