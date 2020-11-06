import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import Axios from 'axios';

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'İsminiz', placeholder: 'Adınız Soyadınız' },
  {
    id: 'email',
    type: 'email',
    label: 'E posta Adresiniz',
    placeholder: 'siz@ornek.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Yazı',
    placeholder: 'Size nasıl yardımcı olabiliriz?İstek,öneri ve sorunlarınızı buraya yazın.',
  },
]

const Form = () => {
  const [formData, setFormData] = useState({})
  const updateInput = e => { setFormData({ ...formData, [e.target.name]: e.target.value, }) } 
  const handleSubmit = event => { event.preventDefault()
     sendEmail() 
     setFormData({ name: '', email: '', message: '', }) } 
  const sendEmail = () => { Axios.post( 'http://localhost:1337/', formData ) .then(res => { 
    ('emails').add({ name: formData.name, email: formData.email, message: formData.message, time: new Date(), }) }) 
    .catch(error => { console.log(error) }) }


  return(
  <form className="form">
    <h2 className="form-h2">Bize Ulaş</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} onChange={updateInput} value={formData.id || ''}/>
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
            onChange={updateInput} value={formData.name || ''}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
  )
}
export default Form