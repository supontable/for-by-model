import React, { useRef, useState } from 'react'
import feedModel from '../../models/feed'
import stepModel from '../../models/step'
import Tree from './tree'
import Tabs from '../Tabs'

const FormContainer = () => {
    const [modelFeed] = useState(prepareModel(feedModel))
    const [modelStep] = useState(prepareModel(stepModel))
    const form = useRef(null)
    const forms = [modelFeed, modelStep]

    const handleSubmit = (event) => {
        event.preventDefault()
        let result = {}
        const data = new FormData(form.current)
        data.forEach((value, key) => {
            result[key] = value
        })
        console.log(JSON.stringify(result))
    }

    return (
        <Tabs className={'tabs'}>
            {forms.length > 0 && forms.map((data, key) => {
                return (
                    <form ref={form} key={key} onSubmit={handleSubmit} label={key.toString()}>
                        <Tree type={'root'}>
                            {data}
                        </Tree>
                        <input type={'submit'} className={'submit'} value={'submit'} />
                    </form>
                )
            })}
        </Tabs>
    )
}

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

export default FormContainer
