import React from 'react'

export default class Dislike extends React.Component {
  constructor(props) {
    super(props)
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      disliked: !prevState.disliked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    )
  }
}
