import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services/api";

const initialState = {
  menuItem: [],
  nickName: "Tài khoản",
};

const name = "menu";

export const fetchMenu = createAsyncThunk(`${name}/fethMenu`, async () => {
  try {
    const response = await API.call().get("menus/v1/menus/main-menu-vi");
    return response.data.items
  } catch (err) {
    console.log("err", err);
  }
});

export const fetchNickname = createAsyncThunk(`${name}/fetchNickname`, async (token) => {
    const headers = { 'Authorization': `Bearer ${token}` };
    
    try {
      const response = await API.call().get("wp/v2/users/me", {headers});
      return response.data.name;
    } catch (err) {
      console.log("err", err);
    }
  });

const slice = createSlice({
  name,
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.menuItem = action.payload;
    });
    builder.addCase(fetchNickname.fulfilled, (state, action) => {
        state.nickName = action.payload;
    });
  },
});

const { reducer, actions } = slice;

export default reducer;
