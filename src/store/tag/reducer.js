import { createReducer } from "@reduxjs/toolkit"
import { actGetTag } from "./actions"

const initialState = {
    tagList: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(actGetTag, (state, action) => {
        state.tagList = action.payload;
    })
})

export default reducer;