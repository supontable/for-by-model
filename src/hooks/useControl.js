import { useContext, useState } from 'react'
import { FormContext } from "../FormContext"

const useControl = ({initialValue, name, ...rest}) => {

    const [context, setContext] = useContext(FormContext);
    const value = context[name]
    const [error, setError] = useState(null)

    function validate() {
        if (!rest.required) return false
        if (rest.validationRule && !value.match(rest.validationRule)) {
            setError(rest.validationMessageError)
        }
        if (rest.emptyMessage) {
            (value === "" || value === null) && setError(rest.emptyMessage)
        }
    }

    function reset() {
        setError(null)
    }

    function onChange(event) {
        const {value, name} = event.target
        setContext({...context, value: value})
        setContext(context => ({...context, [name]: value}))
    }

    return [value, error, onChange, validate, reset]
}

export default useControl