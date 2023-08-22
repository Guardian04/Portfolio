import './Contact.css';

interface Contact {
    adress: string,
    email: string,
    phone: string,
    website: string,
    [key: string]: string;
};

const contacts : Contact = {
    adress: '69007 Lyon, France',
    email: 'claudio.reibaud@gmail.com',
    phone: '+33 7 81 74 16 18',
    website: 'Claudio Reibaud | Portfolio',
};

const constactsLinks: Contact = {
    adress: 'https://www.google.com/maps/place/69007+Lyon/@45.7321138,4.7981521,13z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea246efbf2fb:0x1c08ab2e41e47c70!8m2!3d45.7304251!4d4.8399378!16s%2Fm%2F0w_zsjz?entry=ttu',
    email: 'claudio.reibaud@gmail.com',
    phone: '+33 7 81 74 16 18',
    website: 'http://127.0.0.1:5173/',
};

export default function Contact() {
    const svgContacts = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white"}}><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white"}}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white"}}><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white"}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>
    ];
    return (
        <div className="profile-contact">
            <h2 className="profile-contact-title">Contact</h2>
            <ul className="profile-contact-list">
                {Object.keys(contacts).map(
                    (key, index) => {
                        const value = contacts[key];
                        let contactLink;
                        switch (key) {
                            case 'adress':
                                contactLink = constactsLinks[key];
                                break;
                            case 'email':
                                contactLink = `mailto:${value}`;
                                break;
                            case 'phone':
                                contactLink = `tel:${value}`;
                                break;
                            case 'website':
                                contactLink = constactsLinks[key];
                                break;
                        }
                        return (
                            <li key={key} className="profile-contact-content">
                                <div className="profile-contact-svg">
                                    {svgContacts[index]}
                                </div>
                                <div className="profile-contact-link">
                                    <a href={contactLink}>{value}</a>
                                </div>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};