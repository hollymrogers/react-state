import React from 'react'

export default class Comment extends React.Component{

  constructor(){
    super()
    this.state = {comments: ['Brilliant!', 'Terrible']}
  }


handleChange(event) {
    this.setState({value: event.state.value});
  }


  handleClick(){
    if(this.state.value.length > 0){
    this.state({comments: _.concat(this.state.comments, this.state.value)})
    this.state.value = ''
    }
  }

  render(){
    
    return (
      <form>
        {_.map(this.state.comments, comment => <li>{comment}</li>)}
        <input type="text" value={this.state.comment} onChange={this.handleChange}/>
        <button onClick={this.handleClick.bind(this)}>Add Public Comment</button>
      </form>
    )
  }
}


 