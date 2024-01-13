import EventPage from "./Pages/Home/EventPage/EventPage";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/Event" element={<EventPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
