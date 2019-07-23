import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({className, onClick, label, activeTabLabel}) => {
    className = 'tab-list-item' || className

    if (activeTabLabel === label) {
        className += ' tab-list-active'
    }

    return (
        <li
            className={className}
            onClick={() => onClick(label)}
        >
            {label}
        </li>
    )
}

Tab.propTypes = {
    activeTabLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Tab
