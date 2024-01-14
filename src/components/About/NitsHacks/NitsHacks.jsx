import styles from "./NitsHacks.module.scss";
import Lottie from "lottie-react";
import nitsHacksGif from "/public/about_man_in_pc.json";
import { useRef } from "react"
const NitsHacks = () => {
    const NitsHacks = useRef(null);
    return (
        <div className={styles.nitsParent}>
            <div className={styles.NitsHacks}>
                <div className={styles.aboutCont}>
                    <h1 className={styles.heading}>
                        <div className={styles.aboutHead1}>ABOUT</div>
                        <div className={styles.aboutHead2}>NITS HACKS 6.0</div>
                    </h1>
                    <p className={styles.p}>
                        Tecnoesis is the annual techno-managerial event of NIT Silchar,
                        promising all tech geeks the ideal niche of fascinating events,
                        workshops, competitions and interactions worth a lifetime. This mega
                        event has left its mark as of the most prominent techfests across
                        the country. The cauldron of enthusiasm and knowledge attracts
                        various students, presenting the chance to let their minds run wild
                        with ideads, fostering the inventors of the future.
                    </p>
                </div>
                <div className={styles.parent}>
                    <div className={styles.LottieCont}>
                        <Lottie animationData={nitsHacksGif} />
                    </div>
                </div>
            </div>
            <div className={styles.brochure}>
                <a className={styles.btn}>DOWNLOAD BROCHURE</a>
            </div>
        </div>
    );
};
export default NitsHacks;
