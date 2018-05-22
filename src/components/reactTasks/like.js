import React from 'react'

export default class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {subscribed: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      subscribed: !prevState.subscribed
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.subscribed ? 'Like' : 'Liked'}
      </button>
    )
  }
}
