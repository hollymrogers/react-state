import React from 'react'

export default class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {liked: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? 'Like' : 'Liked'}
      </button>
    )
  }
}
