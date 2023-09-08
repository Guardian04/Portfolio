import { useTranslation } from 'react-i18next';
import "./Home.css";

interface Props {
    openMenu: boolean;
}

export default function Home({ openMenu }: Props) {
    const { t } = useTranslation();
    return (
        <section className={`home ${openMenu ? "active" : ""}`} id="home">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-head">
                        <img src="images/Me.png" alt="profile" />
                        <h1>{t("sloganHome")}</h1>
                    </div>
                </div>
            </div>  
        </section>
    );
};