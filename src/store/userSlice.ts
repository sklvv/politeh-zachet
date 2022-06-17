import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  signInWithCredential,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, db } from "../lib/firebase";
import getCurrencyName from "../lib/getCurrencyName";
import { IAuth } from "../types/authTypes";
import { IOperation } from "../types/operationTypes";
import { IUser } from "../types/userTypes";

export const signIn = createAsyncThunk<IUser, IAuth, { rejectValue: string }>(
  "user/signIn",
  async ({ email, pass }) => {
    const getUser = await signInWithEmailAndPassword(auth, email, pass);
    const uid = getUser.user.uid;
    const getOperations = await get(ref(db, `users/${uid}`));
    const operations = getOperations.val();
    return { isAuth: true, uid, operations };
  }
);
export const userPersistence = createAsyncThunk<IUser, string>(
  "user/persistence",
  async (uid) => {
    const req = await get(ref(db, `users/${uid}`));
    return { uid, isAuth: true, operations: req.val() };
  }
);

export const logOut = createAsyncThunk<void, void>("user/logOut", async () => {
  signOut(auth);
});

const initialState: IUser = {
  isLoading: false,
  isAuth: false,
  uid: "",
  operations: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDeal: (state: IUser, action: PayloadAction<IOperation>) => {
      const op = action.payload;
      state.operations.unshift({
        currencyFrom: getCurrencyName(op.currencyFrom),
        currencyTo: getCurrencyName(op.currencyTo),
        date: op.date,
        sum: op.sum,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state: IUser, action) => {
      state.isLoading = false;
    });
    builder.addCase(
      signIn.fulfilled,
      (state: IUser, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.isAuth = action.payload.isAuth;
        state.uid = action.payload.uid;
      }
    );
    builder.addCase(userPersistence.pending, (state: IUser, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      userPersistence.fulfilled,
      (state: IUser, action: PayloadAction<IUser>) => {
        console.log("done");
        state.isLoading = false;
        state.isAuth = action.payload.isAuth;
        state.uid = action.payload.uid;
      }
    );
    builder.addCase(signIn.rejected, (state: IUser, action) => {
      state.isLoading = false;
      alert("Проверьте введенные данные!");
    });
    builder.addCase(logOut.rejected, (state: IUser, action) => {
      alert("Произошла ошибка!");
    });
    builder.addCase(logOut.fulfilled, (state: IUser, action) => {
      state.isAuth = false;
      state.uid = "";
      state.operations = [];
    });
  },
});
export const { setDeal } = userSlice.actions;
export default userSlice.reducer;
