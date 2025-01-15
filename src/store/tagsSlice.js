import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../services/api";

const initialState = {
    tagsList: []
}

const name = "tags";

export const fetchTags = createAsyncThunk(
    `${name}/fetchTags`,
    async (id) => {
        try {
            const response = await API.call().get(`wp/v2/tags?per_page=3&page=1&lang=vi&post=${id}`);
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
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tagsList = action.payload;
        })
    }
})

const {reducer, actions} = slice;
export default reducer