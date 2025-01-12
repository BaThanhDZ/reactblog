import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./post/reducer"
import categoryReducer from "./category/reducer"
import tagReducer from "./tag/reducer"
import searchReducer from "./search/reducer"

const store = configureStore({
    reducer: {
        POST: postReducer,
        CATEGORY: categoryReducer,
        TAG: tagReducer,
        SEARCH: searchReducer,
    },
})

export default store