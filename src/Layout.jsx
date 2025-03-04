import { Outlet } from "react-router";
import AppBar from "./components/AppBar/AppBar";

const Layout = () => {
    return (
        <div>
            <AppBar />
            <Outlet />
        </div>
    );
};
export default Layout;
