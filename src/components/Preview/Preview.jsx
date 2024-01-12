import { useRef } from "react";

import Lottie from "lottie-react";
import upgradeAnimation from "../../lottiefiles/upgrading.json";
import { useNavigate } from "react-router-dom";
import styles from "./preview.module.scss";

const Preview = () => {
	const lottieRef = useRef(null);
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.glow_container}>
				<div className={styles.text}>
					<img src="/16bit.png" alt="" className={styles.bit} />
					<img src="/transfer.png" alt="" className={styles.transfer} />
				</div>
				<div className={styles.insignia}>
					<img src="/insignia.png" alt="" />
				</div>
				<div className={styles.upgrading}>
					<Lottie
						lottieRef={lottieRef}
						onEnterFrame={() => lottieRef.current.setSpeed(0.75)}
						animationData={upgradeAnimation}
						initialSegment={[0, 120]}
						onComplete={() => {
							navigate("/home");
						}}
						loop={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Preview;
