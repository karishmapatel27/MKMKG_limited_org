import React from 'react'

import { Button } from 'semantic-ui-react'

function PrintScreen() {
  return (
    <>
      <h1>PrintScreen</h1>
      
 <div>
  <Button onclick='window.print();return false;' href='#' >
  <Button.Content>Click Me to save your meme</Button.Content>
  </Button> 
 </div>   
    </>
  )
}

export default PrintScreen

//Calls print window

