import React from 'react'

import { Image } from 'semantic-ui-react'

function BigImage (props) {

  const MemeImage = props.match.params.image
console.log(props.match.params)

  return (
    <>
      <Image src={`/images/${MemeImage}.png`}/>
    </>
  )
}

export default BigImage

//Big view of selected image for text to go on top of
