import React, { useState } from 'react'

const FormContext = React.createContext([
    {},
    () => {},
    [],
    () => []
]);

const FormProvider = (props) => {
    console.log('fp: ', props)
    const {children} = props
    const [state, setState] = useState({})
    const [models, setModels] = useState([])
    return (
        <FormContext.Provider value={[
            state,
            setState,
            models,
            setModels
        ]}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider }