import React, { useState } from 'react'
import Tab from './Tab'
import './tabs.css'
import PropTypes from 'prop-types'

const Tabs = ({className, children = []}) => {
    /*
    * Functions
    * */
    function onTabChange (tab) {
        setState(state => {
            return {
                ...state,
                activeTabLabel: tab
            }
        })
    }
    /*
    * */
    children = Array.isArray(children) ? children : [children]
    const [first] = children
    const initialState = {
        activeTabLabel: first ? first.props.label : null
    }
    const [{activeTabLabel}, setState] = useState(initialState)
    return (
        <div className={className || 'tabs'}>
            <ol className='tab-list'>
                {children.map((child) => {
                    const { label, className = 'tab' } = child.props
                    return (
                        <Tab
                            className={className}
                            activeTabLabel={activeTabLabel}
                            key={label}
                            label={label}
                            onClick={onTabChange}
                        />
                    )
                })}
            </ol>
            <div className='tab-content'>
                {children.map((child) => {
                    if (child.props.label !== activeTabLabel) return undefined
                    return child
                })}
            </div>
        </div>
    )
}
Tabs.propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired
}
export default Tabs
