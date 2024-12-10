import { createSlice } from "@reduxjs/toolkit";

interface adminState {
    isMenuFlod:boolean
}


const initialState: adminState = {
    isMenuFlod:false
}

const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers: {
        setIsMenuFlod(state,action){
            state.isMenuFlod = action.payload;
        }
    }
})

export const {
    setIsMenuFlod
} = adminSlice.actions;

export default adminSlice.reducer;