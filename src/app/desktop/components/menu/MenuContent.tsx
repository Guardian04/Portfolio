import { useTranslation } from 'react-i18next';
import "./MenuContent.css";

interface Props {
    openMenu: boolean;
    onClickMenu: (menu : string) => void;
    selectedMenu: string;
};

export default function MenuContent({ openMenu, onClickMenu, selectedMenu } : Props) {
    const { t } = useTranslation();
    const menuItems = ['home', 'about', 'portfolio', 'hobbies', 'contact'];
    const menuElements = menuItems.map(item => t(`menu.${item}`));
    
    return (
        <div className={`menu-content ${openMenu ? "active" : ""}`}>
            <div className={`menu-items-selected ${openMenu ? "active" : ""}`}>{selectedMenu.toUpperCase()}</div>
            <div className="menu-items">
                {menuElements.map((element, index) => {
                    return (
                        <div key={index}className={`menu-item ${element === selectedMenu ? "active" : ""}`} onClick={() => onClickMenu(element)} style={{transitionDelay: `${0.1 * index}s`}}>
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