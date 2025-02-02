import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className= "  w-screen aspect-video absolute pt-[16%] px-24 text-white bg-gradient-to-tr from-black">
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className=' py-6 w-1/3'>{overview}</p>
      <div>
        <button className=' bg-white text-black font-bold py-2 px-14 text-2xl rounded-lg hover:opacity-70'>Play</button>
        <button className=' bg-gray-700 font-bold py-2 px-9 text-2xl ml-3 rounded-lg  text-white opacity-70 hover:opacity-90'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;