import React, { useState } from 'react'
import { addNote } from '../action'
import { useDispatch } from "react-redux"

export default function NotesForm() {
    let [title,setTitle]=useState('')
    let [content,setContent]=useState('')
    const dispatch=useDispatch()
    function handleSubmission(e){
      e.preventDefault()
      dispatch(addNote(title,content))
      setContent('')
      setTitle('')
    }
  return (
    <div>
      <h3>React Notes</h3>
      <form onSubmit={handleSubmission}>
        Title <br />
        <input type="text" name="title" value={title} placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} /> <br /> 
        Content <br />
        <input type="text" name="content" value={content} placeholder='Enter Content' onChange={(e)=>setContent(e.target.value)} /> <br/>
        <button type="submit"> Add Note</button>
      </form>
    </div>
  )
}
