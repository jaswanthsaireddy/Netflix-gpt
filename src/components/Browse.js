import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  const gptStatus = useSelector(store=> store.gpt.showGptSearch)
  //calling custom hook 
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {
        gptStatus ? (<GptSearch/>) :
        (
          <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
        )
         
      }
      
      {/*
        MainContainer
          VideoBackground
          VideoTitle
        RecommendationsContainer
          movieLists * n
            movieCards * n
    */}
    </div>
    

  )
}

export default Browse;