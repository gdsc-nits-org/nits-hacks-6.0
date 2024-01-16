import styles from "./Home.module.scss";

import {
	Navbar,
	Footer,
	Landing,
	NitsHacks,
	Techno,
	Sponsor,
	Event,
} from "../../components/index";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
	const [audio] = useState(new Audio("/sound/bgm.mp3"));

	useEffect(() => {
		audio.volume = 0.07;
		audio.play();
	});

	return (
		// <div style={{ overflowX: "hidden" }}>
		<div>
			<Navbar />
			<Landing />
			<div id="about" className={styles.about}>
				<NitsHacks />
				<Techno />
			</div>
			<Event />
			<Sponsor />
			<Footer />
		</div>
	);
};
export default Home;
