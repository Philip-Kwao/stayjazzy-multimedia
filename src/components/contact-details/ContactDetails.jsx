import React from 'react'
import './ContactDetails.css'
import {BsFacebook, BsInstagram, BsPhone, BsTelephoneFill, BsTwitter, BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const ContactDetails = () => {
  return (
    <div className='contact__details_container'>
        <h3>About Stay jazzy studio</h3>
        <div className="about">
            <p className='about__paragraph'>
                We provide you with the best photography services. Our goal is to get you an industry standard photos with dedication and excellence. We also believe that until the customer is satified we are not.
            </p>
            <div className="socials">
                <h3>Visit out social media platforms</h3>
                <div className="social__media">
                    <a href="https://instagram.com/stayjazzy_multimedia?igshid=MzRlODBiNWFlZA==" target='_blank'><BsInstagram className='social__icon' /></a>
                    <a href="https://www.facebook.com/stayjpixels" target='_blank'><BsFacebook className='social__icon' /></a>
                    <a href="https://twitter.com" target='_blank'><BsTwitter className='social__icon' /></a>
                    <a href="https://api.whatsapp.com/send?phone=+233557071141" target='_blank'><BsWhatsapp className='social__icon' /></a>
                    <a href="tel:233557071141" target='_blank'><BsTelephoneFill className='social__icon' /></a>
                    
                </div>
            </div>
            <span className="contact__number">
                for more enquiries call <a href="tel:233557071141" target='_blank '>055 707 1141</a>
            </span>
        </div>

    </div>
  )
}

export default ContactDetails