import './ProfileBar.css';
import ProfileHead from './ProfileHead';
import ProfileBody from './ProfileBody';
import ProfileFooter from './ProfileFooter';

export default function ProfileBar() {
    return (
        <div className={`profile`}>
            <ProfileHead />
            <ProfileBody />
            <ProfileFooter />
        </div>
    );
};