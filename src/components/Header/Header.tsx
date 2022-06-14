import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { AccountBalance, Person } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Loader from "../Loader/Loader";
import { logOut } from "../../store/userSlice";
import MobileActions from "./MobileActions/MobileActions";
import DescActions from "./DescActions/DescActions";

const Header = () => {
  const { isAuth, isLoading } = useAppSelector((state) => state.user);

  return (
    <>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar>
          <Box sx={styles.container}>
            <Box sx={styles.logoContainer}>
              <IconButton color="inherit">
                <AccountBalance />
              </IconButton>
              <Typography>БыстроVалюта</Typography>
            </Box>
            {isAuth && (
              <>
                <MobileActions />
                <DescActions />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          sx={{
            mt: "24px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default Header;
