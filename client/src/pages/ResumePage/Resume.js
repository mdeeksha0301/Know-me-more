import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Experience } from '../../components/Experience'
import { Skills } from '../Home/Skills';
import { Education } from '../../pageComponents/Education';


const Resume = () => {
  return (
    <div className='bg-primary px-40'>
        <Header />
        <Skills />
        <Experience/>
        <Education />
        <Footer />
    </div>
  )
}

export default Resume