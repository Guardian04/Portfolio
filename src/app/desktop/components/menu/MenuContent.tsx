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
            {openMenu ? 
                <div className="menu-items">
                    {menuElements.map((element, index) => {
                        return (
                            <div className={`menu-item ${element === selectedMenu ? "active" : ""}`} key={index} onClick={() => onMouseDownMenu(element)}>
                                <div className="menu-item-inner">
                                    <h3>{element.toUpperCase()}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div> : <div className="menu-items-selected">{selectedMenu.toUpperCase()}</div>
            }
        </div>
    );
};