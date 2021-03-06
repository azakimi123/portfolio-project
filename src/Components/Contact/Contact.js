import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Contact.scss';

//waiting for DNS verification for email setup to work in production
function Contact(){

  const alert = useAlert();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleSubmit = () => {
      handleEmail()
      clearForm()
      alert.show('Thank you, your message has been sent')
  }

  const clearForm = () => {
      setName('')
      setEmail('')
      setMessage('')
  }

  const handleEmail = () => {
      axios.post('/api/contact', {name, email, message})
  }

      return (
          <div className='contact-main-page' id='section4'>
                  <section className='contact-text-box'>
                      <h2>Want to Collaborate?</h2>
                      <p className='contact-text2'>Send me a message and I'll get back to you as soon as possible</p>
                  </section>
                  <form>
                      <label className='input'>
                          Name
                          <input 
                              className='contact-name-input'
                              type='text'
                              value={name}
                              onChange={e => setName(e.target.value)}/>
                      </label>
                      <label className='input'>
                          Email
                          <input 
                              className='contact-email-input'
                              type='text'
                              value={email}
                              onChange={e => setEmail(e.target.value)}/>
                      </label>
                      <label className='input'>
                          Message
                          <textarea
                              className='contact-message-input'
                              type='text'
                              rows='5'
                              value={message}
                              onChange={e => setMessage(e.target.value)}/>
                      </label>
                      <input
                          className='contact-send'
                          type="submit" 
                          value="Send"
                          onClick={handleSubmit} />
                  </form>
                  {/* <Footer /> */}
          </div>
      )
}

export default Contact;