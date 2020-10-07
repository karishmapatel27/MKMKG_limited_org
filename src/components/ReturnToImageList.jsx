import React from 'react'

import { Button, Icon } from 'semantic-ui-react'

function ReturnToImageList() {
  return(
    <>
      
      <Button animated href='/#/imageList' size='large' id="returnToImageBtn" >
      <Button.Content visible>Return To Images</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
    </>
  )
}

export default ReturnToImageList

//Button to return to ImageList.jsx
