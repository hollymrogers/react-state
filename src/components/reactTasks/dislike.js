import React from 'react'

export default class Disike extends React.Component {
  constructor() {
    super()
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
    this.setState({
      disliked: !this.state.disliked});
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    )
  }
}

