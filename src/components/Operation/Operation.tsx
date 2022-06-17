import { ArrowRight, ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import getCurrencyName from "../../lib/getCurrencyName";
import { styles } from "./styles";
interface IProps {
  date: string;
  currFrom: string;
  currTo: string;
}
const Operation: React.FC<IProps> = ({ date, currFrom, currTo }) => {
  const from = getCurrencyName(currFrom);
  const to = getCurrencyName(currTo);
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography> {date}</Typography>
      </Box>
      <Box sx={styles.currBox}>
        <Typography>{currFrom}</Typography>
        <ArrowRightAlt color="primary" />
        <Typography>{currTo}</Typography>
      </Box>
    </Box>
  );
};

export default Operation;
