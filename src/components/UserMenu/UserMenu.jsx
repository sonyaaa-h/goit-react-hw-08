import s from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div className={s.wrapper}>
            {user.name && <h3>Welcome, {user.name}</h3>} 
            <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        </div>
    );
};
export default UserMenu;
