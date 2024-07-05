import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Projects } from '../../pageComponents/Project/Projects'
// import ProjectMain from '../../pageComponents/Project/ProjectMain'

const ProjectsPage = () => {
  return (
    <div className='bg-primary px-40'>
        <Header />        
        <Projects/>
        <Footer />
    </div>
  )
}

export default ProjectsPage