import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Preview from "./components/Preview/Preview";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	const [audio] = useState(new Audio("/sound/button2_re.mp3"));

	useEffect(() => {
		[...document.querySelectorAll("a")]
			.filter((a) => !a.className.startsWith("_left"))
			.forEach((e) => {
				e.addEventListener("click", () => {
					audio.play();
				});
			});
	});

	return loaded ? <Home /> : <Preview setLoaded={setLoaded} />;
};

export default App;
