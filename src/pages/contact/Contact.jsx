import React from 'react'
import Form from '../../components/form/Form'
import './Contact.css'
import ContactDetails from '../../components/contact-details/ContactDetails'

const Contact = () => {
  return (
    <div className='contact__container'>
      <h2>contact us to book for a session</h2>
      <div className="contact__items">
        <Form />
        <ContactDetails />
      </div>
    </div>
  )
}

export default Contact