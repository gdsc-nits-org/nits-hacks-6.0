import Home from "./Pages/Home/Home";
import Teams from "./Pages/TeamPage/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Teams" element={<Teams />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
