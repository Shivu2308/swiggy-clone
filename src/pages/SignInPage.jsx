import React from 'react'
import useSignInPage from '../hooks/SignInPageHooks/useSignInPage';
import { assets } from '../assets/assets';

const SignInPage = () => {

    const [userData, handleAuth, handleLogin, handleLogOut] = useSignInPage()


    return (
        <div className='w-4/5 sm:w-[62%] mx-auto sm:ml-12 mt-8'>
            <div className='mb-7'>
                <img className='cursor-pointer'
                    onClick={handleLogin}
                    src={assets.cancle} alt="" />
            </div>
            <div className='flex justify-between items-center mb-10'>
                {
                    userData ? 

                    <div className='font-semibold text-xl sm:text-3xl'> Log Out</div>
                    :
                
                <div className=''>
                    <div className='font-semibold text-3xl'>Login</div>
                    <div className='text-sm font-semibold my-2'>or <span className='text-[#FF5200]'>create an account</span></div>
                    <div className='w-10 border border-black'></div>
                </div>
                }
                <div className='w-[88px]'>
                    <img className='w-full' src={assets.imageloginbtpq7r} alt="" />
                </div>
            </div>
            {
                userData ? (
                    <button
                        onClick={handleLogOut}
                        className='w-full cursor-pointer p-3 bg-[#FF5200] text-[#ffffff] font-bold text-center'>
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleAuth}
                        className='w-full cursor-pointer p-3 bg-[#FF5200] text-[#ffffff] font-bold text-center'>
                        Login with GOOGLE
                    </button>
                )
            }
            <div className='text-xs font-bold text-[#6F6F6F] mt-1'>By clicking on Login, I accept the <span className='text-black cursor-pointer'>Terms & Conditions & Privacy Policy</span></div>
        </div>
    )
}

export default SignInPage;
