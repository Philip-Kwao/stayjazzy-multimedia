import React from 'react'
import Images from '../../components/images/Images'
import './Gallery.css'


const Gallery = () => {
  return (
    <div className='gallery__div'>
      <h2 className='gallery__heading'>our works</h2>
      <Images/>
    </div>
  )
}

export default Gallery