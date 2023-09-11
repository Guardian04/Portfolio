import { useState } from "react";
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const [openMenu, setOpenMenu] = useState(false);

    const handleClickHamburger = () => {
        setOpenMenu(!openMenu);
    };

    const handleSelectMenu = (menu : string) => {
        setSelectedMenu(menu);
        setOpenMenu(!openMenu);
    };

    const initialMenu = () => {
        const menuItems = [
            "home", 
            "about", 
            "portfolio", 
            "hobbies", 
            "contact"
        ];
        
        const menuElements = menuItems.map(item => t(`menu.${item}`));
        const index = menuElements.indexOf(selectedMenu);
        return menuItems[index];
    };

    const actualMenu = initialMenu();

    return (
        <div className="app">
            <div className="app-container">
                <ProfileBar setSelectedMenu={setSelectedMenu} />
                <div className={`main-container ${openMenu ? "active" : ""}`}>
                    <div className="main-content">
                        <Home actualMenu={actualMenu}/>
                    </div>
                </div>
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