import  "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const Docs = ({windowState, setWindowState}) => {

  
  return (
    <footer className='dock'>
        <div 
        onClick={()=>{setWindowState(state=>({...state,github:true}))}}
         className="icon github"> <img src={`${import.meta.env.BASE_URL}doc-icons/github.svg`} alt="" /></div>
        <div 
        onClick={()=>{setWindowState(state=>({...state,note:true}))}}
         className="icon note"><img src={`${import.meta.env.BASE_URL}doc-icons/note.svg`} alt="" /></div>
        <div 
        onClick={()=>{window.open("mailto:sujal@example.com","_blank")}}
         className="icon mail"><img src={`${import.meta.env.BASE_URL}doc-icons/mail.svg`} alt="" /></div>
        <div 
        onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r")}}
         className="icon calender"><img src={`${import.meta.env.BASE_URL}doc-icons/calender.svg`} alt="" /></div>
        <div 
        onClick={()=>{window.open("https://www.ilovepdf.com/jpg_to_pdf", "_blank")}}
         className="icon pdf"><img src={`${import.meta.env.BASE_URL}doc-icons/pdf.svg`} /></div>
        <div 
        onClick={()=>{setWindowState(state=>({...state,spotify:true}))}}
         className="icon spotify"><img src={`${import.meta.env.BASE_URL}doc-icons/spotify.svg`} alt="" /></div>
        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/sujal-singh-65148b369" ,"_blank")}}
         className="icon link"><img src={`${import.meta.env.BASE_URL}doc-icons/link.svg`} alt="" /></div>
        <div 
        onClick={()=>{setWindowState(state=>({...state,cli:true}))}}
         className="icon cli"><img src={`${import.meta.env.BASE_URL}doc-icons/cli.svg`} alt="" /></div>
    </footer>
  )
}

export default Docs
