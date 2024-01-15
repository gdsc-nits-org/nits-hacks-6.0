import { Navbar, Event, NitsHacks, Techno, Landing, Sponsor, Footer } from "./components/index";

function Home() {
	return (
		<div>
			<Navbar />
			<Landing />
			<NitsHacks />
			<Techno />
			<Event />
			<Sponsor />
			<Footer />
		</div>
	);
}

export default Home;
