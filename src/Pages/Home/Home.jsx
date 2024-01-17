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
// import { useState } from "react";

const Home = () => {
	// const [audio] = useState(new Audio("/sound/bgm.mp3"));
	// const [playing, setPlaying] = useState(false);

	// document.onclick = (e) => {
	//   if (e.target.parentElement.tagName == "A" || e.target.tagName == "A")
	//     return;
	//   audio.volume = 0.1;
	//   if (playing) {
	//     audio.pause();
	//     setPlaying(false);
	//   } else {
	//     audio.play();
	//     setPlaying(true);
	//   }
	// };

	return (
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
