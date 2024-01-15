import styles from "./Team.module.scss"
import design from "./spam/design.svg"
import { useState } from "react";
import Navbar from "../../../src/components/Navbar/Navbar"
import FACULTY from "./Faculty.json"
import TECH from "./Tech.json"
import VOLUNTEERS from "./Volunteers.json"
import ORGANISERS from "./Organisers.json"
import CORE from "./Core.json"

const Card = (props) => {
    return (
        <div key={props.id} className={styles.card}>
            <div className={styles.box}>
                <img className={styles.img} src={props.img} alt={props.alt} />
            </div>

            <div className={styles.design}>
                <img className={styles.desimg} src={design} />
                <div className={styles.social}>
                    <img className={styles.logo} src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/instapxl_sj0sgp.svg" alt="instagram" />
                    <img className={styles.logo} src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg" alt="facebook" />
                    <img className={styles.logo} src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083935/twitterlogo_al9ufe.svg" alt="twiter" />
                    <img className={styles.logogit} src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705339231/stfg8if87qcxhij9nnwb.jpg" alt="github" />
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
    const [teamName, setTeamName] = useState("FACULTY");
    const filterCategory = (e) => {
        setTeamName(e.target.name);
    }
    if (teamName === 'FACULTY') {
        return (
            <div className={styles.teamsCont}>
                <Navbar />
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
                <Navbar />
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
                <Navbar />
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
                <Navbar />
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
            <Navbar />
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
