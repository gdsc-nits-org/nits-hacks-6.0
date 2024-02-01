import styles from "./Home.module.scss";

import {
	Navbar,
	Footer,
	Landing,
	NitsHacks,
	Techno,
	Sponsor,
	Event,
	SpeakerCard,
} from "../../components/index";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";

const Home = () => {
	const [audio] = useState(new Audio("/sound/bgm_re.mp3"));

	useEffect(() => {
		audio.volume = 0.1;
		audio.play();
	});

	return (
		<div>
			<Navbar />
			<Landing />
			<div id="about" className={styles.about}>
				<NitsHacks />
				<Techno />
			</div>
			<Event />
			<SpeakerCard />
			<Sponsor />
			<Footer />
		</div>
	);
};
export default Home;
