import './app.scss'
import Docs from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import React, { useState } from 'react'

const App = () => {
  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    pdf:false,
    spotify:false,
    cli:false
    

  });
  return (
     <main>
       <Nav/>
      <Docs windowState = {windowState} setWindowState = {setWindowState}/>
      
       {windowState.github && <Github windoName ="github" setWindowState={setWindowState}/>}
      {windowState.note &&<Note  windoName ="note" setWindowState={setWindowState}/>}
     { windowState.resume &&<Resume windoName ="resume" setWindowState={setWindowState}/>}
      {windowState.spotify &&<Spotify windoName ="spotify" setWindowState={setWindowState}/>}
      {windowState.cli &&<Cli windoName ="cli" setWindowState={setWindowState}/>}
    </main>
  )
}

export default App
