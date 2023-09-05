import './ProfileBar.css';
import ProfileHead from './ProfileHead';
import ProfileBody from './ProfileBody';
import ProfileFooter from './ProfileFooter';

interface Props {
    setSelectedMenu: (selectedMenu : string) => void;
};

export default function ProfileBar({ setSelectedMenu } : Props) {
    return (
        <div className={`profile`}>
            <ProfileHead onClick={setSelectedMenu} />
            <ProfileBody />
            <ProfileFooter />
        </div>
    );
};