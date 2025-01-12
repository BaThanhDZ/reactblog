import { createReducer } from "@reduxjs/toolkit"
import { SEARCH_VALUE } from "./actions"

const initialState = {
    valueSearch: "",
}

const reducer =  createReducer(initialState, (builder) => {
    builder.addCase(SEARCH_VALUE, (state, action) => {
        state.valueSearch = action.payload;
    })
})

export default reducer;