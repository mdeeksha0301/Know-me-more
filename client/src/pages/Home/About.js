import React from 'react'
import { SectionTitle } from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

export const About = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {about} = portfolioData;
  const {lottieURL, description1, decription2} = about;
  return (
    
    <div>
        <SectionTitle title="About"/>

        <div className='flex w-full items-center mobile:flex-col mobile:w-full'>
            <div className='h-[70vh] w-1/2 mobile:w-full'>
            {lottieURL && (
              <lottie-player 
              src= {lottieURL}
              background="##fff" 
              speed="1"  
              autoplay ></lottie-player>
            )}
                
            </div>

            <div className='flex flex-col gap-8 text-white w-1/2 mobile:w-full' >
                <p className=''>
                {description1}
                </p>
                <p>{decription2}</p>
            </div>
        </div>
    </div>
  )
}
