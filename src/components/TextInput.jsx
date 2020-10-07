import React, { Component } from 'react'

class TextInput extends Component {
  constructor(props) {
  super(props)
    this.state = {
    text: ''
  }
}

  handleURL = () => {
    this.props.history.push(`/yourMeme/${this.props.match.params.image}/${this.state.text}`)
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value })
  }


  render() {
    return (
      <>
        <form id='form'>
          <input id='input' type="text" placeholder="Write your meme text..." value={this.state.text} onChange={this.handleChange} />
          <input id='button' type="submit" onClick={this.handleURL} />
        </form>
      </>
    )
  }
}

export default TextInput

