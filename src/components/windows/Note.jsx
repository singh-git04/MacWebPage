import React, { useEffect, useState } from 'react'
import MacWindow from './Macwindow'
import Markdown from 'react-markdown'
import "./note.scss"
import SynatxHighlighter from 'react-syntax-highlighter'
import {atomOneDark} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Note = ({windoName,setWindowState}) => {
    const [markdown, setMarkdown] = useState(null);
    
    useEffect(()=>{
        fetch('./note.txt')
        .then(res=> res.text())
        .then(text=>setMarkdown(text))
       
       
    },[])
  return (
    <MacWindow windoName={windoName} setWindowState={setWindowState}>
        <div className="note-window">
            {markdown ?  <SynatxHighlighter language='typescript style={atomOneDark}'>{markdown}</SynatxHighlighter>  : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note
