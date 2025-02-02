import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
      <div className=' relative mt-0 md:-mt-[22rem] z-20 pl-4 md:pl-24'>
        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies = {movies.upcomingMovies}/>
        <MovieList title={"Top Rated"} movies = {movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies = {movies.popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer