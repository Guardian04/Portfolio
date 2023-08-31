import Desktop from "./app/desktop/Desktop";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export default function App() {
    const { t } = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (language : string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <Desktop currentLanguage={currentLanguage} onClickLang={changeLanguage} />
        </>
    );
};