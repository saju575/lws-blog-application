import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, setLikes, setSaved } from "./postAPI";

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

export const setPostLikes = createAsyncThunk(
  "post/setLike",
  async ({ id, likes }) => {
    const updatePost = await setLikes({
      id,
      likes,
    });
    return updatePost;
  }
);

export const setPostSaved = createAsyncThunk(
  "post/setPostSaved",
  async ({ id, isSaved }) => {
    const updatePost = await setSaved({
      id,
      isSaved,
    });
    return updatePost;
  }
);

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
      })
      .addCase(setPostLikes.fulfilled, (state, action) => {
        state.post.likes = action.payload.likes;
      })
      .addCase(setPostSaved.fulfilled, (state, action) => {
        state.post.isSaved = action.payload.isSaved;
      });
  },
});

export default postSlice.reducer;
