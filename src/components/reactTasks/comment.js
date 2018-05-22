import React from 'react'

export default class Comment extends React.Component{

  constructor(){
    super();
    this.state = {comments: ['Brilliant!', 'Terrible']};
  }

  _handleClick(){
    if(this.comment.value.length > 0){
    this.setState({comments: _.concat(this.state.comments, this.comment.value)});
    this.comment.value = '';
    }
  }


  
  render(){
    
    return <div>
    <input ref= {input => this.comment = input}></input> 
    <button onClick = {this._handleClick.bind(this)}>Add Public Comment</button>

    <ul>
      {_.map(this.state.comments, comment => <li>{comment}</li>)}
    </ul>
    </div>

  }
}