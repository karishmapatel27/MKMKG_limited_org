import React from 'react'

import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

function Home() {
  return (
    <>
      <div className='header'>
        <Header size='huge'>Meme Machine</Header>
      </div>
      <h2>REACT to our memes</h2>
      <div class= 'home-button'>
        <Button animated='fade' size='massive' href='/#/imageList' color='red' id="mainButton">
          <Button.Content visible >Click Me to make a MEME</Button.Content>
          <Button.Content hidden>MEME Time!!!</Button.Content>
        </Button>
      </div>
    </>
  )
}

export default Home

//Title
//Link to start making a meme
