import {
	Navbar,
	Footer,
	NitsHacks,
	Techno,
	Sponsor,
	Event,
} from "../../components/index";
const Home = () => {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Navbar />
			<NitsHacks />
			<Techno />
			<Event />
			<Sponsor />
			<Footer />
		</div>
	);
};
export default Home;
