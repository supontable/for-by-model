import React, { useState } from 'react'

const ModelsContext = React.createContext([
    {},
    () => {},
    [],
    (_models) => {
        console.log('setModels')
        if (Array.isArray(_models) && _models.length > 0) {
            _models.map(model => {
                return prepareModel(model)
            })
        }
        console.log('models', _models)
        return _models
    }
]);

const ModelsProvider = ({children}) => {

    const [state, setState] = useState({})
    const [models, setModels] = useState([])
    return (
        <ModelsContext.Provider value={[
            state,
            setState,
            models,
            setModels
        ]}>
            {children}
        </ModelsContext.Provider>
    );
};

function prepareModel (model) {
    if (!Array.isArray(model)) return false
    let form = []
    model.map(item => {
        let step = item.step - 1 || 0
        let line = item.line - 1 || 0
        if (typeof form[step] === 'undefined') {
            form[step] = [[item]]
        } else {
            if (typeof form[step][line] === 'undefined') {
                form[step][line] = [item]
            } else {
                form[step][line] = [...form[step][line], item]
            }
        }
        return item
    })
    return form
}

export { ModelsContext, ModelsProvider }