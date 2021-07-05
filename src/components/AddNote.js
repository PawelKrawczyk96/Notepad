import {useState} from 'react'

const AddNote = ({onClick}) => {
    
    const [text,setText] = useState('')
    const [important,setImportant] = useState(false)
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Pole nie może być puste!')
        }
        else{
            onClick({text,important})
            setText('')
            setImportant(false)
        }
        
    }
    return(
        <div className="addNote">
            <form onSubmit={onSubmit}>
            <input type="text" placeholder="dodaj notatke..." value={text} onChange={(e) => setText(e.target.value)} />
            <input type="checkbox"  checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)} /> Ważne!
            <input type="submit" value="Dodaj"  className="btn-add"/>
        </form>
        </div>
    )
}

export default AddNote