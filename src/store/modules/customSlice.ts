import { createSlice } from "@reduxjs/toolkit";

import { ThemeTypes } from "@/global/enums";


const { Dark, Light } = ThemeTypes;


interface customState {
    theme: ThemeTypes
}


const initialState: customState = {
    theme: Light
}

const customSlice = createSlice({
    name:'custom',
    initialState,
    reducers: {
        switchTheme(state){
            if(state.theme === Light) {
                state.theme = Dark;
                return;
            }
            state.theme = Light;
        }
    }
})

export const {
    switchTheme,
} = customSlice.actions;

export default customSlice.reducer;