
import remove from './../icons/remove.png'

const Note = ({note, onDelete, onToggle}) =>{
    return (
        <div className={`note ${note.important ? 'important': ''}`} onDoubleClick={() => onToggle(note.id)}>
            <h2>{note.text}</h2>
            <button className="btn-remove" onClick={() => onDelete(note.id)}><img src={remove} /></button>
        </div>
    )
}

export default Note