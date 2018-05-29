import React from 'react'

export default class Dislike extends React.Component {
  constructor() {
    super()
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

 handleClick() {
     this.setState.disliked ? this.setState({disliked:false}) : this.setState({disliked:true})
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    ) 
  }
}
