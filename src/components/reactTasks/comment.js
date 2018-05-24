import React from 'react'

export default class Comment extends React.Component{

  constructor(){
    super()
    this.state = {comments: ['Brilliant!', 'Terrible']}
  }


 handleChange(event) {
    this.setState({comments: event.target.comments});
  }

  handleClick(){
    if(this.comment.value.length > 0){
    this.state({comments: _.concat(this.state.comments, this.comment.value)})
    this.comment.value = ''
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

 

