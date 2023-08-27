import "./Hamburger.css";

interface Props {
    onMouseDown: () => void;
};

export default function Hamburger({ onMouseDown }: Props) {
    return (
        <div className="hamburger">
            <div className="hamburger-inner" onMouseDown={onMouseDown}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};