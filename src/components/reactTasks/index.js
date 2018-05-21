import React from 'react'
import video from './images/trailer.png'
import logo from './images/youtube.png'
import Title from './title'
import Uploader from './uploader'
import Description from './description'
import Subscribe from './confirm'

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
   	<Title /> 
   	<Subscribe />
	</div>

    <div>
    <Uploader />
    <Description />
    </div>
  
  </div>
      )
}
