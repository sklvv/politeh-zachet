import React, { useEffect } from "react";
import Income from "./Income/Income";
import Output from "./Output/Output";
import { Box } from "@mui/material";
import { styles } from "./styles";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setCurrFrom,
  setCurrTo,
  setSum,
  setResult,
} from "../../store/changeSlice";
const ChangeForm = () => {
  const { operations } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {}, [operations]);
  return (
    <Box sx={styles.container}>
      <Income />
      <Box>
        <ArrowCircleRightOutlined
          color="primary"
          sx={{ width: "64px", height: "64px" }}
        />
      </Box>
      <Output />
    </Box>
  );
};

export default ChangeForm;
