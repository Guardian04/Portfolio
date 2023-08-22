import { useState } from 'react';
import './MyProfile.css';
import Contact from './Contact';

interface status {
    status: boolean;
    message: string;
};

const availableStatus : status = {
    status: true,
    message: 'available'
};

const unavailableStatus : status = {
    status: false,
    message: 'unavailable'
};

const possibleStatus = [availableStatus, unavailableStatus];

export default function MyProfile() {
    const actualStatus = possibleStatus[0];
    const [isVisible, setIsVisible] = useState(false);

    const showInfoBulle = () => {
        setIsVisible(true);
    };

    const hideInfoBulle = () => {
        setIsVisible(false);
    };
    return (
        <div className="profile-container">
            <div className="profile-me">
                <div className="profile-img-status">
                    <img className="profile-img" src="images/Me.png" alt="profile image" />
                    <div className="profile-status" onMouseEnter={showInfoBulle} onMouseLeave={hideInfoBulle}>
                        <div className={`status-circle ${actualStatus.status ? "" : "reverse"}`}></div>
                        <div className={`status-message ${isVisible ? "active" : ""} ${actualStatus.status ? "" : "reverse"}`}>{actualStatus.message}</div>
                    </div>
                </div>
                <span className="profile-name">Claudio Reibaud</span>
                <span className="profile-title">Cybersecurity Student</span>
            </div>
            <div className="profile-description">
                <Contact />
            </div>
        </div>
    );
};