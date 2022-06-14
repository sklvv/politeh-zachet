import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { auth } from "../../lib/firebase";
import { setEmail, setPass } from "../../store/authSlice";
import { signIn } from "../../store/userSlice";
import { styles } from "./styles";
const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, pass, error } = useAppSelector((state) => state.auth);
  const { isAuth } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  const handleSubmit = async () => {
    await dispatch(signIn({ email, pass }));
  };
  // const handleSubmit = () => {
  //   signInWithEmailAndPassword(auth, email, pass);
  // };
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h5">Авторизация</Typography>
      </Box>
      {error && <Box>123</Box>}
      <Box>
        <Box>
          <TextField
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
            type="email"
            sx={{ width: "100%" }}
            placeholder="Email"
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
          />
        </Box>
        <Box>
          <TextField
            value={pass}
            onChange={(e) => dispatch(setPass(e.target.value))}
            type="password"
            sx={{ width: "100%", mt: "8px" }}
            placeholder="Пароль"
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ height: "56px" }}
        onClick={handleSubmit}
      >
        Войти
      </Button>
    </Box>
  );
};

export default AuthForm;
