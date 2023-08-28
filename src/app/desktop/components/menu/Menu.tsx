import "./Menu.css";
import Hamburger from "./Hamburger";
import MenuContent from "./MenuContent";

interface Props {
    onMouseDownHamburger: () => void;
    openMenu: boolean;
    onMouseDownMenu: (menu : string) => void;
    selectedMenu: string;
};

export default function Menu({ onMouseDownHamburger, openMenu, onMouseDownMenu, selectedMenu }: Props) {
    return (
        <div className={`menu ${openMenu ? "active" : ""}`}>
            <Hamburger onMouseDownHamburger={onMouseDownHamburger} />
            <MenuContent openMenu={openMenu} onMouseDownMenu={onMouseDownMenu} selectedMenu={selectedMenu} />
            <div className="footer"></div>
        </div>
    );
};