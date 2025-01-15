import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services/api";

const initialState = {
  categoryList: [],
};

const name = "category";

export const fetchCategory = createAsyncThunk(
  `${name}/fetchCategory`,
  async () => {
    try {
      const response = await API.call().get(
        "wp/v2/categories?per_page=100&page=1&lang=vi"
      );
      return response.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ///
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
  },
});

const { reducer, actions } = slice;
export default reducer;
