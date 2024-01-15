import { useState } from "react";
import Home from "./Home";
import Preview from "./components/Preview/Preview";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<Routes>
				{loaded ? (
					<Route exact path="/" element={<Home />} />
				) : (
					<Route exact path="/" element={<Preview setLoaded={setLoaded} />} />
				)}
				;
				<Route exact path="/Event" element={<EventPage />} />
			</Routes>
		</>
	);
};

export default App;
