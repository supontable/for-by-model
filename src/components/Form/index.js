import React, { useRef, useMemo, useContext, useEffect } from 'react'
import feedModel from '../../models/feed'
import stepModel from '../../models/step'
import Tree from './tree'
import Tabs from '../Tabs'
import {FormContext} from "../../FormContext"
import {prepareModels} from "../../helpers"



const FormContainer = () => {
    const modelsContext = useContext(FormContext);
    const [,setState,models, setModels] = modelsContext

    const form = useRef(null)
    const forms = models
    useEffect(() => {
        const [models, list] = prepareModels([feedModel,stepModel])
        setModels(models)
        setState(list)
}, [])
    const handleSubmit = (event) => {
        event.preventDefault()
        let result = {}
        const data = new FormData(form.current)
        data.forEach((value, key) => {
            result[key] = value
        })
        console.log(JSON.stringify(result))
    }

    return useMemo(()=> {
            return <React.Fragment>
                {forms.length > 0 && <Tabs className={'tabs'}>
                    {forms.map((data, key) => {
                        return (
                            <form ref={form} key={key} onSubmit={handleSubmit} label={key.toString()}>
                                <Tree type={'root'}>
                                    {data}
                                </Tree>
                                <input type={'submit'} className={'submit'} value={'submit'}/>
                            </form>
                        )
                    })}
                </Tabs>}
            </React.Fragment>
        }
    , [forms])
}

export default FormContainer
