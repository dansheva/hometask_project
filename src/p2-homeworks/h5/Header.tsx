import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.slide_block_container}>
            <div className={s.slide_block}>
                <div className={s.links}>
                    <div className={s.link_container}>
                        <NavLink activeClassName={s.active} className={s.link} to={'/pre-junior'}>Pre-Junior</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink activeClassName={s.active} className={s.link} to={'/junior'}>Junior</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink activeClassName={s.active} className={s.link} to={'/junior-plus'}>Junior+</NavLink>
                    </div>
                </div>
                <div className={s.arrow_container}>
                    <svg className={s.arrow} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px"
                         viewBox="0 0 443.52 443.52">
                        <g>
                            <g>
                                <path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734
                                    L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8
                                    C342.889,227.058,342.889,216.255,336.226,209.591z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
