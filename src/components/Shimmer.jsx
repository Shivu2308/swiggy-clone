import React from 'react'
import { assets } from '../assets/assets'

const Shimmer = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-[#171A29] py-12 sm:py-16 md:py-20 flex justify-center items-center flex-col gap-8'>
        <div className='relative flex justify-center items-center'>
          <div className='w-8 sm:w-10 md:w-14 absolute z-10'>
            <img className='w-full' src={assets.icecreamwwomsa} alt="" />
          </div>
          <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 bg-gradient-to-t from-[#ffffff] to-[rgba(79,79,79,0.1)] rounded-full relative flex items-center justify-center animate-spin'>
            <div className='bg-[#171A29] absolute h-[87%] w-[87%] rounded-full'>
            </div>
          </div>
        </div>
        <h1 className='text-white font-bold text-base sm:text-lg md:text-2xl opacity-70'>Looking for great food near you...</h1>
      </div>
      <div className=' w-100% sm:w-[70%] mx-auto flex gap-12 max-sm:p-14'>
        <div className='border-x-2 mx-auto max-sm:w-full border-[#EEF0F5] pt-7'>
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className={'flex items-center py-5 pl-4 pr-24 gap-5 ' + (index === 0 ? 'bg-[#EEF0F5]' : 'bg-white')}>
              <div className={'w-10 h-10 rounded-full ' + (index === 0 ? 'bg-white' : 'bg-[#EEF0F5]')}></div>
              <div className={'h-3 w-20 ' + (index === 0 ? 'bg-white' : 'bg-[#EEF0F5]')}></div>
            </div>
          ))}
        </div>

        <div className='w-full hidden sm:block'>
          <div className='bg-[#EEF0F5] h-3 w-20 mt-16 mb-8'></div>
          <div className='flex flex-wrap gap-5 '>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className='my-10 mx-auto'>
                <div className='bg-[#EEF0F5] w-44 lg:w-32 pb-[60%]'></div>
                <div className='bg-[#EEF0F5] h-3 w-1/2 my-3'></div>
                <div className='bg-[#EEF0F5] h-3 w-[35%]'></div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}


export default Shimmer



export const SearchShimmer = () => {
  return (
    <div className='bg-[#F5F6F7] w-full p-2 mt-2'>
      <div className=' bg-white p-4 flex items-center gap-4'>
        <div className='bg-[#F3F3F5] border h-8 w-20 rounded-3xl'></div>
        <div className='bg-white border h-8 w-20 rounded-3xl'></div>
      </div>
      <div className=' mt-10'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='w-full p-5 py-7 my-2 bg-white'>
            <div className='bg-[#E5E6E6] h-4 mb-4 w-5'></div>
            <div className='bg-[#E5E6E6] h-4 w-[60%] mb-3'></div>
            <div className='bg-[#E5E6E6] h-4 w-1/2'></div>
            <div className='bg-[#E5E6E6] h-4 mt-4 w-[10%]'></div>
          </div>
        ))}

        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='w-full p-5 py-7 my-2 bg-white'>
            <div className='bg-[#E5E6E6] h-4 w-[60%] mb-3'></div>
            <div className='bg-[#E5E6E6] h-4 w-1/2'></div>
            <div className='flex items-center gap-[8%]'>
              <div className='bg-[#E5E6E6] h-4 mt-4 w-[15%]'></div>
              <div className='bg-[#E5E6E6] h-4 mt-4 w-[15%]'></div>
              <div className='bg-[#E5E6E6] h-4 mt-8 w-[15%]'></div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export const MenuShimmer = () => {
  
  return (
    <div className='w-full mx-auto'>
      <div className='bg-[#EEF0F5] h-4'></div>
      <div className='bg-white mx-4 h-10 '>
        <div className='bg-[#EEF0F5] h-3 w-20 my-8'></div>
        <div className='sm:flex sm:gap-5 sm:items-center  w-full'>
          {Array.from({ length: 2 }).map((_, length) =>
            <div key={length} className='w-full max-sm:mt-10'>
              <div className='w-full bg-[#EEF0F5] pb-[60%] my-4'></div>
              <div className='relative'>
                <div className='h-2 w-[40%] bg-[#EEF0F5]'></div>
                <div className='h-2 w-[30%] bg-[#EEF0F5] my-4'></div>
                <div className='h-2 w-[20%] bg-[#EEF0F5]'></div>
                <div className='bg-[#EEF0F5] w-14 h-6 absolute bottom-0 right-0'></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}