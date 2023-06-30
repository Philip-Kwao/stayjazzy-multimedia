import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

const Form = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        const publicKey = import.meta.env.VITE_PUBLIC_KEY
        const templateID = import.meta.env.VITE_TEMPLATE_ID
        const serviceID = import.meta.env.VITE_SERVICE_ID
        e.preventDefault();
        
        console.log(import.meta.env)
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          alert("Email Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <form className='form__container' ref={form} onSubmit={sendEmail}>
            <div className="form__box">
                <div className="label">*Full Name</div>
                <input type="text" name="user_name" className="name" placeholder='Full Name' />
            </div>
            <div className="form__box">
                <div className="label">*Email Address</div>
                <input type="email" name="user_email" className="email" placeholder='Email Address' />
            </div>
            <div className="form__box">
                <div className="label">*Phone Number</div>
                <input type="number" name='user_phone' className="phone" placeholder='Phone Number' />
            </div>
            <div className="form__box">
                <div className="label">*Select Package</div>
                <select className='pkg__select' name="user_package" id="">
                    <option value="" className='pkg__option'>select package</option>
                    <option value="Regular Photo Shoot" className='pkg__option'>Regular Photo Shoot</option>
                    <option value="Standard Photo Shoot" className='pkg__option'>Standard Photo Shoot</option>
                    <option value="Premium Photo Shoot" className='pkg__option'>Premium Photo Shoot</option>
                    <option value="Photo Shoot + Makeup" className='pkg__option'>Photo Shoot + Makeup</option>
                    <option value="Maternity Photo Shoot" className='pkg__option'>Maternity Photo Shoot</option>
                    <option value="Baby Photo Shoot" className='pkg__option'>Baby Photo Shoot</option>
                    <option value="Family Photo Shoot" className='pkg__option'>Family Photo Shoot</option>
                    <option value="Couple Photo Shoot" className='pkg__option'>Couple Photo Shoot</option>
                    <option value="Outdoor Photo Shoot" className='pkg__option'>Outdoor Photo Shoot</option>
                </select>
                </div>
                <div className="form__box">
                    <div className="label">*Write Your Requirements Here</div>
                    <textarea name="message" placeholder='  Write...' />
                </div>
            <button type="submit" className='form__btn'>book a session</button>
        </form>
  )
}

export default Form