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
const Home = () => {
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
