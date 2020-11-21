import React from 'react'
import { Route, } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import Canvas from './Canvas'
import PrintScreen from './PrintScreen'
import ReturnToHome from './ReturnToHome'

function YourMeme(props) {
  return (
    <>
      <div className='header'>
        <Header size='small'>Enjoy Your Meme!</Header>
      </div>
      <Canvas {...props} />
      <div class="print_return_btn">
        <ReturnToHome />
        <PrintScreen />
      </div>
    </>
  )
}

export default YourMeme

//Display meme; image with text overlay, nice message
