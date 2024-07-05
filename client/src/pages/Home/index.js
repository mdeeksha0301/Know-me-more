import React from 'react';
import { Header } from '../../components/Header';
import { Intro } from './Intro';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from '../../pageComponents/Project/Projects';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { useSelector } from 'react-redux';
import 'antd/dist/antd';


const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div >
      <Header className="px-40" />
        {portfolioData && (
          <div className='bg-primary px-40 mobile:px-5'>
        
          <Intro />
          <About />
          {/* <AdminLogin /> */}
          <Skills />
          {/* <Experience /> */}
          <Projects />
          <Contact />
          <Footer />
        </div>
        )}
    </div>
  );
};

export default Home;
