import styles from "./landing.module.scss";
import Lottie from "lottie-react";
import arrowAnimation from "../../lottiefiles/home_arror.json";

const Landing = () => {
	return (
		<div className={styles.landing_main}>
			<div>
				<img src="/Variant3.svg" alt="" className={styles.biome_text} />
			</div>
			<div className={styles.superflex}>
				<img src="/Subtract.png" alt="" className={styles.tag} />
				<img src="/nitshack.png" alt="" className={styles.nitshack} />
				<img src="/dates.png" alt="" className={styles.dates} />
				<div className={styles.arrow}>
					<a href="#about">
						<Lottie animationData={arrowAnimation} />
					</a>
				</div>
			</div>
			<div className={styles.empty}></div>
		</div>
	);
};

export default Landing;
