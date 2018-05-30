import React from 'react'

export default class Like extends React.Component {
  constructor() {
    super()
    this.state = {liked: true}
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(event) {
    if(this.state.liked == true){
      this.setState({liked:false})
    } else {
      this.setState({liked:true})
    }
}

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? 'Like' : 'Liked'}
      </button>
    )
  }
}

