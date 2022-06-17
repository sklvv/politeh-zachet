import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import changeSlice from "./changeSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    change: changeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
