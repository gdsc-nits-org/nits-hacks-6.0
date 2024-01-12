import styles from './Techno.module.scss'
const Techno = () => {
    return (
        <div className={styles.Techno}>
            <div className={styles.aboutCont}>
                <h1 className={styles.heading}>
                    ABOUT TECHNOESIS
                </h1>
                <p className={styles.p}>
                    Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. This mega event has left its mark as of the most prominent techfests across the country. The cauldron of enthusiasm and knowledge attracts various students, presenting the chance to let their minds run wild with ideads, fostering the inventors of the future.
                </p>

            </div>
            <div className={styles.brochureCont}>
                <a className={styles.brochure}>BROCHURE</a>
            </div>
        </div>
    );
}
export default Techno;