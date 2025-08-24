import React from 'react'
import { assets } from '../../assets/assets'

const Footer = ({ footerData }) => {
    // console.log(footerData);
    const imageId = footerData.imageId
    const LicenseNo = footerData.text
    const rastaurantName = footerData.name
    const outlate = footerData.area
    const completeAddress = footerData.completeAddress
    // console.log(completeAddress)

    return (
        <div className='bg-[#f1f1f6] w-full pt-5 px-5 pb-32'>
            <div className=' flex items-center gap-5'>
                <div className='w-[60px]'>
                    <img className='w-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/${imageId}`} alt="" />
                </div>
                <span className='text-[#aeaeaf] font-bold text-xs mt-1'> {LicenseNo} </span>
            </div>
            <hr className='border-black my-4' />
            <div className='text-[#02060c80]'>
                <div className='font-extrabold text-[13px] leading-none'>{rastaurantName}</div>
                <div className='font-medium text-sm mt-1'>(Outlet:{outlate})</div>
                <div className='flex gap-2 mt-3'>
                    <span className='w-3 mt-1'>
                        <img className='w-3 opacity-60' src={assets.locationSvg} alt="" />
                    </span>
                    <span className='text-xs font-semibold text-[#aeaeaf]'>
                        {completeAddress}
                    </span>
                </div>
                <hr className='border-black my-4' />
                <div className='font-extrabold text-[13px] text-[#000] text-center'>
                    For better experience, download the Swiggy app now
                </div>
                <div className='flex items-center justify-center gap-5 mt-3'>
                    <div className='w-[151px] h-12 overflow-hidden'>
                        <img className='w-full h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                    </div>
                    <div className='w-[151px] h-12 overflow-hidden'>
                        <img className='w-full h-full ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
