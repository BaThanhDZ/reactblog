import { createReducer } from "@reduxjs/toolkit";
import { actGetSlug, actPostGeneral, actPostNew, actPostPoPular, actPostRelated } from "./actions";

const initialState = {
    postsNew: [],
    postsPopular: [],
    postsGeneral: [],
    // postDetail: null,
    slugPost: [],
    postRelated: []
    
};

const reducer = createReducer(initialState, (builer) => {
    builer.addCase(actPostNew, (state, action) => {
        state.postsNew = action.payload;
    })
    builer.addCase(actPostPoPular, (state, action) => {
        state.postsPopular = action.payload
    })
    builer.addCase(actPostGeneral, (state, action) => {
        state.postsGeneral = action.payload
    })
    builer.addCase(actGetSlug, (state, action) => {
        state.slugPost = action.payload[0];
    })
    builer.addCase(actPostRelated, (state, action) => {
        state.postRelated = action.payload;
        
    })
});

export default reducer;
