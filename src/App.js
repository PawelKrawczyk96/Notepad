import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import './App.css'
import {useState} from 'react'

import './App.css';

function App() {
  const [notes,setNotes] = useState([
    {
        id:1,
        text:'16 maja, rocznica ślubu!',
        important:true
    },
    {
        id:2,
        text:'18 maja o 16:30, karmielicka 11 - spotkanie',
        important:true
    },
    {
        id:3,
        text:'24 maja urlop!',
        important:false
    }
])

const deleteNote = (id) => {
  setNotes(notes.filter((note) => note.id !== id))
}

const toggleImportant = ((id) =>{
  setNotes(notes.map((task) => task.id === id ? {...task, important: !task.important} : task)
)})

const addNote = (note) =>{
  const id = notes.length + 1
  const newNote = {id, ...note}
  setNotes([...notes,newNote])
}

  return (
    <div className="App">
      <Header />
      <AddNote onClick={addNote} />
      {notes.length > 0 ? <Notes notes={notes} onDelete={deleteNote} onToggle={toggleImportant} /> : 'Nie ma żadnych notatek.' } 
    </div>
  );
}

export default App;
