import { useState, useEffect } from 'react';
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
                        const radius = 25;
                        const circumference = 2 * Math.PI * radius;
                        const progress = ((100 - lang.Percentage) / 100) * circumference;

                        const [offset, setOffset] = useState(circumference);
                        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

                        useEffect(() => {
                        const animationDuration = 3000;

                        const animateCircle = () => {
                            let start = Date.now();
                            const end = start + animationDuration;

                            function step() {
                            const now = Date.now();
                            const percentage = Math.min(1, (now - start) / animationDuration);
                            const easedPercentage = easeOutCubic(percentage); // Appliquer une fonction d'interpolation (easeOutCubic dans cet exemple)
                            const currentOffset = circumference - easedPercentage * (circumference - progress);
                            setOffset(currentOffset);

                            if (now < end) {
                                requestAnimationFrame(step);
                            }
                            }

                            requestAnimationFrame(step);
                        };

                        animateCircle();
                        }, [circumference, progress]);

                        return (
                            <div key={lang.Name} className="profile-body-speak-item">
                                <svg width="70" height="70">
                                    <circle
                                        cx="35"
                                        cy="35"
                                        r={radius}
                                        fill="transparent"
                                        stroke="#10222E"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="35"
                                        cy="35"
                                        r={radius}
                                        fill="transparent"
                                        stroke="#FFA500"
                                        strokeWidth="4"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                        strokeLinecap="round"
                                        transform={`rotate(-90 35 35)`}
                                    >
                                    </circle>
                                    <text 
                                        x="50%" 
                                        y="50%" 
                                        textAnchor="middle" 
                                        dominantBaseline="middle" 
                                        fill="white"
                                        fontSize="0.8rem"
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