import React from 'react';
import { Delete } from '@mui/icons-material'

interface INoteProps {
    note: {
        title: string,
        content: string
    },
    deleteNote: Function
}
const Note = ({note, deleteNote}: INoteProps) => {
    
  return <div className='note'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={()=> {deleteNote()}}>
          <Delete></Delete>
      </button>
  </div>
}

export default Note;
