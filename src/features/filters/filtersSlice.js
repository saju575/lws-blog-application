import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  filter: "all",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    sortSeleted: (state, action) => {
      state.sort = action.payload;
    },
    filterSelected: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { sortSeleted, filterSelected } = searchSlice.actions;
