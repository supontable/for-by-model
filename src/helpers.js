const prepareModel = (model) => {
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
export default prepareModel
