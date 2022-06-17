import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import Operation from "../../components/Operation/Operation";
import { useAppSelector } from "../../hooks";

const OperationsPage = () => {
  const { operations } = useAppSelector((state) => state.user);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "start" }}>
        <Typography variant="h5">История операций</Typography>
      </Box>
      <Divider />
      {operations.map((oper) => {
        return (
          <Operation
            date={oper.date}
            currTo={oper.currencyTo}
            currFrom={oper.currencyFrom}
            key={oper.date}
          />
        );
      })}
    </Box>
  );
};

export default OperationsPage;
