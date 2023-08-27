import "./Menu.css";
import Hamburger from "./Hamburger";

interface Props {
    onMouseDown: () => void;
    openMenu: boolean;
};

export default function Menu({ onMouseDown, openMenu }: Props) {
    return (
        <div className={`menu ${openMenu ? "active" : ""}`}>
            <Hamburger onMouseDown={onMouseDown} />
        </div>
    );
};