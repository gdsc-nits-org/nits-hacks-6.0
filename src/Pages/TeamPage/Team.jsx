import styles from "./TeamPage.module.scss"
import TeamCard from "../../components/TeamCard/TeamCard"
import Navbar2 from "../../../src/components/Navbar/Navbar2"
//import FACULTY from "./Faculty.json"
import TECH from "./Tech.json"
import VOLUNTEERS from "./Volunteers.json"
import ORGANISERS from "./Organisers.json"
import CORE from "./Core.json"
import Footer from "../../components/Footer/Footer"
import Events from "./Carausel/Carausel"
const Teams = () => {


    const MemberDetails = (d) => {
        return <TeamCard {...d} key={d._id} />;
    };
    return (
        <>
            <div className={styles.teamsCont}>
                <Navbar2 />
                <Events />


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
