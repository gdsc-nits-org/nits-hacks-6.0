import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Preview from "./components/Preview/Preview";
import { Footer, Navbar } from "./components";
import Teams from "./Pages/TeamPage/Team";
import Custom404 from "./Pages/404/404";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<Routes>
				{loaded ? (
					<Route path="/" element={<Home />} />
				) : (
					<Route path="/" element={<Preview setLoaded={setLoaded} />} />
				)}
				;
				<Route path="*" element={<Custom404 />} />
				<Route
					path="/teams"
					element={
						<>
							<Navbar />
							<Teams />
							<Footer />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
