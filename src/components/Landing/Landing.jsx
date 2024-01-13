import { useRef, useState, useEffect } from "react";
import styles from "./landing.module.scss";
import Lottie from "lottie-react";
import arrowAnimation from "../../lottiefiles/home_arror.json";
import Pixel from "../Pixel/Pixel";

const Landing = () => {
	const [move, setMove] = useState(false);
	const pixelRef = useRef(null);
	const rainContainerRef = useRef(null);

	const rain = () => {
		let amt = 45;
		let i = 0;
		while (i < amt) {
			let drop = document.createElement("i");
			let size = Math.random() * 5;

			let posX = Math.floor(Math.random() * window.innerWidth);
			let delay = Math.random() * -20;
			let duration = Math.random() * 5;

			drop.style.width = 0.2 + size + "px";
			drop.style.left = posX + "px";
			drop.style.animationDelay = delay + "s";
			drop.style.animationDuration = 1 + duration + "s";
			rainContainerRef.current.appendChild(drop);
			i++;
		}
	};

	useEffect(() => {
		setTimeout(() => rain(), 100);
	}, []);

	return (
		<div
			className={styles.landing_main}
			onPointerMove={(e) => {
				let x = e.clientX;
				let y = e.clientY;

				pixelRef.current.style.left = x + scrollX + "px";
				pixelRef.current.style.top = y + scrollY + "px";
			}}
			onPointerLeave={() => setMove(false)}
			onPointerEnter={() => setMove(true)}
			ref={rainContainerRef}
		>
			<div className={move ? styles.pixel : undefined} ref={pixelRef}></div>
			<div className={styles.superflex}>
				<img src="/Subtract.png" alt="" className={styles.tag} />
				<h1 className={styles.nitshack}>NITS HACKS 6.0</h1>
				<h1 className={styles.dates}>01. 02. 03. 04</h1>
				<h1 className={styles.month}>February</h1>
				<div className={styles.arrow}>
					<a href="#about">
						<Lottie animationData={arrowAnimation} />
					</a>
				</div>
			</div>
			<Pixel />
		</div>
	);
};

export default Landing;
