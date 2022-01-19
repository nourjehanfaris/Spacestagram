/*
Description: The Loading constructor displays a transparent spinner gif for when the images are loading. 
 
Author: Nourjehan Faris
Version: 2022-01-18
*/
import React from 'react'
import spinner from '../img/spinner.gif'

const Loading = () => {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Loading