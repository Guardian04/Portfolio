import "./MenuContent.css";

interface Props {
    openMenu: boolean;
    onMouseDownMenu: (menu : string) => void;
    selectedMenu: string;
};

export default function MenuContent({ openMenu, onMouseDownMenu, selectedMenu } : Props) {
    const menuElements = ["Home", "History", "Portfolio", "Blog", "Contact"];
    return (
        <div className={`menu-content ${openMenu ? "active" : ""}`}>
            <div className={`menu-items-selected ${openMenu ? "active" : ""}`}>{selectedMenu.toUpperCase()}</div>
            <div className="menu-items">
                {menuElements.map((element, index) => {
                    return (
                        <div key={index}className={`menu-item ${element === selectedMenu ? "active" : ""}`} onClick={() => onMouseDownMenu(element)} style={{transitionDelay: `${0.1 * index}s`}}>
                            <div className="menu-item-inner">
                                <h3>{element.toUpperCase()}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};