import clsx from "clsx";
import { NavLink } from "react-router";
import s from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
    return (
        <nav className={s.navigation}>
            <NavLink className={buildLinkClass} to="/register">Register</NavLink>
            <NavLink className={buildLinkClass} to="/login">Login</NavLink>
        </nav>
    );
};
export default AuthNav;
