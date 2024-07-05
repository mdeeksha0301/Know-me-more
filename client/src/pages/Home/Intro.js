import React from 'react';
import { useSelector } from 'react-redux';

export const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {welcomText, name, caption, decription} = intro;
  return (
    <div className='flex w-full h-[80vh] justify-between items-center py-10 mobile:flex-col'>
      {/* Left container for text content */}
      <div className='flex flex-col items-start bg-primary p-8 w-1/2 mobile:w-full'>
        <h1 className='text-white font-semibold text-2xl mobile:text-m'>{welcomText || ''}</h1>
        <h1 className='text-fourth text-5xl font-semibold mobile:text-3xl'>{name || ''}</h1>
        <h1 className='text-fourth text-5xl font-semibold mobile:text-3xl'>{caption || ''}</h1>
        <p className='text-white mb-2 text-xl  mobile:text-lg'>
        {decription || ''}
        </p>
        <button className='w-full h-10 text-white text-xl bg-fivth rounded-[25px] mobile:h-[123px]'>
         My Resume
        </button>
      </div>

      {/* Right container for illustration */}
      <div className='w-1/2 mobile:mb-[65px]'>
        {/* Add your illustration here */}
        <img
          src='https://www.crio.do/learn/images/portfolio/HeroImage.png'
          alt='Illustration'
          className='rounded-full w-full h-[70vh] mobile:w-auto mobile:h-[30vh]'
        />
      </div>
    </div>
  );
};
