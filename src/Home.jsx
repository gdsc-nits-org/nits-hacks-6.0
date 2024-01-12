import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Events from "./Pages/Events/Events";

function App() {
	return (
		<div>
			<Navbar />
			<Landing />
			<Events />
			<Footer />
		</div>
	);
}

export default App;
