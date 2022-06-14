import React from "react";
import { styles } from "./styles";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { useAppDispatch } from "../../../hooks";
import { logOut } from "../../../store/userSlice";
const DescActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await dispatch(logOut());
    navigate("/auth");
  };
  return (
    <Box sx={styles.actionsContainer}>
      <Button>
        <NavLink to="/" style={styles.link}>
          <Typography sx={styles.text}>Обмен</Typography>
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/history" style={styles.link}>
          <Typography sx={styles.text}>История операций</Typography>
        </NavLink>
      </Button>
      <IconButton color="inherit" onClick={handleLogOut}>
        <Logout />
      </IconButton>
    </Box>
  );
};

export default DescActions;
