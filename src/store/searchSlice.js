import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services/api";

const initialState = {
    valueSearch: []
}

const name = "search";

export const fetchSearch = createAsyncThunk(
    `${name}/fetchSearch`,
    async (value) => {
        try {
            const response = await API.call().get(`wp/v2/posts?per_page=100&page=1&search=${value}&lang=vi`);
            return response.data;
        } catch (err) {
            console.log("err", err);
        }
    }
)

const slice = createSlice({
    name,
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.valueSearch = action.payload;
            
        })
    }
})

const { reducer, actions} = slice;
export default reducer