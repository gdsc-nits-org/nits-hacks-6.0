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

	const parallax = () => {
		const far = document.getElementById("far");
		const tag = document.getElementById("tag");
		const mid = document.getElementById("mid");
		const rocket1 = document.getElementById("rocket1");
		const rocket2 = document.getElementById("rocket2");
		const rocket3 = document.getElementById("rocket3");
		const hover_board = document.getElementById("hover_board");

		window.addEventListener("scroll", () => {
			let value = window.scrollY;
			far.style.transform = "TranslateY(" + value * 0.8 + "px)";
			mid.style.transform = "TranslateY(" + value * 0.6 + "px)";
			tag.style.transform = "TranslateY(" + value * 0.2 + "px)";
			hover_board.style.top = "calc(5vh + " + value * 0.8 + "px)";
			rocket1.style.transform = "TranslateY(" + value * 0.6 + "px) scale(0.4)";
			rocket2.style.transform = "TranslateY(" + value * 0.3 + "px) scale(0.7)";
			rocket3.style.transform = "TranslateY(" + value * 0.8 + "px) scale(0.3)";
		});
	};

	useEffect(() => {
		setTimeout(() => rain(), 100);
		parallax();
	}, []);

	return (
		<div className={styles.hero}>
			{/* <div className={styles.hero}> */}

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
					{/* farthest buildings */}
					<img
						className={styles.hover_board}
						id="hover_board"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705444035/hacks%206.0/hover_craft_kgbfdt.webp"
						alt=""
					/>
					<img
						className={`${styles.imgs} ${styles.far}`}
						id="far"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705430676/hacks%206.0/layer_2_1_xhsldo.webp"
						alt="Buildings"
					/>
					<img
						className={styles.rocket1}
						id="rocket1"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705439619/hacks%206.0/Group_5254_d7rqob.webp"
						alt=""
					/>
					<img
						className={styles.rocket2}
						id="rocket2"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705440728/hacks%206.0/Group_5254_right_yqs3kf.png"
						alt=""
					/>
					<img
						className={styles.rocket3}
						id="rocket3"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705440728/hacks%206.0/Group_5254_right_yqs3kf.png"
						alt=""
					/>

					{/* middle buildings */}
					<img
						id="mid"
						className={`${styles.imgs} ${styles.mid}`}
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705430647/hacks%206.0/layer_3_1_1_j5mcuq.webp"
						alt="Front"
					/>

					<img
						className={styles.rocket4}
						id="rocket4"
						src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1705439619/hacks%206.0/Group_5254_d7rqob.webp"
						alt=""
					/>

					{/* Front buildings */}
					<img
						className={`${styles.imgs} ${styles.front}`}
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
						id="tag"
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
		</div>
	);
};

export default Landing;
