import React from 'react'
import './Images.css'

import GalleryImage1 from '../../assets/images/8don.jpg'
import GalleryImage2 from '../../assets/images/9.jpg'
import GalleryImage3 from '../../assets/images/11.jpg'
import GalleryImage4 from '../../assets/images/ad4.jpg'
import GalleryImage5 from '../../assets/images/alu2.jpg'
import GalleryImage6 from '../../assets/images/child.jpg'
import GalleryImage7 from '../../assets/images/couple.jpg'
import GalleryImage8 from '../../assets/images/family.jpg'
import GalleryImage9 from '../../assets/images/FB_IMG_1669721962917.jpg'
import GalleryImage10 from '../../assets/images/FB_IMG_1669721983367.jpg'
import GalleryImage11 from '../../assets/images/FB_IMG_1669721999425.jpg'
import GalleryImage12 from '../../assets/images/FB_IMG_1669722027933.jpg'
import GalleryImage13 from '../../assets/images/FB_IMG_1669722070858.jpg'
import GalleryImage14 from '../../assets/images/FB_IMG_1669722075471.jpg'
import GalleryImage15 from '../../assets/images/FB_IMG_1671052957712.jpg'
import GalleryImage16 from '../../assets/images/ken3.jpg'
import GalleryImage17 from '../../assets/images/maternity.jpg'
import GalleryImage18 from '../../assets/images/nana1_20.jpg'
import GalleryImage19 from '../../assets/images/OL1.jpg'
import GalleryImage20 from '../../assets/images/outdoor.jpg'


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Images = () => {
    const images = [
        GalleryImage1,
        GalleryImage3,
        GalleryImage4,
        GalleryImage5,
        GalleryImage6,
        GalleryImage2,
        GalleryImage19,
        // Add more image URLs as needed
      ];
    
      const images2 = [
        GalleryImage7,
        GalleryImage8,
        GalleryImage9,
        GalleryImage10,
        GalleryImage11,
        GalleryImage12,
        GalleryImage20 
      ]
    
      const images3 = [
        GalleryImage13,
        GalleryImage14,
        GalleryImage15,
        GalleryImage16,
        GalleryImage17,
        GalleryImage18,
      ]
    
      const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='gallery__conatiner'>
      <div>
        <div>
          <div className="gallery">
            <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
              >

              {images.map((image, index) => (

                  <a href={image}>

                      <img className='gallery__img' alt="img1" src={image} />
                  </a>
                  ))}
            </LightGallery>

            <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
              >

              {images2.map((image, index) => (

                  <a href={image}>

                      <img className='gallery__img' alt="img1" src={image} />
                  </a>
                  ))}
            </LightGallery>
            <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
              >

              {images3.map((image, index) => (

                  <a href={image}>

                      <img className='gallery__img' alt="img1" src={image} />
                  </a>
                  ))}
            </LightGallery>
          </div>
        </div>

        
      </div>
  </div>
  )
}

export default Images