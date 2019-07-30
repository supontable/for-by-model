import React from 'react'
import Leaf from './leaf'
import Tabs from '../Tabs'

const Tree = ({children, type = 'root'}) => {
    if (type === 'root' && children.length > 1) {
        return (
            <Tabs className={'tree ' + type}>
                {Array.isArray(children)
                && children.map((branch, key) => {
                    return (
                        <Tree key={key} type={'branch'} children={branch} label={key.toString()} />
                    )
                })
                }
            </Tabs>
        )
    } else {
        if (type === 'root' && children.length === 1) {
            children = children[0]
        }
        return (
            <div className={'tree ' + type}>
                {Array.isArray(children)
                    ? children.map((branch, key) => {
                        return (
                            Array.isArray(branch)
                                ? <Tree key={key} type={'branch'} children={branch}/>
                                : <Leaf key={key} {...branch} />
                        )
                    })
                    : <Leaf {...children} />
                }
            </div>
        )
    }
}
export default Tree