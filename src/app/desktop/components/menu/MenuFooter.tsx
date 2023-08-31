import { useEffect, useState } from 'react';
import './MenuFooter.css';

interface Props {
    openMenu: boolean;
    onClickHamburger: () => void;
    currentLanguage: string;
    onClickLang: (lang: string) => void;
}

export default function MenuFooter({ openMenu, onClickHamburger, currentLanguage, onClickLang, }: Props) {
    const languagesDispositionChanges = () => {
        let listLanguages = ["fr", "it", "cn", "en", "es"];
        if (currentLanguage !== "fr" && currentLanguage !== "en") {
            let indexCurrentLanguage = listLanguages.indexOf(currentLanguage);
            [listLanguages[0], listLanguages[indexCurrentLanguage]] = [listLanguages[indexCurrentLanguage], listLanguages[0],];
        }
        return listLanguages;
    };

    const [languages, setLanguages] = useState(languagesDispositionChanges());

    useEffect(() => {
        if (!openMenu) {
        const timer = setTimeout(() => {
            setLanguages(languagesDispositionChanges());
        }, 900);

        return () => clearTimeout(timer);
        }
    }, [openMenu, currentLanguage]);

    const onClickLanguage = (lang: string) => {
        onClickLang(lang);
        onClickHamburger();
    };

    return (
        <div className="menu-footer">
            <div className="menu-footer-container">
                {languages.map((lang) => {
                    return (
                        <div key={lang} className={`menu-footer-lang ${lang === currentLanguage ? "selected" : ""}`} id={lang} onClick={() => onClickLanguage(lang)}>
                            <span>{lang.toUpperCase()}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
