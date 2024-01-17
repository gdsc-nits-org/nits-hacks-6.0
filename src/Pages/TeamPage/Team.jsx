import styles from "./TeamPage.module.scss"
import TeamCard from "../../components/TeamCard/TeamCard"
import Navbar from "../../../src/components/Navbar/Navbar"
import FACULTY from "./Faculty.json"
import TECH from "./Tech.json"
import VOLUNTEERS from "./Volunteers.json"
import ORGANISERS from "./Organisers.json"
import CORE from "./Core.json"
import { Link, Element } from "react-scroll"
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

    const MemberDetails = (d) => {
        return <TeamCard {...d} key={d._id} />;
    };
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
                                    <Link to={s.name} smooth={true}
                                        className={styles.button_text}
                                    >{s.team}</Link>
                                </div>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>

            <div className={styles.page}>
                <Element name="FACULTY">
                    <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="FACULTY">
                            FACULTY
                        </div> <div className={styles.teamname_body}>
                            {FACULTY.map(MemberDetails)}
                        </div>
                    </div>
                </Element>
                <Element name="CORE">
                    <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="CORE">
                            CORE
                        </div> <div className={styles.teamname_body}>
                            {CORE.map(MemberDetails)}
                        </div>
                    </div>
                </Element>
                <Element name="TECH">
                    <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="TECH">
                            TECH
                        </div> <div className={styles.teamname_body}>
                            {TECH.map(MemberDetails)}
                        </div>
                    </div>
                </Element>
                <Element name="ORGANISERS">
                    <div className={styles.teamname}>

                        <div className={styles.headingteamsa} id="ORGANISERS">
                            ORGANISERS
                        </div> <div className={styles.teamname_body}>
                            {ORGANISERS.map(MemberDetails)}
                        </div>
                    </div>
                </Element>
                <Element name="VOLUNTEERS">
                    <div className={styles.teamname}>

                        <div className={styles.headingteamsa} id="VOLUNTEERS">
                            VOLUNTEERS
                        </div> <div className={styles.teamname_body}>
                            {VOLUNTEERS.map(MemberDetails)}
                        </div>
                    </div>
                </Element>
            </div>
        </div>
    )
}
export default Teams