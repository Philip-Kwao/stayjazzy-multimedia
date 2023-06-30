import React from 'react'
import HeroImage from '../../assets/images/9.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero__container'>
        
        <span className="overlay"></span>
        <div className="hero__text">
            <h2 className="hero__heading">stay jazzy studio service</h2>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem iure ratione placeat repellat, itaque tenetur officiis autem architecto ex modi animi dolore reiciendis quasi enim nisi in hic. Eius?</p>
        </div>
        <img src={HeroImage} alt="" className="hero__bg" />
    </div>
  )
}

export default Hero