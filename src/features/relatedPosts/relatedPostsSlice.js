import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedPosts: [],
};

//create fetchPost async thunk

export const fetchRelatedPosts = createAsyncThunk(
  "relatedPosts/fetchRelatedPosts",
  async ({ tags, limit, id }) => {
    const relatedPosts = await getRelatedPosts({ tags, limit, id });
    return relatedPosts;
  }
);

const relatedPostsSlice = createSlice({
  name: "relatedPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default relatedPostsSlice.reducer;
