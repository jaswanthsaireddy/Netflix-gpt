
import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeName:(state,action)=>{
            state.lang = action.payload;
        }
    }
});


export const {changeName} = configSlice.actions;
export default configSlice.reducer;