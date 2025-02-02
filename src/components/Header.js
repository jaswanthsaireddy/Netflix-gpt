import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {addGptSuggestedMovieResult, toggleSearchView} from  '../utils/GptSlice'
import { changeName } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) =>  store.gpt.showGptSearch)
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
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL:photoURL}));
                navigate("/browse")
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
              // ...
            }
          });
          return () => unsubscribe();
    },[])

    const handleGptSearchClick = () =>{
      dispatch(toggleSearchView());
      if(!showGptSearch){
        dispatch(addGptSuggestedMovieResult({moviesListGemini:null,tmdbMovieResults:null}))
      }
    }

    const handleLanguageSelector = (e) =>{
      dispatch(changeName(e.target.value))
      console.log(e.target.value)
    }
  return (
    <div className=' absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row  justify-between  p-1 md:p-4'>
        <img alt='Netflix_logo '
            src= {NETFLIX_LOGO}
            className='w-[8rem] md:w-[12rem] my-0 md:my-[1rem] mx-auto md:ml-2'/>
        
        {user && <div className='flex items-center justify-between mx-2 md:mx-10'>
          { showGptSearch &&
            <select className='bg-gray-900 text-white p-1 md:p-2  m-0 md:m-2' onClick={handleLanguageSelector}>
              {SUPPORTED_LANGUAGES.map(lang => 
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>)}

            </select>
          }
            <button 
              className='p-1 md:p-2 m-1 md:m-4 bg-purple-800 text-white'
              onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Homepage" : "Gpt Search"}
              </button>
            <img
                alt='usericon' 
                src= {user?.photoURL}
                className='h-12 w-12 hidden md:block'
            />
            <button onClick={handleSignOut} className='p-1 md:p-2 m-1 md:m-4 text-white  cursor-pointer bg-blue-800'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header