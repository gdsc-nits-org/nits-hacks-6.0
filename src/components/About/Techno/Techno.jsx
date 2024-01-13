import styles from './Techno.module.scss'
const Techno = () => {
    return (
        <div className={styles.Techno}>
            <div className={styles.aboutCont}>
                <h1 className={styles.heading}>
                    <div className={styles.aboutHead1}>ABOUT</div>
                    <div className={styles.aboutHead2}>TECHNOESIS</div>
                </h1>
                <p className={styles.p}>
                    Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. This mega event has left its mark as of the most prominent techfests across the country. The cauldron of enthusiasm and knowledge attracts various students, presenting the chance to let their minds run wild with ideads, fostering the inventors of the future.
                </p>
            </div>
            <div className={styles.LottieCont}>
                <img className={styles.img} src="https://res.cloudinary.com/dhry5xscm/image/upload/v1705177410/nits-hacks-6.0/barnil_gh48ld.gif" alt="sonic..." />
            </div>
        </div>
    );
}
export default Techno;