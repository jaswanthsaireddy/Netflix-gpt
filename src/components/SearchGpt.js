import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptSuggestedMovieResult } from '../utils/GptSlice'


const SearchGpt = () => {

  const dispatch = useDispatch();

  const selectedLanguage = useSelector(store => store.config.lang)
  const searchText = useRef(null);

  const searchMovieTMDB = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json()
    return json.results;
  }

  const handleGptSearchClick = async ()=> {
    console.log(searchText.current.value)

    const geminiQuery = "Act as a movie recommendation system and some suggest 5 movies for the query" + searchText.current.value +"only give the names of the movies, comma seperated and in the format of the example result given ahead. Indiana Jones,Die Hard,Dhookudu,Parugu,Pushpa"

    //Gemini AI
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const Geminiresult = await model.generateContent(geminiQuery);
    console.log(Geminiresult.response.text());

    //converting text into array
    const moviesListGemini = Geminiresult.response.text().split(",");
    console.log(moviesListGemini);

    //For each movie lets search in TMDB API
    const promiseArray = moviesListGemini.map(movie => searchMovieTMDB(movie)) 

    const tmdbMovieResults = await Promise.all(promiseArray);

    console.log(tmdbMovieResults)

      dispatch(addGptSuggestedMovieResult({moviesListGemini:moviesListGemini,tmdbMovieResults:tmdbMovieResults}))
  
  }


  return (
    
    <div className='flex justify-center pt-[8%]'>
     
        <form 
        className='m-2 p-2 bg-black w-[60%] rounded-lg'
        onSubmit={(e) => e.preventDefault()}>
            <input className='p-4 m-4 w-[70%]'
                   type='text' 
                   placeholder={lang[selectedLanguage]?.gptPlaceholderSearch}
                   ref={searchText}
            />
            <button className='px-5 py-3 m-6 bg-red-800 text-white w-[20%] font-bold' 
              onClick={handleGptSearchClick}>
              {lang[selectedLanguage].search}
            </button>
        </form>
        
    </div>
    
  )
}

export default SearchGpt