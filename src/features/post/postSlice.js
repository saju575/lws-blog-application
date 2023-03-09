import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  post: {},
};

//create fetchPost async thunk

export const fetchPost = createAsyncThunk("post/fetchPost", async ({ id }) => {
  const post = await getPost({ id });
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.post = {};
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
