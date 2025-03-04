import clsx from "clsx";
import { NavLink } from "react-router";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <div>
            <nav className={s.navigation}>
                    <NavLink className={buildLinkClass} to="/">
                        Home
                    </NavLink>
                    <NavLink className={buildLinkClass} to="/contacts">
                        Contacts
                    </NavLink>
            </nav>
        </div>
    );
};
export default Navigation;
