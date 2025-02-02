import { createSlice } from "@reduxjs/toolkit";


const GptSlice  = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        tmdbMovieResults:null,
        moviesListGemini:null
    },
    reducers:{
        toggleSearchView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSuggestedMovieResult: (state,action) => {
            const {moviesListGemini,tmdbMovieResults} = action.payload;
            state.moviesListGemini = moviesListGemini;
            state.tmdbMovieResults = tmdbMovieResults;   
        }
    }
})

export const {toggleSearchView,addGptSuggestedMovieResult} = GptSlice.actions;
export default GptSlice.reducer;