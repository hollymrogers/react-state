import React from 'react'

export default class Like extends React.Component {
  constructor() {
    super()
    this.state = {liked: true}
    this.handleClick = this.handleClick.bind(this)
  }
  
handleClick() {
    this.setState({
      liked: !this.state.liked});
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? 'Like' : 'Liked'}
      </button>
    )
  }
}
