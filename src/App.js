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
        text:'Dzisiaj jest ładna pogoda',
        important:false
    },
    {
        id:2,
        text:'Jutro jest gra na orliku',
        important:true
    },
    {
        id:3,
        text:'Wyrzucić śmieci!',
        important:true
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
      <AddNote onClick={addNote}/>
      {notes.length > 0 ? <Notes notes={notes} onDelete={deleteNote} onToggle={toggleImportant} /> : 'Nie ma żadnych notatek.' } 
    </div>
  );
}

export default App;
