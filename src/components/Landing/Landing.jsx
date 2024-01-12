import styles from "./landing.module.scss";
import Lottie from "lottie-react";
import arrowAnimation from "../../lottiefiles/home_arror.json";

const Landing = () => {
	return (
		<div className={styles.landing_main}>
			<div>
				<img src="/Variant3.svg" alt="" className={styles.biome_text} />
			</div>
			<div className={styles.arrow}>
				<Lottie animationData={arrowAnimation} />
			</div>
		</div>
	);
};

export default Landing;
