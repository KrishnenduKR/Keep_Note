import React, { useState } from 'react';
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'

interface ICreateNoteProps {
    addNotes : Function
}

const CreateNote = ({addNotes}:ICreateNoteProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = event.target
        setNote((currentNote)=> {
            return {
                ...currentNote,
                [name]: value
            }
        })
    }
    const submitNote = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        addNotes(note)
        setNote({
            title: '',
            content: ''
        })
    }

  return <div className='create-note'>
      <form>
          {isExpanded && 
          <input name="title" placeholder='note title' value={note.title} onChange={handleChange} ></input>
          }
          
          <textarea name='content' placeholder='enter note content' rows={isExpanded ? 4 : 1} onClick={() =>{setIsExpanded(true)} } value={note.content} onChange={handleChange} ></textarea>
          {isExpanded && 
          <Fab onClick={submitNote}>
              <Add></Add>
          </Fab>
          }
          
      </form>
  </div>
}

export default CreateNote;
