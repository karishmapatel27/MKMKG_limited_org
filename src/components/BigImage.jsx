import React from 'react'

import { Image } from 'semantic-ui-react'

function BigImage(props) {

  const MemeImage = props.match.params.image
  console.log(props.match.params)

  return (
    <>
      <Image className="big_img" src={`/images/${MemeImage}.png`} width="600" height="400" />
    </>
  )
}

export default BigImage

//Big view of selected image for text to go on top of
