import styles from "./NitsHacks.module.scss";
import Lottie from "lottie-react";
import nitsHacksGif from "../../../lottiefiles/about_man_in_pc.json";

const NitsHacks = () => {
	return (
		<div className={styles.nitsParent}>
			<div className={styles.NitsHacks}>
				<div className={styles.aboutCont}>
					<h1 className={styles.heading}>
						<div className={styles.aboutHead1}>ABOUT</div>
						<div className={styles.aboutHead2}>NITS HACKS 6.0</div>
					</h1>
					<p className={styles.p}>
						NITS HACKS, organized by NIT Silchar, is a premier hackathon in
						northeastern India. It provides a platform for tech enthusiasts to
						collaborate, showcase problem-solving skills, and emphasizes soft
						skill development. More than just a hackathon, it offers valuable
						technical learning experiences, encouraging participants to tackle
						real-life challenges and build innovative technology projects. NITS
						HACKS celebrates innovation and shapes the next generation of tech
						leaders.
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
