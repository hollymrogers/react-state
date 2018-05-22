import React from 'react'
import video from './images/trailer.png'
import logo from './images/youtube.png'
import Subscribe from './subscribe'
import Comment from './comment'
import Like from './like'
import Dislike from './dislike'

export default () => {
  return (
<div>

    <div>
    	<img src={logo} alt="YouTube Logo" />
    </div>

    <div>
      <img src={video} alt="YouTube Video" />
    </div>

    <div>
    <h1>Mission: Impossible - Fallout (2018) - Official Trailer - Paramount Pictures</h1>
   	<Subscribe />
	</div>

    <div>
    <p>Paramount Pictures</p>
    <p>Published May 15th</p>
    <Like /> <Dislike />
    <p>Some missions are not a choice. Watch the official trailer for Mission: Impossible - Fallout starring Tom Cruise. In theatres 7.27.18.</p>
    </div>
  
    <div>
    <Comment />
    </div>

  </div>
      )
}
