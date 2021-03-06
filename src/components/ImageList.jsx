import React from 'react'

import { Grid, Image, Header } from 'semantic-ui-react'

import ReturnToHome from './ReturnToHome'

function ImageList() {

  return (
    <>

      <div className='header'>
        <Header size='huge'>Meme Generator</Header>
      </div>

      <h1 className="home_subheading">Choose your victim:</h1>

      <div class="grid_img">


        <Grid columns={3} doubling stackable padded>
          <Grid.Column>
            <Image src='/images/don.png' href='#/memeBuilder/don' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/karel.png' href='#/memeBuilder/karel' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/daryl.png' href='#/memeBuilder/daryl' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/emily.png' href='#/memeBuilder/emily' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/prue.png' href='#/memeBuilder/prue' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/images/nimesh.png' href='#/memeBuilder/nimesh' />
          </Grid.Column>
        </Grid>

      </div>
      <ReturnToHome />

    </>
  )
}

export default ImageList


