import React from "react"
import { Route } from "react-router-dom"

import { Header } from 'semantic-ui-react'

import Home from "./Home"
import ImageList from "./ImageList"
import MemeBuilder from "./MemeBuilder"
import YourMeme from "./YourMeme"
import Canvas from "./Canvas"
import PrintScreen from "./PrintScreen"

function App() {
  return (
    <>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/imageList' component={ImageList} />
        <Route path='/memeBuilder/:image' component={MemeBuilder} />
        <Route path='/yourMeme/:image/:text' component={YourMeme} />
      </div>
    </>
  )
}

export default App
