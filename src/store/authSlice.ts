import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth } from "../types/authTypes";

const initialState: IAuth = {
  email: "",
  pass: "",
  error: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state: IAuth, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPass: (state: IAuth, action: PayloadAction<string>) => {
      state.pass = action.payload;
    },
  },
});
export const { setEmail, setPass } = authSlice.actions;
export default authSlice.reducer;
