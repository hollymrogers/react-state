import React from 'react'

export default class Comment extends React.Component{

  constructor(){
    super()
    this.state = {comments: ['Brilliant!', 'Terrible'], value: ' '}
  }

  handleChange(event) {
    this.setState({value: event.state.comments});
  }

  handleClick(){
    if(this.state.value.length > 0){
    this.setState({comments: _.concat(this.state.comments, this.state.value), value: ''})
    }
  }

  render(){
    
    return (
      <form>
        {_.map(this.state.comments, comment => <li>{comment}</li>)}
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick.bind(this)}>Add Public Comment</button>
      </form>
    )
  }
}

