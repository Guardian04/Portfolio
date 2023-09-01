import "./ProfileHead.css"

export default function ProfileHead() {
    return (
        <div className="profile-head">
            <div className="profile-head-img">
                <img src="images/Me.png" alt="Me" />
                <span id="first"></span>
                <span id="second"></span>
                <span id="third"></span>
            </div>
        </div>
    );
};