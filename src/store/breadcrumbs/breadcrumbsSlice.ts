import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  middle: null | string;
  last: null | string;
};

const initialState: InitialState = {
  middle: null,
  last: null,
};

const breadcrumbsSlice = createSlice({
  name: "breadcrumbsSlice",
  initialState,
  reducers: {
    setMiddle: (breadcrumbs, action: PayloadAction<string>) => {
      breadcrumbs.middle = action.payload;
    },
    setLast: (breadcrumbs, action: PayloadAction<string>) => {
      breadcrumbs.last = action.payload;
    },
  },
});

export const { setMiddle, setLast } = breadcrumbsSlice.actions;
export default breadcrumbsSlice.reducer;
