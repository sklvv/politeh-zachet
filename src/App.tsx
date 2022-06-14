import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import OperationsPage from "./pages/HistoryPage/OperationsPage";
import AuthPage from "./pages/Auth/AuthPage";
import ChangePage from "./pages/ChangePage/ChangePage";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./hooks";
import { userPersistence } from "./store/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import PrivateRoute from "./hoc/PrivateRoute";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "./components/Loader/Loader";
const App = () => {
  const dispatch = useAppDispatch();

  const [user, loading] = useAuthState(auth);
  if (user) {
    dispatch(userPersistence(user.uid));
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <OperationsPage />
              </PrivateRoute>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            index
            element={
              <PrivateRoute>
                <ChangePage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
