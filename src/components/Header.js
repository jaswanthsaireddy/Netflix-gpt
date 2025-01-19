import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () =>{
        signOut(auth)
            .then(() => {
            // Sign-out successful.
            navigate("/")
            }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
  return (
    <div className=' absolute bg-gradient-to-b from-black z-10 w-full flex justify-between p-2'>
        <img alt='youtube_logo'
            src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            className='w-[10rem] ml-[16rem] my-[2.5rem] '/>
        
        {user && <div className='flex items-center mr-10'>
            <img
                alt='usericon' 
                src= {user?.photoURL}
                className='h-12 w-12'
            />
            <button onClick={handleSignOut} className='px-2 text-white font-bold cursor-pointer'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header