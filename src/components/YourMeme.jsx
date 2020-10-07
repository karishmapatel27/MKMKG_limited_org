import React from 'react'
import { Route, } from 'react-router-dom'

import { Header } from 'semantic-ui-react'

import Canvas from './Canvas'
import BigImage from './BigImage'
import TextOverlay from './TextOverlay'
import PrintScreen from './PrintScreen'
import ReturnToHome from './ReturnToHome'
import ShareURL from './ShareURL'

function YourMeme(props) {
  return (
    <>
      {/* <BigImage {...props}/> */}
      <div className='header'>
        <Header size='small'>Enjoy Your Meme!</Header>
      </div>
      <Canvas {...props}/>
      <ReturnToHome />
      <ShareURL />
    </>
  )
}

export default YourMeme

//Display meme; image with text overlay, nice message
