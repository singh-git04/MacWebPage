import React from 'react'
import MacWindow from './Macwindow'

const Spotify = ({windoName,setWindowState}) => {
  return (
    <MacWindow  windoName={windoName} setWindowState={setWindowState} width='30vw' height='40vh'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/7uIbLdzzSEqnX0Pkrb56cR?utm_source=generator&si=d07ba00b640e4f9e" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
