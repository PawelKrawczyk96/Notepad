import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick = () => {
        console.log('test')
    }
    return (
        <header>
            <h1>Notatnik</h1>
            <Button color="green" text="Dodaj" onClick={onClick} />
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