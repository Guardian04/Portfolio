import "./Menu.css";
import Hamburger from "./Hamburger";
import MenuContent from "./MenuContent";
import MenuFooter from "./MenuFooter";

interface Props {
    openMenu: boolean;
    onClickHamburger: () => void;
    selectedMenu: string;
    onClickMenu: (menu : string) => void;
    currentLanguage: string;
    onClickLang: (lang : string) => void;
};

export default function Menu({ openMenu, onClickHamburger, selectedMenu, onClickMenu, currentLanguage, onClickLang}: Props) {
    return (
        <div className={`menu ${openMenu ? "active" : ""}`}>
            <Hamburger onClickHamburger={onClickHamburger} />
            <MenuContent openMenu={openMenu} onClickMenu={onClickMenu} selectedMenu={selectedMenu} />
            <MenuFooter currentLanguage={currentLanguage} onClickLang={onClickLang} />
        </div>
    );
};