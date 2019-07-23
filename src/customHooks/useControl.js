import { useState } from 'react'

const useControl = ({initialValue, name, ...rest}) => {
    const [state, setState] = useState({value: initialValue, error: null})
    console.log('useControl:', name, 'params', rest, 'value', state.value, 'error', state.error)

    function validate() {
        if (!rest.required) return false
        if (rest.validationRule && !state.value.match(rest.validationRule)) {
            setState({...state, error: rest.validationMessageError})
        }
        if (rest.emptyMessage) {
            (state.value === "" || state.value === null) && setState({...state, error: rest.emptyMessage})
        }
    }

    function reset() {
        setState({...state, error: null})
    }

    function onChange(event) {
        const {value} = event.target
        setState({...state, value: value})
    }

    return [state.value, state.error, onChange, validate, reset]
}

export default useControl