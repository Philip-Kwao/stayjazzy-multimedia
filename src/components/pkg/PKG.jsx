import React from 'react'

// Import Swiper styles
// import 'swiper/css';

import './PKG.css'
import PKGItem from './PKGItem'
import Image1 from '../../assets/images/FB_IMG_1669722027933.jpg'
import Image2 from '../../assets/images/11.jpg'
import Image3 from '../../assets/images/OL1.jpg'
import Image4 from '../../assets/images/ad4.jpg'
import MarternityImage from '../../assets/images/maternity.jpg'
import ChildImage from '../../assets/images/child.jpg'
import FamilyImage from '../../assets/images/family.jpg'
import CoupleImage from '../../assets/images/couple.jpg'
import OutdoorImage from '../../assets/images/outdoor.jpg'


import PKGPrice from './PKGPrice'
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, FreeMode } from "swiper";

const PKG = ({item, price}) => {

    
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (

<Swiper
    pagination={{
      dynamicBullets: true,
      clickable: true,
    }}
    autoplay= {{
      delay: 5000,
    }}
    
    cssMode={true}
    navigation={true}
    mousewheel={true}
    keyboard={true}
    grabCursor={true}
    loop={true}
    freeMode= {{
        enabled: true,
        sticky: true,
      }}
    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, FreeMode]}
    // onAutoplayTimeLeft={onAutoplayTimeLeft}
    className='swiper__container'
    >
    <SwiperSlide>
            <div className='pkg__container'>
                <div className="pkg__left">
                    <h2 className='pkg__heading'>Regular PhotoShoot</h2>

                    <PKGItem item='1 hour, studio session' />
                    <PKGItem item='1 outfit changes' />
                    <PKGItem item='4 edited pictures' />
                    <PKGItem item='2 setups (concept shoots)' />
                    <PKGItem item='delivery 3 to 5 days after shoots' />
                    <PKGPrice price={450} />
                </div>
                <div className="pkg__right">
                    <img className='pkg__img' src={Image1} alt="" width={300}/>
                </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className='pkg__container'>
                <div className="pkg__left">
                    <h2 className='pkg__heading'>Premium PhotoShoot</h2>

                    <PKGItem item='3 1/2 hour, studio session' />
                    <PKGItem item='3 outfit changes' />
                    <PKGItem item='12 edited pictures' />
                    <PKGItem item='3 setups (concept shoots)' />
                    <PKGItem item='props,balloons' />
                    <PKGItem item='delivery 3 to 5 days after shoots' />
                    <PKGPrice price={1200} />
                </div>
                <div className="pkg__right">
                    <img className='pkg__img' src={Image4} alt="" width={300}/>
                </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
            
        <div className="pkg__right">
                <img className='pkg__img' src={Image3} alt="" width={300}/>
            </div>
            <div className="pkg__left">
                <h2 className='pkg__heading'>Photo Shoot
+ Makeup</h2>

                <PKGItem item='photo shoot with high-end
glamorous makeup with our
in-house makeup artists will
cost 280ghs more per
person.' />
                
                <PKGItem item=' we provide a free makeup
space for your own makeup
artist to use too.' />
                {/* <PKGPrice price={450} /> */}
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
            <div className="pkg__left">
                <h2 className='pkg__heading'>Maternity
Photo Shoot</h2>

                <PKGItem item='3 1/2 hour, studio session' />
                <PKGItem item='3 outfit changes' />
                <PKGItem item='12 edited pictures' />
                <PKGItem item='3 setups (concept shoots)' />
                <PKGItem item='props,balloons' />
                <PKGItem item='delivery 3 to 5 days after shoots' />
                <PKGPrice price={1200} />
            </div>
            <div className="pkg__right">
                <img className='pkg__img' src={MarternityImage} alt="" width={300}/>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
            
        <div className="pkg__right">
                <img className='pkg__img' src={ChildImage} alt="" width={300}/>
            </div>
            <div className="pkg__left">
                <h2 className='pkg__heading'>Baby Photo Shoot</h2>

                <PKGItem item='3 hour, studio session' />
                
                <PKGItem item='2 outfit changes' />
                <PKGItem item='8 edited pictures' />
                <PKGItem item='+ 1 picture with parent' />
                <PKGItem item='3 setups (concept shoots)' />
                <PKGItem item='delivery. 3 to 5 days after shoot' />
                <PKGPrice price={950} />
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
            <div className="pkg__left">
                <h2 className='pkg__heading'>Family
                Photo Shoot</h2>

                <PKGItem item='2 hour, studio session' />
                <PKGItem item='no outfit changes' />
                <PKGItem item='10 edited pictures' />
                <PKGItem item='1 setup (concept shoots)' />
                <div className='pkg__price_container'>
                    <PKGItem item='-FAMILY OF 3' />
                    <PKGPrice price={850} />
                </div>
                <div className='pkg__price_container'>
                    <PKGItem item='FAMILY OF 4 TO 6' />
                    <PKGPrice price={1250} />
                </div>
            </div>
            <div className="pkg__right">
                <img className='pkg__img' src={FamilyImage} alt="" width={300}/>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
            
            <div className="pkg__right">
                    <img className='pkg__img' src={CoupleImage} alt="" width={300}/>
                </div>
                <div className="pkg__left">
                    <h2 className='pkg__heading'>Couple Photo Shoot</h2>
    
                    <PKGItem item='2 hour, studio session' />
                    <PKGItem item='2 outfit changes each' />
                    <PKGItem item='2 setups (consept shoots)' />
                    <PKGItem item='delivery 3 to 5 days after shoot' />
                    <PKGItem item='2 outfit changes each' />
    
                    <div className='pkg__save_date'>** 1 save-the-date design</div>
                    <PKGPrice price={1200} />
                </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='pkg__container'>
                <div className="pkg__left">
                    <h2 className='pkg__heading'>Outdoor Photo Shoot</h2>
                    <div className='pkg__save_date'>** individual/couple photoshoot outside the studio, around Accra
                    
                    <p className="pkg__paragraph2">
                    to book for a photoshoot session outside the studio with us, you will need to <Link to='contact' className='pkg__span'>request for a quote</Link> from us.
                    </p>
                    </div>
                    <PKGItem item='2 hour, studio session' />
                    
                </div>
                <div className="pkg__right">
                    <img className='pkg__img' src={OutdoorImage} alt="" width={300}/>
                </div>
         </div>
    </SwiperSlide>
    {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
</Swiper>
  )
}

export default PKG