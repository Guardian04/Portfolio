import "./About.css";

interface Props {
    openMenu: boolean;
    selectedMenu: string;
}

export default function about({ openMenu, selectedMenu }: Props) {
    return (
        <section className={`about ${openMenu ? "active" : ""}`} id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-head">
                        hello
                    </div>
                </div>
            </div>  
        </section>
    );
};