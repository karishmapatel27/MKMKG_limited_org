import React from 'react'
import { Button } from 'semantic-ui-react'

function PrintScreen() {
  return (
    <>
      <div>
        <Button onClick={() => window.print()}>
          Click Me to save your meme
        </Button>
      </div>
    </>
  )
}

export default PrintScreen


