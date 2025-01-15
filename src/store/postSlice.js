import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services/api";

const initialState = {
  postsNew: [],
  postsPopular: [],
  postsGeneral: [],
  slugPost: null,
  postRelated: [],
  totalPageGeneral: null,
};

const name = "posts";

export const fetchLatestPosts = createAsyncThunk(
  `${name}/fetchLatestPosts`, // action type
  async () => {
    try {
      const response = await API.call().get(
        "wp/v2/posts?per_page=3&page=1&lang=vi"
      );
      return response.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

// export const fetchDetailPost = createAsyncThunk(
//   `${name}/fetchDetailPost`, // action type
//   async (slug) => {
//     try {
//       const response = await API.call().get(`wp/v2/posts?slug=${slug}`);
//       const post = response.data[0];
//       const responseRelated = await API.call().get(
//         `wp/v2/posts?per_page=3&page=1&author=${post.author}&lang=vi&exclude=${post.id}`
//       );
//       const data = {
//         slugPost: post,
//         postRelated: responseRelated.data,
//       };
//       return data;
//     } catch (err) {
//       console.log("err", err);
//     }
//   }
// );

export const fetchPopularPost = createAsyncThunk(
  `${name}/fetchPopularPost`,
  async () => {
    try {
      const response = await API.call().get(
        "wp/v2/posts?per_page=3&page=1&lang=vi&orderby=post_views"
      );
      return response.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchGeneralPost = createAsyncThunk(
  `${name}/fetchGeneralPost`,
  async (pageNumber) => {
    try {
      const response = await API.call().get(
        `wp/v2/posts?per_page=2&page=${pageNumber}&lang=vi`
      );
      const totalPage = response.headers[`x-wp-totalpages`];
      const data = {
        postsGeneral: response.data,
        totalPageGeneral: totalPage,
      };
      
      return data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchDetailPost = createAsyncThunk(
  `${name}/fetchDetailPost`, // action type
  async (slug) => {
    try {
      const response = await API.call().get(`wp/v2/posts?slug=${slug}`);
      return response.data[0];
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchRelatedPosts = createAsyncThunk(
  `${name}/fetchRelatedPosts`, // action type
  async (params) => {
    try {
      const response = await API.call().get(
        `wp/v2/posts?per_page=3&page=1&author=${params.author}&lang=vi&exclude=${params.id}`
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
    // actPostNew(state, action) {
    // } posts/actPostNew
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLatestPosts.fulfilled, (state, action) => {
      state.postsNew = action.payload;
    });
    builder.addCase(fetchPopularPost.fulfilled, (state, action) => {
      state.postsPopular = action.payload;
    });
    builder.addCase(fetchGeneralPost.fulfilled, (state, action) => {
      state.postsGeneral = [
        ...state.postsGeneral,
        ...action.payload.postsGeneral,
      ];
      state.totalPageGeneral = action.payload.totalPageGeneral;
      
    });
    builder.addCase(fetchDetailPost.fulfilled, (state, action) => {
      state.slugPost = action.payload;
    });
    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.postRelated = action.payload;
    });
  },
});

const { reducer, actions } = slice;

export default reducer;
