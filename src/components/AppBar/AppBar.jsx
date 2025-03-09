import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav />}
        {/* <AuthNav /> */}
    </header>;
};
export default AppBar;
