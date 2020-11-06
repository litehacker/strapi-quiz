import React from 'react'

import IntroSection from '../components/intro/Intro'
import ContactSection from '../components/contact-section/ContactSection'
import MapSection from '../components/map/Map' // import the map here
import DisclaimerSection from '../components/disclaimer/Disclaimer'
import FooterSection from '../components/footer/Footer'


import '../components/contact-section/contactform.css'
const location = {
  address: 'Sahabiye, 38010 Kocasinan/Kayseri',
  lat: 38.725257, 
  lng: 35.489693,
} // our location object from earlier

const ContactForm = () => (
  <div className="ContactForm">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <DisclaimerSection />
    <FooterSection />
  </div>
)
export default ContactForm