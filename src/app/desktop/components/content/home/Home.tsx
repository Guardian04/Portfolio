import "./Home.css";

interface Props {
    openMenu: boolean;
}

export default function Home({ openMenu }: Props) {
    return (
        <section className={`home ${openMenu ? "active" : ""}`} id="home">
            <div className="home-container">
                <h1>Home</h1>
            </div>  
        </section>
    );
};