import React from 'react'
import { Header } from 'semantic-ui-react'

import Canvas from './Canvas'
import PrintScreen from './PrintScreen'
import ReturnToHome from './ReturnToHome'

function YourMeme(props) {
  return (
    <>
      <div className='header'>
        <Header size='small' id="enjoy">Enjoy Your Meme!</Header>
      </div>
      <Canvas {...props} />
      <div className="print_return_btn">
        <ReturnToHome />
        <PrintScreen />
      </div>
    </>
  )
}

export default YourMeme

//Display meme; image with text overlay, nice message
