import React from 'react'

import {Image} from 'semantic-ui-react'

import TextInput from './TextInput'
import BigImage from './BigImage'
import ReturnToImageList from './ReturnToImageList'

function MemeBuilder(props) {
  return (
    <>
      <TextInput {...props} />
      <BigImage {...props}/>
      <ReturnToImageList />
    </>
  )
}

export default MemeBuilder