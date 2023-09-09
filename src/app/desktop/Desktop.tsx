import { useState } from "react";
import "./Desktop.css";
import ProfileBar from "./components/profile/ProfileBar";
import Home from "./components/content/home/Home";
import Menu from "./components/menu/Menu";

interface Props {
    currentLanguage: string;
    onClickLang: (lang : string) => void;
    selectedMenu: string;
    setSelectedMenu: (selectedMenu : string) => void;
};

export default function Desktop({ currentLanguage, onClickLang, selectedMenu, setSelectedMenu }: Props) {
    const [openMenu, setOpenMenu] = useState(false);

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
                <ProfileBar setSelectedMenu={setSelectedMenu} />
                <Home openMenu={openMenu} selectedMenu={selectedMenu}/>
                <Menu 
                    onClickHamburger={handleClickHamburger} 
                    openMenu={openMenu} 
                    onClickMenu={handleSelectMenu} 
                    selectedMenu={selectedMenu} 
                    currentLanguage={currentLanguage} 
                    onClickLang={onClickLang} 
                />
            </div>
        </div>
    );
};