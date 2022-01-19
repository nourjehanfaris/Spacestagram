/*
Description: The App constructor fetches the data from the NASA APOD API (using useEffect, useState, and axios). I 
set up the URL so that it uses my API key and has a count value of 100. After fetching all of the data, it then sets
the list of images and loading state variables and calls the Header and PhotoGrid constructors so that they can be 
displayed. In addition, two buttons, one to Refresh the page to get new images from the API and other to Scroll Up 
to the top of the page again, are added in a fixed position underneath the Header and PhotoGrid. 
 
Author: Nourjehan Faris
Version: 2022-01-18
*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PhotoGrid from './Components/PhotoGrid';
import Header from './Components/Header';


const App = () => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const API_KEY = '4fdxFtNkZwq8H36afmKh1ImHEnzcQG95nAN9W28e';
  const COUNT_VAL = 100;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios(
        `https://api.nasa.gov/planetary/apod?count=${COUNT_VAL}&thumbs=true&api_key=${API_KEY}`
      )

      console.log(response.data)
      setImageList(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div  className="container">
      <Header/>
      <PhotoGrid isLoading={isLoading} images={imageList} />
      <div className="center">
        <div className="buttonWrapper">
          <button className="LoadBtn" onClick={refreshPage}>Refresh...</button>
          <button className="LoadBtn" onClick={scrollUp}> Top &#11014; </button>
        </div>
      </div>
    </div>
  );
}

export default App;
