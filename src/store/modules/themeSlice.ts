import { ThemeTypes } from "@/global/enums";
import { createSlice } from "@reduxjs/toolkit";


const { Light, Dark } = ThemeTypes;

interface themeState {
    type: ThemeTypes
}

const initialState: themeState = {
    type:Light
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        switchType(state){
            if(state.type === Light) {
                state.type = Dark;
                return;
            }

            state.type = Light;
        }
    }
});

export const {
    switchType,
} = themeSlice.actions;


export default themeSlice.reducer;
