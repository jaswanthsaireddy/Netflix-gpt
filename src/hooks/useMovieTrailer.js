import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movies.trailerVideo)
    
    const getvidoesForMovie = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-IN`,API_OPTIONS);
        const json = await data.json();

        const trailerVideo = json.results.filter((video => video.type === "Trailer"));

        dispatch(addTrailerVideo(trailerVideo[0]));
    };

    useEffect(() => {
        !movieTrailer && getvidoesForMovie();
        
    },[])
}

export default useMovieTrailer;