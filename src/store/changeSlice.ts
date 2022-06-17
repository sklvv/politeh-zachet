import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOperation } from "../types/operationTypes";
const initialState: IOperation = {
  currencyFrom: "",
  sum: "",
  currencyTo: "",
  result: "",
  date: "",
  profit: 0,
};
export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    setCurrFrom: (state: IOperation, action: PayloadAction<string>) => {
      state.currencyFrom = action.payload;
    },
    setCurrTo: (state: IOperation, action: PayloadAction<string>) => {
      state.currencyTo = action.payload;
    },
    setSum: (state: IOperation, action: PayloadAction<string>) => {
      state.sum = action.payload;
    },
    setResult: (state: IOperation, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
  },
});
export const { setCurrFrom, setCurrTo, setSum, setResult } =
  changeSlice.actions;
export default changeSlice.reducer;
