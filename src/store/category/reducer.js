import { createReducer } from "@reduxjs/toolkit";
import { actGetCategory } from "./actions";

const initialState = {
    list: [],
};

const reducer = createReducer(initialState, (builer) => {
    builer.addCase(actGetCategory, (state, action) => {
        state.list = action.payload
    })
});

export default reducer;
