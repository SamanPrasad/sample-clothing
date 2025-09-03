import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  status: boolean;
};

const initialState: InitialState = {
  status: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user) => {
      user.status = true;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
