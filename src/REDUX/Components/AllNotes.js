import React from 'react'
import {useSelector} from 'react-redux'
export default function AllNotes() {
  const notes=useSelector((state)=>state.notes)
  return (
    <div>
      {
        notes.map(note=>{
          return(
            <>
            <div>{note.title}</div>
            <div>{note.content}</div>
           </>
          )
        })
      }
    </div>
  )
}
