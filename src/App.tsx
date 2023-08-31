import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Desktop from "./app/desktop/Desktop";

export default function App() {
    const { t } = useTranslation();
    const [currentLanguage, setLanguages] = useState(i18n.language);
    const [selectedMenu, setSelectedMenu] = useState(t("menu.home"));

    const changeLang = (language : string) => {
        const menuItems = ["home", "about", "portfolio", "hobbies", "contact"];
        const menuElements = menuItems.map(item => t(`menu.${item}`));
        const index = menuElements.indexOf(selectedMenu);
        i18n.changeLanguage(language);
        setLanguages(language);
        setSelectedMenu(t(`menu.${menuItems[index]}`));
    };

    return (
        <>
            <Desktop currentLanguage={currentLanguage} onClickLang={changeLang} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        </>
    );
};