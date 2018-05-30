import React from 'react'

export default class Disike extends React.Component {
  constructor() {
    super()
    this.state = {disliked: true}
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(event) {
    if(this.state.disliked == true){
      this.setState({disliked:false})
    } else {
      this.setState({disliked:true})
    }
}
    

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.disliked ? 'Dislike' : 'Disliked'}
      </button>
    )
  }
}

