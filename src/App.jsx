import { useState } from "react";
import Home from "./Home";
import Preview from "./components/Preview/Preview";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			{loaded ? <Home /> : <Preview setLoaded={setLoaded} />};
			<Routes>
				<Route exact path="/Event" element={<EventPage />}></Route>
			</Routes>
		</>
	);
};

export default App;
