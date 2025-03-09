import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
