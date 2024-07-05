import React from 'react'
import { Contact } from '../../components/Contact'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const ContactMe = () => {
  return (
    <div className='bg-primary px-40'>
        <Header />
        <Contact/>
        <Footer />
    </div>
  )
}

export default ContactMe