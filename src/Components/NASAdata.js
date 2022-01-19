/*
Description: Constructor NASAdata organizes the elements from the NASA APOD API Json array (images) into a 
formatted list that is aesthetically pleasing to look at. The data is organized into the CSS styled 
"imageContainer" and an animated like button in the shape of a meteor is placed at the bottom underneath the
image, title, date and description. When the like button is pressed, the image toggles between two images. The
Inactive_Meteor_Heart_Icon is the default unliked button image. When the button is pressed, it toggles to the 
Active_Meteor_Heart_Icon image. 

Author: Nourjehan Faris
Version: 2022-01-18
*/

import React, {useState} from 'react'
import likeBtn0 from '../img/Inactive_Meteor_Heart_Icon.png'
import likeBtn1 from '../img/Active_Meteor_Heart_Icon.png'

const NASAdata = ({ image }) => {  
  const [liked, setLiked] = useState(false);
  
  return (
    <div className = "content">
      <div className="imageContainer">
        <img src={image.hdurl} alt={image.public_id}></img>
          <h1>{image.title}</h1>
          <ul>
            <li>
              <strong>Date:</strong> {image.date}
            </li>
            <li>
              <strong>Description:</strong> {image.explanation}
            </li>
          </ul>
          <div className="center">
            <input onClick={() => setLiked((isLiked) => !isLiked)} id="like" className= "likeBtn" 
            type="image" name="submit" alt="submit" src={liked ? likeBtn1 : likeBtn0}>
            </input> 
          </div>
      </div>
    </div>
    
  )
}

export default NASAdata
