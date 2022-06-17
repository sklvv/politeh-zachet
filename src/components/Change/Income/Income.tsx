import React from "react";
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setCurrFrom, setSum } from "../../../store/changeSlice";
const Income = () => {
  const dispatch = useAppDispatch();
  const { currencyFrom } = useAppSelector((state) => state.change);
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    console.log(e.target.value);
    dispatch(setCurrFrom(e.target.value as string));
  };
  const handleSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSum(e.target.value));
  };
  return (
    <Box sx={styles.incomeContainer}>
      <FormControl fullWidth>
        <InputLabel id="income-label">Прием</InputLabel>
        <Select
          labelId="income-label"
          id="income"
          label="Прием"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={1}>Доллар</MenuItem>
          <MenuItem value={2}>Евро</MenuItem>
          <MenuItem value={3}>Рубль</MenuItem>
          <MenuItem value={4}>Юань</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Сумма"
        variant="outlined"
        sx={{ mt: "16px" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSum(e)}
      />
    </Box>
  );
};

export default Income;
