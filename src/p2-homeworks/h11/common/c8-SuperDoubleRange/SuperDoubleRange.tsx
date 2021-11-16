import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "./SuperDoubleRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    values: [number, number]
    width?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values, ...restProps
    }
) => {

    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < values[1]) {
            onChangeRange && onChangeRange([+e.currentTarget.value, values[1]])
        }
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > values[0]) {
            onChangeRange && onChangeRange([values[0], +e.currentTarget.value])
        }
    }

    const finalRangeClassName1 = `${s.range1} ${restProps.className ? restProps.className : ''}`
    const finalRangeClassName2 = `${s.range2} ${restProps.className ? restProps.className : ''}`

    const width = restProps.width ? restProps.width : 300

    return (
        <>
            <div className={s.container} style={{width: `${width.toString()}px`}}>
                <div className={s.slider_track}></div>
                <input
                    style={{width: `${(width - 14).toString()}px`}}
                    type={'range'}
                    value={values[0]}
                    onChange={onChangeCallback1}
                    className={finalRangeClassName1}

                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
                <input
                    style={{width: `${(width - 14).toString()}px`}}
                    type={'range'}
                    value={values[1]}
                    onChange={onChangeCallback2}
                    className={finalRangeClassName2}

                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
