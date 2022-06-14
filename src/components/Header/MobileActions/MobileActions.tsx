import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import { MenuRounded } from "@mui/icons-material";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../store/userSlice";

const MobileActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = () => {
    setAnchorEl(null);
    navigate("/");
  };
  const handleHistory = () => {
    setAnchorEl(null);
    navigate("/history");
  };
  const handleLogOut = async () => {
    await dispatch(logOut());
    setAnchorEl(null);
    navigate("/auth");
  };
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        <MenuRounded />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleChange}>Обмен</MenuItem>
        <MenuItem onClick={handleHistory}>История</MenuItem>
        <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileActions;
