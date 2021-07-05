import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick = () => {
        console.log('test')
    }
    return (
        <header className="header">
            <h1>Notatnik</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Notatnik'
}

Header.prototypes = {
    title:PropTypes.string
}

export default Header