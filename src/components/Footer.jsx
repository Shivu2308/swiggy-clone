import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = ({ appLink }) => {
    // console.log(appLink)
    const { androidAppImage, androidAppLink, iosAppImage, iosAppLink, title } = appLink
    return (
        <div className='w-full flex flex-col justify-center items-center py-10 bg-[#F0F0F5]'>
            <div className='flex max-lg:flex-col lg:justify-center lg:items-center gap-5 '>
                <div className='text-[#3D4046] md:text-xl lg:text-2xl text-center font-bold'>
                    {title}
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <a href={androidAppLink}>
                        <div className='w-48 h-16'>
                            <img className='w-full h-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${androidAppImage}`} alt="androidAppImage" />
                        </div>
                    </a>
                    <a href={iosAppLink}>
                        <div className='w-48 h-16'>
                            <img className='w-full h-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${iosAppImage}`} alt="androidAppImage" />
                        </div>
                    </a>
                </div>
            </div>
            <>
                <div className='flex items-center mt-10'>
                    <div className=''>
                        <img src={assets.swiggyicon} alt="swiggyIcon" />
                    </div>
                    <div className='text-[#FF5200] text-3xl font-extrabold'>
                        Swiggy
                    </div>
                </div>
                <div className='text-[#616469] text-[15px]'>
                    {('\u00A9 ' + new Date().getFullYear() + ' Swiggy Limited')}

                </div>
            </>
        </div>
    )
}

export default Footer
