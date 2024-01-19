import { useRef } from "react";
import Lottie from "lottie-react";
import upgradeAnimation from "../../lottiefiles/upgrading.json";
import styles from "./Preview.module.scss";
import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Preview = ({ setLoaded }) => {
	const lottieRef = useRef(null);
	const [audio] = useState(new Audio("/sound/loading.mp3"));

	useEffect(() => {
		audio.volume = 0.2;
		audio.play();
	});

	return (
		<div className={styles.container}>
			<div className={styles.glow_container}>
				<div className={styles.text}>
					<h1 className={styles.bit}>
						Setting Up the <span style={{ color: "white" }}>16-BIT</span> Biome
					</h1>
					<h1 className={styles.transfer}>
						Transferring to{" "}
						<span style={{ color: "white" }}>NITS HACK 6.0</span>
					</h1>
				</div>
				<div className={styles.insignia}>
					<img
						src="https://res.cloudinary.com/dnitrnzho/image/upload/v1705658340/insignia_bsuul9.webp"
						alt="nits-hacks"
					/>
				</div>
				<div className={styles.upgrading}>
					<Lottie
						lottieRef={lottieRef}
						onEnterFrame={() => lottieRef.current.setSpeed(0.5)}
						animationData={upgradeAnimation}
						initialSegment={[0, 120]}
						onComplete={() => {
							setLoaded(true);
							audio.pause();
						}}
						loop={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Preview;
