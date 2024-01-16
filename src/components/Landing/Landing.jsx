import { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Landing.module.scss";
import Lottie from "lottie-react";
import arrowAnimation from "../../lottiefiles/home_arror.json";
import Pixel from "../Pixel/Pixel";

const Landing = () => {
	const [move, setMove] = useState(false);
	const pixelRef = useRef(null);
	const rainContainerRef = useRef(null);

	// Rain
	const rain = () => {
		let amt = 60;
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
			className={styles.landing_main_div}
			// Pointer style
			onPointerMove={(e) => {
				setMove(true);
				let x = e.clientX;
				let y = e.clientY;

				pixelRef.current.style.left = x + scrollX + "px";
				pixelRef.current.style.top = y + scrollY + "px";
			}}
			onPointerLeave={() => setMove(false)}
			onPointerEnter={() => setMove(true)}
			ref={rainContainerRef}
			id="home"
		>
			<div className={styles.landing_img}>
				{/* <img src="/landing.svg" alt="" /> */}
				<img
					className={styles.imgs}
					src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705430692/hacks%206.0/clouds_2_xc3saa.webp"
					alt="Clouds"
				/>
				<img
					className={styles.imgs}
					src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705430676/hacks%206.0/layer_2_1_xhsldo.webp"
					alt="Buildings"
				/>
				<img
					className={styles.imgs}
					src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705430647/hacks%206.0/layer_3_1_1_j5mcuq.webp"
					alt="Front"
				/>
				<img
					className={styles.imgs}
					src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705431199/hacks%206.0/Group_5252_1_p3s348.webp"
					alt=""
				/>
			</div>
			<div className={styles.overlap}></div>

			<div className={move ? styles.pixel : undefined} ref={pixelRef}></div>
			<div className={styles.superflex}>
				<img
					src="https://res.cloudinary.com/drffnopta/image/upload/v1705337573/subtract1_z0rakx.png"
					alt=""
					className={styles.tag}
				/>
				<h1 className={styles.nitshack}>NITS HACKS 6.0</h1>
				<h1 className={styles.dates}>01. 02. 03. 04.</h1>
				<h1 className={styles.month}>February</h1>
				<div className={styles.arrow}>
					<Link to="about" smooth={true}>
						<Lottie animationData={arrowAnimation} />
					</Link>
				</div>
			</div>
			<Pixel />
		</div>
	);
};

export default Landing;
