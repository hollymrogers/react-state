import React from 'react'

export default class Dislike extends React.Component {
  constructor() {
    super()
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.state.disliked ({
      disliked: !prevState.disliked
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    ) 
  }
}
