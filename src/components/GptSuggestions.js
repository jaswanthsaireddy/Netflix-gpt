import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestions = () => {
  const {moviesListGemini,tmdbMovieResults} = useSelector((store) => store.gpt);
  if(!moviesListGemini) return null;
  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
      <div>
        {moviesListGemini.map((movie,index) =>
           <MovieList 
            key={movie} 
            title={movie} 
            movies={tmdbMovieResults[index]}
          />)}
        
      </div>
    </div>
  )
}

export default GptSuggestions