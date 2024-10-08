import React from 'react'

export const SectionTitle = ({title}) => {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-2xl text-white font-semibold'>
            {title}
        </h1>
        <div className='w-60 h-[1px] bg-third'></div>
    </div>
  )
}
