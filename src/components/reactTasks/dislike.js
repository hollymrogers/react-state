import React from 'react'

export default class Dislike extends React.Component {
  constructor() {
    super()
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

 handleClick() {
     {this.state.disliked ? 'Dislike' : 'Disliked'}
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    ) 
  }
}
