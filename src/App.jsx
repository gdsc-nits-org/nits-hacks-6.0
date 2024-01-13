import { useState } from "react";
import Home from "./Home";
import Preview from "./Pages/Preview/Preview";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	return loaded ? <Home /> : <Preview setLoaded={setLoaded} />;
};

export default App;
