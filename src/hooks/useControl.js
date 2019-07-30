import { useContext, useState } from 'react'
import { FormContext } from "../FormContext"

const useControl = ({initialValue, name, ...rest}) => {

    const [context, setContext] = useContext(FormContext);
    const value = context[rest.tab][`${rest.id}`]
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
        const {value} = event.target
        console.log('change', rest.id)
        setContext(context => ({
            ...context,
            [rest.tab]: {
                ...context[rest.tab],
                [`${rest.id}`]: value
            }
        }))
    }

    return [value, error, onChange, validate, reset]
}

export default useControl