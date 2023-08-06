import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "desc",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setSort, setPage } = filterSlice.actions;

export default filterSlice.reducer;
