import React, { useRef, useState } from 'react'
import { checkFormData } from '../utils/Validations'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/Firebase';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_PAGE, USER_ICON } from '../utils/constants';

const SignInPage = () => {

    const[isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const dispatch = useDispatch();

const toggleSignInSignUp = () =>{
    setIsSignIn(!isSignIn)
}


const handleFormValidator = () => {
    const message = checkFormData(email.current.value,password.current.value);
    setErrorMessage(message);

    //If my message is a string ,it means validation has failed , so retutn from the function.

    if(message) return;

    // SignIN || SignUp logic

    if(!isSignIn){
        //SignUp logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_ICON,
                }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    }))
                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            }
        );

    }
    else{
        //SignIn logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
}


  return (
    <div>
        <Header/>
    <div className='fixed h-screen'>
    <div className=' relative'>
        <img src= {BG_PAGE}
            alt='youtube-bg'
            className='w-screen h-screen object-cover'/>
    </div>
    <form 
        className='bg-black  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-3/12 text-white p-8 m-2 md:m-4  flex flex-col opacity-90'
        onClick={(e) => e.preventDefault()} >
        <h1 className='text-3xl my-4'>{isSignIn ? "Sign In" : "Sign Up" }</h1>

        {!isSignIn && 
        <input 
            className='w-full p-4 my-4 bg-gray-700' 
            type='text' 
            placeholder='Enter Name'
            ref={name}
        />}
        <input 
            className='w-full p-4 my-4 bg-gray-700'
            type='text'
            placeholder='Email Adrress'
            ref={email}
        />
        <input 
            className='w-full p-4 my-4 bg-gray-700' 
            type= 'password' 
            placeholder='Password'
            ref={password}
        />
        <p className='p-4 text-red-500 font-bold'>{errorMessage}</p>
        <button className='bg-red-800 p-4 w-full my-4 font-bold text-xl'
            onClick={handleFormValidator}>{isSignIn ? "Sign In" : "Sign Up" }
        </button>
        <h1 onClick={toggleSignInSignUp} className='text-xl my-2 cursor-pointer'>{isSignIn ? "New to Netflix? Sign up now." : "Already an user ! Sign In" }</h1>
    </form>
    </div>
    </div>
  )
}

export default SignInPage