/* eslint-disable react/prop-types */
import styles from "./Teamcard.module.scss";
import { useState } from "react";
import design from "./spam/design.svg";
const TeamCard = (props) => {
	const [audio] = useState(new Audio("/sound/button2_re.mp3"));

	const playm = () => {
		return (audio.volume = 0.5), audio.play();
	};

	return (
		<div onMouseEnter={playm} className={styles.card}>
			<div className={styles.box}>
				<img
					className={styles.img}
					src={props.img}
					alt="members"
					loading="lazy"
				/>
			</div>
			<div className={styles.design}>
				<img className={styles.desimg} src={design} />
				<div className={styles.social}>
					{props.fb && (
						<a href={props.fb} target="_blank" rel="noreferrer">
							<img
								className={styles.logo}
								src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg"
								alt="facebook"
							/>
						</a>
					)}
					{props.linkedin && (
						<a href={props.linkedin} target="_blank" rel="noreferrer">
							{" "}
							<img
								className={styles.logo}
								src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705425898/Nits%20hacks%206.0/Teams/nnj4l11tum53qdgmny4v.png"
								alt="linkedin"
							/>
						</a>
					)}
					{props.git && (
						<a href={props.git} target="_blank" rel="noreferrer">
							<img
								className={styles.logo}
								src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705429562/Nits%20hacks%206.0/Teams/lavkmin5prqostnlukqh.png"
								alt=" github"
							/>
						</a>
					)}
					{props.cf && (
						<a href={props.cf} target="_blank" rel="noreferrer">
							<img
								className={styles.logo}
								src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705486367/Nits%20hacks%206.0/Teams/lfqewnoiatuujzkelmqk.png"
								alt=" codeforces"
							/>
						</a>
					)}
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.name}>{props.name}</p>
				{props.designation && (
					<p className={styles.designation}>{props.designation}</p>
				)}
			</div>
		</div>
	);
};
export default TeamCard;
