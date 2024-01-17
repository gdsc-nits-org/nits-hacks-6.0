import { useState } from "react";
import Home from "./Pages/Home/Home";
import Preview from "./components/Preview/Preview";
import { useEffect } from "react";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	const [audio] = useState(new Audio("/sound/button.mp3"));

	useEffect(() => {
		document.querySelectorAll("a").forEach((e) => {
			e.addEventListener("mouseenter", () => {
				audio.play();
			});
		});
	});

	return loaded ? <Home /> : <Preview setLoaded={setLoaded} />;
};
export default App;
