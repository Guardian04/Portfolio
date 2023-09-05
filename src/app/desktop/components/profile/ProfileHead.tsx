import "./ProfileHead.css"

interface Props {
    onClick: (selectedMenu : string) => void;
};

export default function ProfileHead({ onClick } : Props) {
    return (
        <div className="profile-head">
            <div className="profile-head-img">
                <img src="images/Me.png" alt="Me" />
                <span id="first"></span>
                <span id="second"></span>
                <span id="third"></span>
            </div>
            <div className="profile-name" onClick={() => onClick("Home")}>
                <h2>Claudio Reibaud</h2>
            </div>
            <div className="profile-job">
                <h3>Cybersecurity Student</h3>
            </div>
        </div>
    );
};