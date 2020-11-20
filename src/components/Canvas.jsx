import React from "react"
import ReactDOM from "react-dom"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "50px Anton"
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 8;
      ctx.strokeText(this.props.match.params.text.toUpperCase(), 320, 75)
      ctx.fillStyle = 'white'
      ctx.fillText(this.props.match.params.text.toUpperCase(), 320, 75)
    }
  }
  render() {
    console.log(`/images/${this.props.match.params.image}.png`)
    return (
      <div>
        <canvas ref="canvas" width={1280} height={720} />
        <img ref="image" alt="meme victim" src={`/images/${this.props.match.params.image}.png`} className="hidden" />
      </div>
    )
  }
}
export default Canvas