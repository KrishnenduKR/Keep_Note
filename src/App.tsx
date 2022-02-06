import React, { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

type NoteData = {
  title: string,
  content: string
}

type Notes = NoteData[]

function App() {
  const [notes,setNotes] = useState<Notes>([])
  const addNotes = (noteData: NoteData) => {
    setNotes((currentNotes: Notes): Notes=>{
      return [...currentNotes,noteData]
    })
  }
  const deleteNote = (id:number) => {
    setNotes(notes.filter((_,index)=>index !== id))
  }

  return (
    <div className="App">
      <Header></Header>
      <CreateNote addNotes={addNotes} ></CreateNote>
      {
        notes.map((note,index)=> {
          return <Note key={index} note={note} deleteNote={()=>{deleteNote(index)}} ></Note>
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
