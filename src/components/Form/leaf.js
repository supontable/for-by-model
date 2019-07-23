import React from 'react'
import useControl from '../../hooks/useControl'

const Leaf = ({name = 'defaultInput', label, initialValue = '', ...rest}) => {
    const [value, error, onChange, validate, reset] = useControl({initialValue, name, ...rest})
    return (
        <div className={'leaf'}>
            {!!label && <label htmlFor={name}>
                {label}
                <br/>
            </label>}
            <input type="text" value={value} name={name} onChange={onChange} onBlur={validate} onFocus={reset}/>
            {!!error && <div className={'leaf__error'}>{error}</div>}
        </div>
    )
}
export default Leaf