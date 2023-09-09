import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import "./Home.css";

interface Props {
    openMenu: boolean;
    selectedMenu: string;
}

export default function Home({ openMenu, selectedMenu}: Props) {
    const { t } = useTranslation();
    const [menuSelected, setMenuSelected] = useState(false);
    const [contentStyle, setContentStyle] = useState("none");

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

    useEffect(() => {   
        if (actualMenu === "home") {
            setContentStyle("block");

            setTimeout(() => {
                setMenuSelected(true);
            }, 100);
        } else {
            setMenuSelected(false);
            setTimeout(() => {
                setContentStyle("none");
            }, 1000);
        }
    }, [actualMenu]);

    return (
        <section className={`home ${openMenu ? "active" : ""}`}>
            <div className="home-container">
                <div className={`home-content ${menuSelected ? "active" : ""}`} id="home-content" style={{display: contentStyle}}>
                    <div className="home-head">
                        <img src="images/Me.png" alt="profile" />
                        <h1>{t("sloganHome")}</h1>
                    </div>
                </div>
            </div>  
        </section>
    );
};