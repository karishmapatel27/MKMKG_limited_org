import React from 'react'
import { Button } from 'semantic-ui-react'

function PrintScreen() {
  return (
    <>
      <div>
        <Button id="printScreen" onClick={() => window.print()}>
          Print
        </Button>
      </div>
    </>
  )
}

export default PrintScreen


