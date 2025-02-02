import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className= "  w-screen aspect-video absolute pt-[10%] md:pt-[16%] px-4 md:px-24 text-white bg-gradient-to-tr from-black">
      <h1 className=' text-lg md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:block py-6 w-1/3'>{overview}</p>
      <div className='flex my-2 md:my-0'>
        <button className=' bg-white text-black font-bold py-1 md:py-2 px-4 md:px-14 text-lg md:text-2xl rounded-lg hover:opacity-70'>Play</button>
        <button className=' bg-gray-700 hidden md:block font-bold py-2 px-9 text-2xl ml-3 rounded-lg  text-white opacity-70 hover:opacity-90'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;