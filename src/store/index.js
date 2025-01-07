import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./post/reducer"
import categoryReducer from "./category/reducer"
import tagReducer from "./tag/reducer"

const store = configureStore({
    reducer: {
        POST: postReducer,
        CATEGORY: categoryReducer,
        TAG: tagReducer,
    },
})

export default store