import { useTranslation } from 'react-i18next';
import "./ProfileBody.css";

interface About {
    Country: string;
    City: string;
    Age: number;
};

interface Language {
    Name: string;
    Level: string;
    Percentage: number;
}

export default function ProfileBody() {
    const { t } = useTranslation();

    const aboutMe : About = {
        Country: "France",
        City: "Lyon",
        Age: 19
    };

    const languages : Language[] = [
        {
            Name: t("speakLangs.fr"),
            Level: "C2",
            Percentage: 100
        },
        {
            Name: t("speakLangs.it"),
            Level: "C2",
            Percentage: 100
        },
        {
            Name: t("speakLangs.en"),
            Level: "B2",
            Percentage: 67
        },
        {
            Name: t("speakLangs.es"),
            Level: "B1",
            Percentage: 50
        },
        {
            Name: t("speakLangs.cn"),
            Level: "A1",
            Percentage: 17
        }
    ];

    return (
        <div className="profile-body">
            <div className="profile-body-content">
                <div className="profile-body-about">
                    {Object.keys(aboutMe).map((key) => {
                        return (
                            <div key={key} className="profile-body-about-item">
                                <span>{key} :</span>
                                <span>{aboutMe[key as keyof About]}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="profile-body-speak">
                    {languages.map((lang) => {
                        const radius = 30;
                        const circumference = 2 * Math.PI * radius;
                        const progress = ((100 - lang.Percentage) / 100) * circumference;
                        return (
                            <div key={lang.Name} className="profile-body-speak-item">
                                <svg width="80" height="80">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r={radius}
                                        fill="transparent"
                                        stroke="#10222E"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r={radius}
                                        fill="transparent"
                                        stroke="#FFA500"
                                        strokeWidth="4"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={progress}
                                        strokeLinecap="round"
                                        transform={`rotate(-90 40 40)`}
                                    />
                                    <text 
                                        x="50%" 
                                        y="50%" 
                                        textAnchor="middle" 
                                        dominantBaseline="middle" 
                                        fill="white"
                                    >
                                        {lang.Level}
                                    </text>
                                </svg>
                                <span>{lang.Name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};