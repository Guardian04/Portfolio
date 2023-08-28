import { useState } from "react";
import "./Desktop.css";
import ProfileBar from "./components/profile/ProfileBar";
import Home from "./components/content/home/Home";
import Menu from "./components/menu/Menu";

export default function Desktop() {
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("Home");

    const handleClickHamburger = () => {
        setOpenMenu(!openMenu);
    };

    const handleSelectMenu = (menu : string) => {
        setSelectedMenu(menu);
        setOpenMenu(!openMenu);
    };

    return (
        <div className="app">
            <div className="app-container">
                <ProfileBar />
                <Home openMenu={openMenu} />
                <Menu onMouseDownHamburger={handleClickHamburger} openMenu={openMenu} onMouseDownMenu={handleSelectMenu} selectedMenu={selectedMenu} />
            </div>
        </div>
    );
};