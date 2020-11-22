import React from 'react'
import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

function Home() {
  return (
    <>
      <div className='header'>
        <Header size='huge'>Meme Generator</Header>
      </div>
      <h2 className="home_subheading">REACT to our memes</h2>
      <div className="landing_image">
        <img src='./meme.jpg' alt="meme"></img>
      </div>
      <div class='home-button'>
        <Button color='olive' size='large' href='/#/imageList' id="mainButton">
          <Button.Content visible >Start</Button.Content>
          <Button.Content hidden>MEME Time!!!</Button.Content>
        </Button>
      </div>
    </>
  )
}

export default Home


