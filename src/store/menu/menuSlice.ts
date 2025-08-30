import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  open: boolean;
}

const initialState: InitialState = {
  open: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (status) => {
      status.open = !status.open;
    },
  },
});

export const { toggle } = menuSlice.actions;
export default menuSlice.reducer;
