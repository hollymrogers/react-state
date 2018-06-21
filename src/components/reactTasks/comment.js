import React from 'react'

export default class Comment extends React.Component{

  constructor(){
    super()
    this.state = {comments: ['Brilliant!', 'Terrible'], value: ''}
  }

  handleChange(value) {
    console.log(value)
    this.setState({value: value});
  }

  handleClick(event){
    event.preventDefault()
    if(this.state.value.length > 0){
    this.setState({comments: _.concat(this.state.comments, this.state.value), value: ''})
    }
  }

  render(){
    
    return (
      <form>
       <ul> {_.map(this.state.comments, comment => <li>{comment}</li>)}</ul>
        <input type="text" value={this.state.value} onChange={event=>this.handleChange(event.target.value)}/>
        <button onClick={event=>this.handleClick(event)}>Add Public Comment</button>
      </form>
    )
  }
}