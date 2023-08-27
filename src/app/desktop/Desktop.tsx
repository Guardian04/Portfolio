import { useState } from "react";
import "./Desktop.css";
import ProfileBar from "./components/profile/ProfileBar";
import Home from "./components/content/Home";
import Menu from "./components/menu/Menu";

export default function Desktop() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClickHamburger = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="app">
            <div className="app-container">
                <ProfileBar />
                <Home openMenu={openMenu} />
                <Menu onMouseDown={handleClickHamburger} openMenu={openMenu} />
            </div>
        </div>
    );
};