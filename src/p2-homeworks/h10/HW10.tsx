import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {LittleLoader} from "./Loader/LittleLoader";

function HW10() {

    const loading  = useSelector<AppStoreType>((state) => state.loading)

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <h1>Homework 10</h1>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', width: '200px'}}>
                {loading
                    ? (
                        <LittleLoader backgroundColor={'#2C78ED'}/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>Set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HW10
