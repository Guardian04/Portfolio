import "./MenuFooter.css";

interface Props {
    currentLanguage: string;
    onClickLang: (lang : string) => void;
};

export default function MenuFooter({ currentLanguage, onClickLang } : Props) {
    const languages = ["fr", "it", "cn", "en", "es"];
    return (
        <div className="menu-footer">
            <div className="menu-footer-container">
                {languages.map((lang) => {
                    return (
                        <div key={lang} className={`menu-footer-lang ${lang === currentLanguage ? "selected" : ""}`} id={lang} onClick={() => onClickLang(lang)}>
                            <span>{lang.toUpperCase()}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};