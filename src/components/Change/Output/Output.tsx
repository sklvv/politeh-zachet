import React, { useEffect } from "react";
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setCurrFrom,
  setCurrTo,
  setResult,
  setSum,
} from "../../../store/changeSlice";
import getChangeValue from "../../../lib/getChangeValue";
import { setDeal } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
const Output = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currencyFrom, sum, result, currencyTo, profit } = useAppSelector(
    (state) => state.change
  );
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    console.log(e.target.value);
    dispatch(setCurrTo(e.target.value as string));
  };
  const handleSubmit = () => {
    if (!(currencyFrom && sum && currencyTo)) {
      alert("Проверьте введенные данные!");
    } else {
      const date = new Date().toDateString();
      dispatch(setCurrTo(""));
      dispatch(setCurrFrom(""));
      dispatch(setSum(""));
      dispatch(setResult(""));
      dispatch(setDeal({ currencyFrom, sum, currencyTo, date }));
      navigate("/history");
    }
  };
  useEffect(() => {
    if (currencyFrom && sum && currencyTo) {
      const val = getChangeValue(+currencyFrom, +currencyTo, +sum);
      dispatch(setResult(val.toString()));
    }
  }, [currencyFrom, sum, currencyTo]);

  return (
    <Box sx={styles.outputContainer}>
      <FormControl fullWidth>
        <InputLabel id="output-label">Выдача</InputLabel>
        <Select
          labelId="output-label"
          id="output"
          label="Выдача"
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
        value={result}
      />
      <Button
        variant="contained"
        sx={{ mt: "16px", width: "100%" }}
        onClick={handleSubmit}
      >
        Обменять
      </Button>
    </Box>
  );
};

export default Output;
