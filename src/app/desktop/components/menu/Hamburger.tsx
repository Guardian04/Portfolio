import "./Hamburger.css";

interface Props {
    onClickHamburger: () => void;
};

export default function Hamburger({ onClickHamburger }: Props) {
    return (
        <div className="hamburger">
            <div className="hamburger-inner" onClick={onClickHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};