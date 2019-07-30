const prepareModels = (models) => {
    let result = []
    if (Array.isArray(models) && models.length > 0) {
        result = models.map((model, key) => prepareModel(model, key))
    }
    return fetchResult(result)
}

const fetchResult = (result) => {
    let fetched = {}
    result = result.map(([form, context], key) => {
        fetched[key] = context
        return form
    })
    return [result, fetched]
}

const prepareModel = (model, key) => {
    if (!Array.isArray(model)) return false
    let form = []
    let context = {}
    model.map(item => {
        let step = item.step - 1 || 0
        let line = item.line - 1 || 0
        item.tab = key
        item.id = `${step}${line}${item.name}`
        if (typeof form[step] === 'undefined') {
            form[step] = [[item]]
        } else {
            if (typeof form[step][line] === 'undefined') {
                form[step][line] = [item]
            } else {
                form[step][line] = [...form[step][line], item]
            }
        }
        context[item.id] = ''
        return item
    })
    return [form, context]
}
export {prepareModels}
