import { render } from '@testing-library/react'
import PropTypes from 'prop-types'

import React from 'react'
import Header from './Header'
import Note from './Note'
const Notes = ({notes, onDelete, onToggle}) =>{

    return(
        <>
            {notes.map((note) => (
                <Note key={note.id} onToggle={onToggle} note={note} onDelete={onDelete}/>
            ))}
        </>
    )
}
Notes.defaultProps = {
 
}

export default Notes