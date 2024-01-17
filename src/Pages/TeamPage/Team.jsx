import styles from "./TeamPage.module.scss"
import TeamCard from "../../components/TeamCard/TeamCard"
import Navbar from "../../../src/components/Navbar/Navbar"
import FACULTY from "./Faculty.json"
import TECH from "./Tech.json"
import VOLUNTEERS from "./Volunteers.json"
import ORGANISERS from "./Organisers.json"
import CORE from "./Core.json"
import Footer from "../../components/Footer/Footer"
const Teams = () => {


    const MemberDetails = (d) => {
        return <TeamCard {...d} key={d._id} />;
    };
    return (
        <>
            <div className={styles.teamsCont}>
                <Navbar />
                <div className={styles.teams}>
                    <h1 className={styles.headingteams}>TEAMS</h1>
                    <div className={styles.teams_body}>


                        { /* <div className={styles.button}>
                             <div className={styles.state_layer}>
                                 <button onClick={() => document.getElementById("FACULTY").scrollIntoView({ behaviour: 'smooth' })}
                                     className={styles.button_text}
                                 >FACULTY</button>
                             </div>
                             </div> */}
                        <div className={styles.button}>
                            <div className={styles.state_layer}>
                                <button onClick={() => document.getElementById("CORE").scrollIntoView({ behaviour: 'smooth' })}
                                    className={styles.button_text}
                                >CORE</button>
                            </div>
                        </div><div className={styles.button}>
                            <div className={styles.state_layer}>
                                <button onClick={() => document.getElementById("TECH").scrollIntoView({ behaviour: 'smooth' })}
                                    className={styles.button_text}
                                >TECH</button>
                            </div>
                        </div><div className={styles.button}>
                            <div className={styles.state_layer}>
                                <button onClick={() => document.getElementById("ORGANISERS").scrollIntoView({ behaviour: 'smooth' })}
                                    className={styles.button_text}
                                >ORGANISERS</button>
                            </div>
                        </div><div className={styles.button}>
                            <div className={styles.state_layer}>
                                <button onClick={() => document.getElementById("VOLUNTEERS").scrollIntoView({ behaviour: 'smooth' })}
                                    className={styles.button_text}
                                >VOLUNTEERS</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.page}>

                    {/*  <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="FACULTY">
                            FACULTY
                        </div> <div className={styles.teamname_body}>
                            {FACULTY.map(MemberDetails)}
                        </div>
                    </div>
                     */}

                    <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="CORE">
                            CORE
                        </div> <div className={styles.teamname_body}>
                            {CORE.map(MemberDetails)}
                        </div>
                    </div>


                    <div className={styles.teamname}>
                        <div className={styles.headingteamsa} id="TECH">
                            TECH
                        </div> <div className={styles.teamname_body}>
                            {TECH.map(MemberDetails)}
                        </div>
                    </div>


                    <div className={styles.teamname}>

                        <div className={styles.headingteamsa} id="ORGANISERS">
                            ORGANISERS
                        </div> <div className={styles.teamname_body}>
                            {ORGANISERS.map(MemberDetails)}
                        </div>
                    </div>


                    <div className={styles.teamname}>

                        <div className={styles.headingteamsa} id="VOLUNTEERS">
                            VOLUNTEERS
                        </div> <div className={styles.teamname_body}>
                            {VOLUNTEERS.map(MemberDetails)}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>

    )
}
export default Teams