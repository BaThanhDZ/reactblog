import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./postSlice"
import categoryReducer from "./categorySlice"
import tagReducer from "./tagsSlice"
import searchReducer from "./searchSlice"
import menuReducer from "./menuSlice"

const store = configureStore({
    reducer: {
        POST: postReducer,
        CATEGORY: categoryReducer,
        TAG: tagReducer,
        SEARCH: searchReducer,
        MENU: menuReducer,
    },
})

export default store