import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  
  const trailerVideoData = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video overflow-hidden'
          src={"https://www.youtube.com/embed/"+trailerVideoData?.key+"?&autoplay=1&mute=1&loop=3"}
          title="YouTube video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground