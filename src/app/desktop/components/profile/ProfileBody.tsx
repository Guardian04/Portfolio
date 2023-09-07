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
};

interface Programmation {
    Name: string;
    Percentage: number;
};

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
            Level: "C1",
            Percentage: 83
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

    const programmations : Programmation[] = [
        {
            Name: "HTML",
            Percentage: 95
        },
        {
            Name: "CSS",
            Percentage: 90
        },
        {
            Name: "Js",
            Percentage: 75
        },
        {
            Name: "PHP",
            Percentage: 15
        },
        {
            Name: "Python",
            Percentage: 90
        },
        {
            Name: "C",
            Percentage: 55
        },
        {
            Name: "C++",
            Percentage: 65
        },
        {
            Name: "C#",
            Percentage: 25
        },
        {
            Name: "Java",
            Percentage: 20
        },
        {
            Name: "SQL",
            Percentage: 10
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
                                const easedPercentage = easeOutCubic(percentage);
                                const currentProgress = circumference - easedPercentage * (circumference - progress);
                                setOffset(currentProgress);

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
                                    />
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
                <div className="profile-body-progra">
                    {programmations.map((prog, index) => {
                        const progressBar = document.getElementById(`${prog.Name}-progress-bar`);
                        const offset = progressBar ? progressBar.offsetWidth : 0;
                        const progress = Math.floor(100 * offset / 230);
                        const [animationend, setAnimationEnd] = useState(false);
                        
                        if (progressBar) {
                            progressBar.addEventListener("animationend", () => {
                                setAnimationEnd(true);
                            });
                        }

                        return (
                            <div key={prog.Name} className="profile-body-progra-item">
                                <div className="progra-container">
                                    <span>{prog.Name}</span>
                                    <span>{animationend ? prog.Percentage : progress} %</span>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="bar" style={{width: `${prog.Percentage}%`}}>
                                        <div className="progress-bar" id={`${prog.Name}-progress-bar`} style={{animationDelay: `${index * 0.2}s`}}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};