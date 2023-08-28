import "./Hamburger.css";

interface Props {
    onMouseDownHamburger: () => void;
};

export default function Hamburger({ onMouseDownHamburger }: Props) {
    return (
        <div className="hamburger">
            <div className="hamburger-inner" onMouseDown={onMouseDownHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};