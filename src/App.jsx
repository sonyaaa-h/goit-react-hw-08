import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

// const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
        <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
