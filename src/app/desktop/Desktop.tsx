import "./Desktop.css";
import ProfileBar from "./components/profile/ProfileBar";

export default function Desktop() {
    return (
        <div className="app">
            <div className="app-container">
                <ProfileBar />
            </div>
        </div>
    );
};