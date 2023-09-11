import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Home.css";

interface Props {
    actualMenu: string;
}

export default function Home({ actualMenu }: Props) {
    const { t } = useTranslation();
    const [menuSelected, setMenuSelected] = useState(false);
    const [contentStyle, setContentStyle] = useState("none");

    useEffect(() => {   
        if (actualMenu === "home") {
            setContentStyle("block");

            setTimeout(() => {
                setMenuSelected(true);
            }, 100);
        } else {
            setMenuSelected(false);
            setTimeout(() => {
                setContentStyle("none");
            }, 1000);
        }
    }, [actualMenu]);

    return (
        <section className={`home-content ${menuSelected ? "active" : ""}`} id="home-content" style={{display: contentStyle}}>
            <div className="home-head">
                <img src="images/Me.png" alt="profile" />
                <h1>{t("sloganHome")}</h1>
            </div>
        </section>
    );
};