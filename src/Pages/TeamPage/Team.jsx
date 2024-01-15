import styles from "./Team.module.scss"
import design from "./spam/design.svg"
import { useState } from "react";
const Card = (props) => {
    return (
        <div key={props.id} className={styles.card}>
            <div className={styles.box}>
                <img className={styles.img} src={props.img} alt={props.alt} />
            </div>

            <div className={styles.design}>
                <img className={styles.desimg} src={design} />
                <div className={styles.social}>
                    <img className={styles.logo} src="https://s3-alpha-sig.figma.com/img/f450/f8aa/8efd2714f3a4aaccae56c77a519aa596?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SsqKOC8E9WXu9owo67Cu0M193CvxWusMmK~nEuxe2bH6ETo2lSbaWSkVEdg5icZLiKCP~JVGNUOnU9lQrM5LcvTFvs8-aVLsHoCYxKIL5~Kewtaqfx5SwaWMERKeGeFOO-YBGFCgEsXn-lkRPU5Ravo0CDteoA5mnY5CJfvOcofFKd5QTLCzu~qRdfTHpZFsAoz-KreK~skqcoClwJDieJ41eytTo-YJbsUTGa1HIOQOdCMmd8K7Sf71jkHf9XP1P5NkFVROK-9KWlAQDUssDl23Y5H2uWiXT4VYknyorwqYJoBpvk3-PnXoyEIbvZz6gGrR~O6EKr4jJwkTVEAzhw__" alt="instagram" />
                    <img className={styles.logo} src="https://s3-alpha-sig.figma.com/img/1c7f/bbb4/7f72f4cd9c19126b202afe2584ed4b29?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1aXekZZobz2lwcS9bGkvY0Eq1G9ciXyxeLWsijHv1IcbrT0jnyxF7m3WSWdeGFZvjerRlW63kc-0CJCe40vIxyjkAuaoGoMaY7dgbmWvI1ZB7bSvwAwZmjzji2p937PXrHDPadnjKyvSnoNoa2OlU8dRJOQBqK28srYVRl4GwtjHPr4QwmDNe9yayQSmybKvso-Y-SgaDepzLe06UfRA34Iaa--hpS-WSpvNwfy6l~dY1~~fO586pLTr5bVVOD4FQRDszss5Om8~9EQdzGMcRXbFAw3EGJ8xbv1CHAtsFuku8B0WSehTx1z2ssolcH5wWo89qBwqvdfeM3BcMO88g__" alt="facebook" />
                    <img className={styles.logo} src="https://s3-alpha-sig.figma.com/img/ba47/8f3e/3cce233fa070836da2c8bf0bc7bdaaed?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5qi0wLh~6etEM2Gpq~Cd4eJ3QOUtDi6G06ylroqQd1aDN-P1uwUOvuraRcGvGOPcbcfud2Saa5nU0K4qsLBPEoYRfDf5fZYDGCYfcUWoK0LeNMJ~VsujZ7CGcBZz5DmtTEujdLhYUcqtP3C7Ce3ZM6PvNRf7TPhFdkQXfIjJKve-2Qt26Cvjoa7PzYFxFbfbYcuHz2Jl1Tcwg3awkL5jHrBNR2ty-gVtdsP~k0bO7DArHIcGl4ri8X17xMlXZoWOStMKOI23SaGSFfEMRhQkJRUUZPWDYjbYOJBIMecempEDEgoOJlq5o55Vc9VQL40Qgau6hcvhxJ6A6~RG24Nkw__" alt="twiter" />
                    <img className={styles.logogit} src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" alt="github" />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.designation}>{props.designation}</p>
            </div>
        </div>
    );
}
const Teams = () => {
    const teams = [
        {
            id: 1,
            team: "FACULTY",
        },
        {
            id: 2,
            team: "ORGANISERS",
        },
        {
            id: 3,
            team: "TECH",
        },
        {
            id: 4,
            team: "CORE",
        },
        {
            id: 5,
            team: "VOLUNTEERS",
        },

    ];
    const FACULTY = [{
        id: 1,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "FACULTY",
        designation: "ABC"
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "FACULTY",
        designation: "ABC"
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "FACULTY",
        designation: "ABC"
    }];

    const TECH = [
        {
            id: 7,
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
            name: "ABC",
            category: "TECH",
            designation: "ABC"
        },
        {
            id: 8,
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
            name: "ABC",
            category: "TECH",
            designation: "ABC"
        },
        {
            id: 9,
            img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
            name: "ABC",
            category: "TECH",
            designation: "ABC"
        },
    ]
    const CORE = [{
        id: 10,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "CORE",
        designation: "ABC"
    },
    {
        id: 11,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "CORE",
        designation: "ABC"
    },
    {
        id: 12,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "CORE",
        designation: "ABC"
    }
    ]
    const ORGANISERS = [{
        id: 13,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "ORGANISERS",
        designation: "ABC"
    },
    {
        id: 14,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "ORGANISERS",
        designation: "ABC"
    },
    {
        id: 15,
        img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
        name: "ABC",
        category: "ORGANISERS",
        designation: "ABC"
    }
    ]
    const VOLUNTEERS =
        [
            {
                id: 16,
                img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
                name: "ABC",
                category: "VOLUNTEERS",
                designation: "ABC"
            },
            {
                id: 17,
                img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
                name: "ABC",
                category: "VOLUNTEERS",
                designation: "ABC"
            },
            {
                id: 18,
                img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705243449/Nits%20hacks%206.0/Teams/fmha1lhmpilyn6miadrl.jpg",
                name: "ABC",
                category: "VOLUNTEERS",
                designation: "ABC"
            }

        ]


    const [teamName, setTeamName] = useState("FACULTY");


    const filterCategory = (e) => {
        setTeamName(e.target.name);
    }
    if (teamName === 'FACULTY') {
        return (
            <div className={styles.teamsCont}>
                <div className={styles.teams}>
                    <h1 className={styles.headingteams}>TEAMS</h1>
                    <div className={styles.teams_body}>
                        {teams.map((s) => {
                            return (
                                <div key={s.id} className={styles.button}>
                                    <div className={styles.state_layer}>
                                        <button
                                            className={styles.button_text}
                                            name={s.team}
                                            onClick={filterCategory}
                                        >{s.team}</button>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>

                <div className={styles.teamname}>
                    <h1 className={styles.headingteamsa}>{teamName}</h1>
                    <div className={styles.teamname_body}>
                        {FACULTY.map((s) => <Card id={s.id} name={s.name} alt={s.alt} img={s.img} designation={s.designation} />)}
                    </div>
                </div>

            </div>
        );
    }
    else if (teamName === 'TECH') {
        return (
            <div className={styles.teamsCont}>
                <div className={styles.teams}>
                    <h1 className={styles.headingteams}>TEAMS</h1>
                    <div className={styles.teams_body}>
                        {teams.map((s) => {
                            return (
                                <div key={s.id} className={styles.button}>
                                    <div className={styles.state_layer}>
                                        <button
                                            className={styles.button_text}
                                            name={s.team}
                                            onClick={filterCategory}
                                        >{s.team}</button>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
                <div className={styles.teamname}>
                    <h1 className={styles.headingteamsa}>{teamName}</h1>
                    <div className={styles.teamname_body}>
                        {TECH.map((s) => <Card id={s.id} name={s.name} alt={s.alt} img={s.img} designation={s.designation} />)}
                    </div>
                </div>

            </div>
        );
    }
    else if (teamName === 'CORE') {
        return (
            <div className={styles.teamsCont}>
                <div className={styles.teams}>
                    <h1 className={styles.headingteams}>TEAMS</h1>
                    <div className={styles.teams_body}>
                        {teams.map((s) => {
                            return (
                                <div key={s.id} className={styles.button}>
                                    <div className={styles.state_layer}>
                                        <button
                                            className={styles.button_text}
                                            name={s.team}
                                            onClick={filterCategory}
                                        >{s.team}</button>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
                <div className={styles.teamname}>
                    <h1 className={styles.headingteamsa}>{teamName}</h1>
                    <div className={styles.teamname_body}>
                        {CORE.map((s) => <Card id={s.id} name={s.name} alt={s.alt} img={s.img} designation={s.designation} />)}
                    </div>
                </div>

            </div>
        );
    }
    else if (teamName === 'ORGANISERS') {
        return (
            <div className={styles.teamsCont}>
                <div className={styles.teams}>
                    <h1 className={styles.headingteams}>TEAMS</h1>
                    <div className={styles.teams_body}>
                        {teams.map((s) => {
                            return (
                                <div key={s.id} className={styles.button}>
                                    <div className={styles.state_layer}>
                                        <button
                                            className={styles.button_text}
                                            name={s.team}
                                            onClick={filterCategory}
                                        >{s.team}</button>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
                <div className={styles.teamname}>
                    <h1 className={styles.headingteamsa}>{teamName}</h1>
                    <div className={styles.teamname_body}>
                        {ORGANISERS.map((s) => <Card id={s.id} name={s.name} alt={s.alt} img={s.img} designation={s.designation} />)}
                    </div>
                </div>

            </div>
        );
    }


    return (
        <div className={styles.teamsCont}>
            <div className={styles.teams}>
                <h1 className={styles.headingteams}>TEAMS</h1>
                <div className={styles.teams_body}>
                    {teams.map((s) => {
                        return (
                            <div key={s.id} className={styles.button}>
                                <div className={styles.state_layer}>
                                    <button
                                        className={styles.button_text}
                                        name={s.team}
                                        onClick={filterCategory}
                                    >{s.team}</button>
                                </div>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
            <div className={styles.teamname}>
                <h1 className={styles.headingteamsa}>{teamName}</h1>
                <div className={styles.teamname_body}>
                    {VOLUNTEERS.map((s) => <Card id={s.id} name={s.name} alt={s.alt} img={s.img} designation={s.designation} />)}
                </div>
            </div>

        </div>
    );
}



export default Teams
