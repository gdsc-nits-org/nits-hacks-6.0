import { useState } from "react";
import Home from "./Pages/Home/Home";
import Preview from "./components/Preview/Preview";

const App = () => {
	const [loaded, setLoaded] = useState(false);
	return loaded ? <Home /> : <Preview setLoaded={setLoaded} />;
};

export default App;
