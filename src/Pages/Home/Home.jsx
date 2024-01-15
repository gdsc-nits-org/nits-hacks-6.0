import {
	Navbar,
	Footer,
	NitsHacks,
	Techno,
	Sponsor,
	Event,
	Landing,
} from "../../components/index";
const Home = () => {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Navbar />
			<Landing />
			<NitsHacks />
			<Techno />
			<Event />
			<Sponsor />
			<Footer />
		</div>
	);
};
export default Home;
