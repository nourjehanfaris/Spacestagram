/*
Description: Constructor PhotoGrid is the component responsible for creating the masonry layout grid consisting of NASAdata objects. The NASAdata objects consist of all the info (and images) from the NASA APOD API formated in a list along with the animated like button. The PhotoGrid constructor takes those objects and maps them so that they can form an array to be displayed on the web application. There is a loading state with an animated spinner gif so that the user can know that the objects are being loaded onto the screen. A search bar is also included in this constructor for simplicity sake. The searchBar function filters the image list based on the searchTerm and ensures that only NASAdata objects that match the searchTerm entered by the user are displayed.

Author: Nourjehan Faris
Version: 2022-01-18
*/
import React from 'react'
import NASAdata from './NASAdata'
import Loading from './Loading'
import Masonry from "react-masonry-css"
import {useState} from 'react'

const PhotoGrid = ({ images, isLoading}) => {
  const [searchTerm, setSearchTerm]=useState('')
  const breakPoints = {
    default:3,
    1240:2,
    800: 1
  }
  return isLoading ? (
    <Loading/>
  ) : (
    <div>
        <div className = "center">
          <input 
            className="searchBar" 
            placeholder="Search Date or Title..."
            onChange = {(event) => {
              setSearchTerm(event.target.value);
            }}
          /> 
        </div>
      
      <Masonry 
      breakpointCols={breakPoints} 
      gutter={4}
      className="masonryGrid"
      columnClassName="masonryGridColumn"
      >
          {images.filter((image)=>{
            if(searchTerm == ""){
              return image
            } else if (image.date.includes(searchTerm)){
              return image
            } else if (image.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return image
            }
          }).map((image, key) => (
            <NASAdata key={image.public_id} image={image}></NASAdata>
          ))}

      </Masonry>
    </div>
  )
}

export default PhotoGrid